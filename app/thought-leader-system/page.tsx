import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Image from "next/image";
import { cookies } from "next/headers";
import { sendLinkedInConversion } from "../lib/linkedin";
import { WistiaPlayer } from "../components/WistiaPlayer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Das Thought Leader System für LinkedIn",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default async function Home() {
  const cookieStore = await cookies();
  const liFatId = cookieStore.get("li_fat_id")?.value;
  const conversionUrn = process.env.LINKEDIN_WEBSITE_VISIT_CONVERSION_URN;

  // Debug logging
  console.log("🔍 Debug Info:", {
    liFatId: liFatId ? "present" : "missing",
    conversionUrn: conversionUrn ? "present" : "missing",
    nodeEnv: process.env.NODE_ENV,
  });

  if (conversionUrn) {
    if (liFatId) {
      // Send conversion with real LinkedIn tracking ID
      sendLinkedInConversion(liFatId, conversionUrn);
    } else if (process.env.NODE_ENV === "development") {
      // Send test conversion in development mode
      console.log("🧪 Testing LinkedIn conversion tracking (no real liFatId)");
      sendLinkedInConversion("", conversionUrn, true);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Two-Column Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text + Form */}
            <div className="text-center lg:text-left">
              {/* Top Small Text / Banner */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-xs sm:text-sm font-medium text-red-800 mb-3 sm:mb-4">
                📚 Kostenloser Download für Berater, Coaches & Solopreneurs
              </div>

              {/* Short line of text (highlighted) */}
              <div className="text-base sm:text-lg font-semibold text-red-600 mb-3 sm:mb-4">
                Kostenfreier Leitfaden
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                5–10+ hochwertige Kundenanfragen pro Monat{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  als Thought Leader{" "}
                </span>
                auf LinkedIn
              </h1>

              {/* Subheadline / Supporting Copy */}
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                In diesem kostenlosen Leitfaden zeige ich dir, wie du als
                Experte Sichtbarkeit aufbaust, Vertrauen gewinnst und planbar
                Kundenanfragen generierst - ohne Akquise.
              </p>

              {/* Form */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl max-w-md mx-auto lg:mx-0">
                <ContactForm
                  formId="hero"
                  buttonText="Leitfaden kostenlos herunterladen →"
                />

                {/* Trust Badge / Disclaimer */}
                <div className="flex items-center justify-center mt-3 sm:mt-4 space-x-2">
                  <span className="text-green-600">🔒</span>
                  <p className="text-xs text-gray-500">
                    Kein Spam. Nur relevante Insights für dein Business.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Clean book cover image */}
                <div className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[36rem] rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <Image
                    src="/images/thought-leader-system-cover.png"
                    alt="Thought Leader System Playbook Cover"
                    width={448}
                    height={576}
                    className="w-full h-full object-contain bg-white"
                  />

                  {/* FREE Badge */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    FREE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Schluss mit der Kaltakquise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie du als Thought Leader eine starke Personenmarke aufbaust und
              planbar Kundenanfragen gewinnst - echte Ergebnisse statt
              &ldquo;Prinzip Hoffnung&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sichtbarkeit als Experte
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Warum 95% der Berater auf LinkedIn ihre Zeit verschwenden und
                wie du als Thought Leader sichtbar wirst.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Planbare Kundenanfragen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wie die Top 5% systematisch und vorhersagbar Kundenanfragen
                generieren - ohne tägliche Content-Erstellung.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Echte Ergebnisse messen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Klare KPIs und ROI-Messung statt &ldquo;Prinzip Hoffnung&rdquo;.
                Bewährte Systeme für vorhersagbare Ergebnisse.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Systematischer Ansatz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bewährte Systeme statt &ldquo;Prinzip Hoffnung&rdquo;. Wie du
                LinkedIn strategisch nutzt ohne tägliche Content-Erstellung.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Top 5% Strategien
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Die exakten Methoden der erfolgreichsten Experten. Wie sie
                planbar Kundenanfragen gewinnen ohne Content-Hamsterrad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sofort umsetzbar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Schritt-für-Schritt Anleitung mit Templates. In 2 Wochen läuft
                dein planbares Kundenanfrage-System.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freebie Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Book Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="relative w-80 h-96 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  {/* Modern 2025 book cover with glassmorphism effect */}
                  <div className="absolute inset-0 bg-white rounded-2xl border-2 border-gray-100 shadow-2xl overflow-hidden">
                    <Image
                      src="/images/thought-leader-system-cover.png"
                      alt="Thought Leader System Playbook Cover"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Modern floating elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    FREE
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl -z-10"></div>
                </div>

                {/* Floating particles for modern effect */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-sm font-medium text-red-800 mb-6">
                📚 Kostenloser Download
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Wie die Top 5% auf LinkedIn planbar Kundenanfragen gewinnen
                </span>
                <br />
              </h2>

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Warum 95% der Berater auf LinkedIn ihre Zeit verschwenden
                <span className="text-red-600"> (und wie die Top 5%</span>{" "}
                <span className="text-orange-600">planbar Kunden</span>{" "}
                gewinnen)
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In diesem kostenlosen Leitfaden zeige ich dir, wie du als
                Experte Sichtbarkeit aufbaust, Vertrauen gewinnst und planbar
                Kundenanfragen generierst - ohne Akquise.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Warum 95% der Berater auf LinkedIn ihre Zeit verschwenden
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Wie die Top 5% systematisch und planbar Kundenanfragen
                    gewinnen
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Echte Ergebnisse messen statt &ldquo;Prinzip Hoffnung&rdquo;
                  </span>
                </div>
              </div>

              {/* Download Form */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <ContactForm
                  formId="freebie"
                  showCompany={false}
                  buttonText="Kostenlosen Guide herunterladen →"
                />
                <p className="text-xs text-gray-500 mt-4 text-center">
                  🔒 Kein Spam. Nur relevante Business-Insights.
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
