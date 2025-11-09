import { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Vielen Dank!",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function DankePage() {
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
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              ✓
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
            Vielen Dank! 🎉
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-black mb-8 leading-relaxed">
            Dein LinkedIn DM Booster Guide ist auf dem Weg zu dir!
          </p>

          {/* Description */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl mb-8">
            <p className="text-lg text-black mb-6">
              Du erhältst in den nächsten Minuten eine E-Mail mit dem
              Download-Link für deinen kostenlosen Guide &quot;Der Chat-Verkauf:
              Hochpreis-Kunden gewinnen mit Direktnachrichten&quot;.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-blue-800 font-medium">
                💡 Tipp: Schaue auch in deinem Spam-Ordner nach, falls die
                E-Mail nicht ankommt.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                href="https://www.notion.so/histack/Der-Chat-Verkauf-Hochpreis-Kunden-gewinnen-mit-Direktnachrichten-27c1f97cb6ae808ea969e09d4115aa8a?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Jetzt zum Guide →
              </a>

              <p className="text-sm text-black">
                Klicke auf den Button, um direkt zum Notion-Guide zu gelangen
              </p>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Was passiert als nächstes?
            </h2>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">1.</span>
                <p className="text-black">
                  Du erhältst eine E-Mail mit dem Download-Link für den Guide
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">2.</span>
                <p className="text-black">
                  Lade den Guide herunter und arbeite die 5 Module durch
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">3.</span>
                <p className="text-black">
                  Beginne sofort, dein Angebot zu erstellen und auf LinkedIn zu
                  verkaufen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Weitere hilfreiche Ressourcen
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">
                CEO System
              </h3>
              <p className="text-black mb-4">
                Lerne, wie du als CEO systematisch Kunden gewinnst
              </p>
              <a
                href="/ceo-system"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Mehr erfahren →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">
                Thought Leader System
              </h3>
              <p className="text-black mb-4">
                Werde zum Experten in deiner Branche
              </p>
              <a
                href="/thought-leader-system"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                Mehr erfahren →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
