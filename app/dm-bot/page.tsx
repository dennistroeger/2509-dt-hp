"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function DmBotPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      linkedinUrl: formData.get("linkedinUrl") as string,
      listId: 10, // Using a different list ID for DM-Bot
    };

    try {
      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        // Redirect to DM-Booster ChatGPT after a short delay
        setTimeout(() => {
          window.location.href =
            "https://chatgpt.com/g/g-68decd3b89f481919226831ce4a49f84-dm-booster";
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Erfolgreich registriert!
            </h2>
            <p className="text-gray-600 mb-4">
              Du wirst in wenigen Sekunden zum DM-Booster weitergeleitet...
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            {/* Top Small Text / Banner */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-xs sm:text-sm font-medium text-red-800 mb-3 sm:mb-4">
              🤖 DM-Booster Bot
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              Starte dein{" "}
              <span className="text-red-600">LinkedIn DM-System</span> mit
              unserem Bot
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Gib deine Daten ein und erhalte sofort Zugang zu unserem
              intelligenten DM-Booster Bot, der dir dabei hilft, perfekte
              LinkedIn-Nachrichten zu erstellen.
            </p>

            {/* Form */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Vorname*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                    placeholder="Dein Vorname"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                    placeholder="deine@email.com"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkedinUrl"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    LinkedIn Profil URL*
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                    placeholder="https://linkedin.com/in/dein-profil"
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg py-4 px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Wird verarbeitet..."
                    : "Zum DM-Booster Bot →"}
                </button>
              </form>

              {/* Trust Badge / Disclaimer */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <span className="text-green-600">🔒</span>
                <p className="text-xs text-gray-500">
                  Deine Daten sind sicher und werden nur für den Bot-Zugang
                  verwendet.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  KI-gestützte Nachrichten
                </h3>
                <p className="text-sm text-gray-600">
                  Erstelle personalisierte LinkedIn-Nachrichten mit Hilfe von KI
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Sofortiger Zugang
                </h3>
                <p className="text-sm text-gray-600">
                  Starte sofort mit dem Bot und verbessere deine
                  LinkedIn-Strategie
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Bessere Ergebnisse
                </h3>
                <p className="text-sm text-gray-600">
                  Erhöhe deine Antwortrate und schließe mehr Geschäfte ab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}







