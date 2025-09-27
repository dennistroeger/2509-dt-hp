import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Image from "next/image";
import { cookies } from "next/headers";
import { sendLinkedInConversion } from "../lib/linkedin";

export default async function DmBoosterPage() {
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
                🚀 Der LinkedIn-Nachrichten-Booster
              </div>

              {/* Short line of text (highlighted) */}
              <div className="text-base sm:text-lg font-semibold text-red-600 mb-3 sm:mb-4">
                Kostenfreier Guide
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                Verkaufen mit Chats:{" "}
                <span className="text-red-600">
                  Das System, um hochpreisige Kunden auf LinkedIn zu gewinnen
                </span>
              </h1>

              {/* Subheadline / Supporting Copy */}
              <p className="text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Ein kostenloses Training, das dir zeigt, wie du ein Angebot
                erstellst, das sich auf LinkedIn verkauft, damit du online Geld
                verdienen kannst.
              </p>

              {/* Benefits */}
              <div className="space-y-3 text-left mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="text-gray-700">
                    Finde deine Superkraft & idealen Kunden
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="text-gray-700">
                    Pitche mit Selbstvertrauen und schließe Geschäfte ab
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="text-gray-700">
                    Erhalte eine fertige Angebotsvorlage und ein Pitch-Deck
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl max-w-md mx-auto lg:mx-0">
                <ContactForm
                  formId="dm-booster"
                  buttonText="Guide kostenlos herunterladen →"
                  listId={9}
                />

                {/* Trust Badge / Disclaimer */}
                <div className="flex items-center justify-center mt-3 sm:mt-4 space-x-2">
                  <span className="text-green-600">🔒</span>
                  <p className="text-xs text-gray-500">
                    Kein Spam. Nur relevante B2B SaaS Insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Book Cover */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative">
                {/* Clean book cover image */}
                <div className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[36rem] rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <Image
                    src="/images/der-dm-booster.png"
                    alt="LinkedIn DM Booster Guide"
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

      {/* Modules Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ein Einblick in den Inhalt...
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modul 1: Definiere Deine Superkraft
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Identifiziere deine einzigartigen Fähigkeiten und verwandle sie
                in ein wertvolles Angebot.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modul 2: Finde Deine Idealen Kunden
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lerne, wie du kaufbereite Personen auf LinkedIn identifizierst
                und ansprichst.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modul 3: Vereinfache Dein Angebot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Erstelle ein klares, hochpreisiges Angebot, das echte Probleme
                löst.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modul 4: Perfekte Pitch-Vorlagen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gebrauchsfertige Vorlagen für Angebotsdokumente in Notion und
                Pitch-Decks in Figma, um Geschäfte abzuschließen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modul 5: Beginne auf LinkedIn zu verkaufen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Füge alles zusammen und beginne, Verkäufe zu tätigen, ohne einen
                Cent für Anzeigen auszugeben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lerne, wie du auf LinkedIn verkaufst!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ein kostenloser Kurs, der dir genau zeigt, wie du ein Angebot
            erstellst, das sich verkauft, damit du anfangen kannst, online Geld
            zu verdienen.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-md mx-auto">
            <ContactForm
              formId="dm-booster-footer"
              buttonText="Kostenlosen Kurs anfordern →"
              listId={9}
            />
            <p className="text-xs text-gray-500 mt-4 text-center">
              🔒 Kein Spam. Nur relevante Tech-Insights.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
