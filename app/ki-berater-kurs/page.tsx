"use client";

import { useState, useEffect } from "react";
import WaitlistForm from "../components/WaitlistForm";
import Footer from "../components/Footer";

function WaitlistCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/brevo/list-count?listId=13");
        if (response.ok) {
          const data = await response.json();
          const fetchedCount = data.count || 0;
          const finalCount = Math.min(fetchedCount + 40, 93);

          const startValue = 0;
          setCount(startValue);

          if (finalCount === startValue) {
            return;
          }

          const duration = 1500; // Animation duration in milliseconds
          let startTime: number | null = null;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(
              progress * (finalCount - startValue) + startValue
            );
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        } else {
          setCount(40);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
        setCount(40);
      }
    }

    fetchCount();
  }, []);

  if (count === null) {
    return <div className="mt-8 mb-4 h-[28px]" />;
  }

  return (
    <div className="mt-8 mb-4">
      <p className="text-lg font-semibold text-gray-800">
        {count} KI-Enthusiasten sind bereits auf der Warteliste!
      </p>
    </div>
  );
}

export default function KiBeraterKursPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <main className="min-h-screen relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Top Small Text / Banner */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs sm:text-sm font-medium text-blue-800 mb-3 sm:mb-4">
            🚀 Exklusiver KI-Berater-Kurs
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Wie du als KI-Berater{" "}
            <span className="text-blue-600">5-stellige Aufträge</span>{" "}
            generierst
          </h1>

          {/* Subheadline / Supporting Copy */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            Trag dich in die Warteliste ein und erfahre als Erster, wann der
            Kurs verfügbar ist. Die ersten 100 Teilnehmer erhalten einen Kurs
            kostenfrei.
          </p>

          <WaitlistCounter />

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl max-w-md mx-auto mb-6">
            <WaitlistForm
              formId="ki-berater-kurs"
              buttonText="Auf die Warteliste →"
              listId={13}
            />

            {/* Trust Badge / Disclaimer */}
            <div className="flex items-center justify-center mt-3 sm:mt-4 space-x-2">
              <span className="text-green-600">🔒</span>
              <p className="text-xs text-gray-500">
                Kein Spam. Nur wertvolle Infos zum Kurs.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
