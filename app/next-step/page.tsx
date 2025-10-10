import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { sendLinkedInConversion } from "../lib/linkedin";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Nächster Schritt",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default async function NextStep() {
  const cookieStore = await cookies();
  const liFatId = cookieStore.get("li_fat_id")?.value;
  const conversionUrn = process.env.LINKEDIN_CEO_SYSTEM_DOWNLOAD;

  // Debug logging
  console.log("🔍 Next Step Debug Info:", {
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <span className="text-4xl">✓</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Fast geschafft!
            </span>
            <br />
            E-Mail bestätigen
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Vielen Dank für dein Interesse! Du erhältst in wenigen Minuten eine
            E-Mail mit dem Download-Link für dein kostenloses Playbook.
          </p>

          {/* Important Notice Box */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚠️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-amber-800 mb-2">
                  Wichtiger Hinweis:
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  <strong>
                    Du musst den Bestätigungslink in der E-Mail anklicken
                  </strong>
                  , um dein kostenloses Playbook zu erhalten. Prüfe auch deinen
                  Spam-Ordner, falls die E-Mail nicht ankommt.
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                E-Mail prüfen
              </h3>
              <p className="text-gray-600 text-sm">
                Schaue in dein E-Mail-Postfach (auch Spam-Ordner)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Link anklicken
              </h3>
              <p className="text-gray-600 text-sm">
                Bestätige deine E-Mail-Adresse durch Klick auf den Link
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Playbook downloaden
              </h3>
              <p className="text-gray-600 text-sm">
                Erhalte sofort Zugang zu deinem kostenlosen Guide
              </p>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Was erwartet dich im Playbook?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">
                  Warum 95% der SaaS-Gründer auf LinkedIn ihre Zeit verschwenden
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

          {/* Back to Home Link */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
