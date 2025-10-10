import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Hosting und Datenspeicherung
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Diese Website wird auf der Plattform <strong>Vercel</strong>{" "}
                  gehostet. Vercel ist ein Anbieter von Hosting-Dienstleistungen
                  mit Sitz in den USA. Beim Besuch unserer Website werden
                  automatisch bestimmte Daten an Vercel übertragen,
                  einschließlich Ihrer IP-Adresse, Browsertyp, Betriebssystem
                  und Zugriffszeiten.
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei Vercel finden Sie in
                  der Vercel Datenschutzerklärung:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                E-Mail-Datenverarbeitung
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Für die Verarbeitung von E-Mail-Newslettern und
                  E-Mail-Marketing nutzen wir den Dienst <strong>Brevo</strong>{" "}
                  (ehemals Sendinblue). Wenn Sie sich für unseren Newsletter
                  anmelden oder uns eine E-Mail senden, werden Ihre
                  E-Mail-Adresse und damit verbundene Daten auf den Servern von
                  Brevo gespeichert.
                </p>
                <p>
                  Brevo ist ein französischer Anbieter mit hohen
                  Datenschutzstandards und DSGVO-Konformität. Ihre Daten werden
                  sicher und verschlüsselt übertragen und gespeichert.
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei Brevo finden Sie
                  hier:{" "}
                  <a
                    href="https://www.brevo.com/de/legal/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://www.brevo.com/de/legal/privacypolicy/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Nutzungsanalyse mit Microsoft Clarity
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Wir arbeiten mit Microsoft Clarity und Microsoft Advertising
                  zusammen, um zu erfassen, wie Sie unsere Website nutzen und
                  mit ihr interagieren. Dies geschieht durch Verhaltensmetriken,
                  Heatmaps und Sitzungswiederholungen, um unsere
                  Produkte/Dienstleistungen zu verbessern und zu vermarkten.
                  Websitenutzungsdaten werden mithilfe von Erst- und
                  Drittanbieter-Cookies und anderen Tracking-Technologien
                  erfasst, um die Beliebtheit von Produkten/Dienstleistungen und
                  Online-Aktivitäten zu ermitteln. Zusätzlich verwenden wir
                  diese Informationen zur Website-Optimierung, für
                  Betrugs-/Sicherheitszwecke und für Werbung. Weitere
                  Informationen darüber, wie Microsoft Ihre Daten sammelt und
                  verwendet, finden Sie in der{" "}
                  <a
                    href="https://privacy.microsoft.com/de-de/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Microsoft-Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Abmeldung vom Newsletter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sie können sich <strong>jederzeit</strong> vom Newsletter
                  abmelden, ohne dass Ihnen dadurch Nachteile entstehen. Die
                  Abmeldung ist kostenlos und kann auf verschiedene Weise
                  erfolgen:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Klicken Sie auf den &quot;Abmelden&quot;-Link am Ende jeder
                    Newsletter-E-Mail
                  </li>
                  <li>
                    Senden Sie eine E-Mail an{" "}
                    <a
                      href="mailto:info@histack.io"
                      className="text-red-600 hover:text-red-700 underline"
                    >
                      info@histack.io
                    </a>{" "}
                    mit dem Betreff &quot;Newsletter abmelden&quot;
                  </li>
                  <li>
                    Kontaktieren Sie uns über das Kontaktformular auf unserer
                    Website
                  </li>
                </ul>
                <p>
                  Nach Ihrer Abmeldung werden Ihre E-Mail-Daten aus unserem
                  Newsletter-System gelöscht, sofern keine anderen rechtlichen
                  Gründe für eine Speicherung bestehen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Ihre Rechte
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                  Außerdem haben Sie das Recht auf Datenübertragbarkeit und
                  Widerspruch gegen die Verarbeitung.
                </p>
                <p>
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte
                  kontaktieren Sie uns unter:{" "}
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
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Änderungen der Datenschutzerklärung
              </h2>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
                  aktualisieren. Die aktuelle Version finden Sie stets auf
                  dieser Seite. Wesentliche Änderungen werden wir Ihnen
                  rechtzeitig mitteilen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Kontakt
              </h2>
              <div className="text-gray-600">
                <p>
                  <strong>Histack</strong>
                </p>
                <p>CEO: Konstantin Ristl</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@histack.io"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@histack.io
                  </a>
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
