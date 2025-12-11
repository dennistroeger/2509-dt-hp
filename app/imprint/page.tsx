import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Histack.io",
};

export default function Imprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Impressum
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2 text-black">
                <p>
                  <strong>Unternehmen:</strong> Histack
                </p>
                <p>
                  <strong>Vertreten durch:</strong> Konstantin Ristl
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Anschrift
              </h2>
              <div className="text-black">
                <p>1111B S Governors Ave STE 21755</p>
                <p>Dover, DE 19904</p>
                <p>United States</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Kontakt</h2>
              <div className="text-black">
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@histack.io"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@histack.io
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>
              <div className="text-black leading-relaxed space-y-4">
                <p>
                  <strong>Haftung für Inhalte</strong>
                  <br />
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
                <p>
                  <strong>Haftung für Links</strong>
                  <br />
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Urheberrecht
              </h2>
              <div className="text-black">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
                <p className="mt-4">
                  COPYRIGHT 2025® ALL RIGHTS RESERVED | Histack.io
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
