"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function DownloadLinkedInFreebie() {
  useEffect(() => {
    // Track custom conversion for download page
    // Get LinkedIn tracking ID from cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const liFatId = getCookie("li_fat_id");

    // Send conversion via API route
    const sendConversion = async () => {
      try {
        const response = await fetch("/api/linkedin/conversion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            liFatId: liFatId || "",
            conversionEventName: "LINKEDIN_CEO_SYSTEM_DOWNLOAD",
            testMode: !liFatId && process.env.NODE_ENV === "development",
          }),
        });

        if (response.ok) {
          console.log("✅ LinkedIn conversion sent successfully");
        } else {
          console.error("❌ Failed to send LinkedIn conversion");
        }
      } catch (error) {
        console.error("Error sending LinkedIn conversion:", error);
      }
    };

    if (liFatId) {
      // Send conversion with real LinkedIn tracking ID
      sendConversion();
    } else if (process.env.NODE_ENV === "development") {
      // Send test conversion in development mode
      console.log("🧪 Testing LinkedIn conversion tracking (no real liFatId)");
      sendConversion();
    }
  }, []);

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/images/freebie-cover.png"; // This should be the actual PDF file
    link.download = "LinkedIn-Content-Hamsterrad-Playbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Success Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-800 mb-6">
                🎉 E-Mail bestätigt - Download bereit!
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Dein Playbook
                </span>
                <br />
                ist bereit!
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Lade jetzt dein kostenloses Playbook herunter und starte damit,
                dem Content-Hamsterrad zu entkommen und planbar Kunden zu
                gewinnen.
              </p>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 mb-8"
              >
                📥 Playbook jetzt herunterladen
              </button>

              {/* What's Inside */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Was erwartet dich im Playbook?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Warum 95% der SaaS-Gründer auf LinkedIn ihre Zeit
                      verschwenden
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Wie die Top 5% systematisch und planbar Kunden gewinnen
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Echte Ergebnisse messen statt &quot;Prinzip Hoffnung&quot;
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Schritt-für-Schritt Anleitung mit Templates
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Book cover with download animation */}
                <div className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[36rem] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/freebie-cover.png"
                    alt="Content-Hamsterrad Playbook Cover"
                    width={448}
                    height={576}
                    className="w-full h-full object-contain bg-white"
                  />

                  {/* Download Badge */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    <span className="text-center">
                      <div className="text-xs">READY</div>
                      <div className="text-xs">TO</div>
                      <div className="text-xs">DOWNLOAD</div>
                    </span>
                  </div>

                  {/* Floating download icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                    <span className="text-xl">📥</span>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Was sind die nächsten Schritte?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Playbook lesen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nimm dir 30 Minuten Zeit und arbeite das komplette Playbook
                durch.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Strategie umsetzen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beginne mit der Umsetzung der Top 5% Strategien in deinem
                Unternehmen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Ergebnisse messen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Verfolge deine Fortschritte und optimiere kontinuierlich.
              </p>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brauchst du Unterstützung bei der Umsetzung?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Falls du Fragen hast oder Unterstützung bei der Umsetzung der
              Strategien brauchst, melde dich gerne bei mir.
            </p>
            <a
              href="https://calendar.app.google/QErRk78CbZJiNFbq6"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              📧 Termin vereinbaren
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
