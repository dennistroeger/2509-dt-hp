import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzinformationen für Histack.io",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Allgemeine Hinweise
              </h2>
              <div className="text-black leading-relaxed">
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Hosting und Datenspeicherung
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Diese Website wird bei <strong>Vercel</strong> gehostet.
                  Vercel ist ein Hosting-Dienstleister mit Sitz in den USA. Wenn
                  Sie unsere Website besuchen, werden automatisch bestimmte
                  Daten an Vercel übermittelt, darunter Ihre IP-Adresse,
                  Browsertyp, Betriebssystem und Zugriffszeiten.
                </p>
                <p>
                  Weitere Informationen zum Datenschutz bei Vercel finden Sie in
                  der Datenschutzerklärung von Vercel:{" "}
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
              <h2 className="text-xl font-semibold text-black mb-4">
                Kommunikation und Dokumente (Google Workspace)
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Wir nutzen <strong>Google Workspace</strong> (ehemals G Suite)
                  von Google Ireland Limited, Gordon House, Barrow Street,
                  Dublin 4, Irland, für unsere E-Mail-Kommunikation,
                  Kalenderverwaltung und Dokumentenspeicherung.
                </p>
                <p>
                  Wenn Sie uns per E-Mail kontaktieren, werden Ihre
                  E-Mail-Adresse und die in der E-Mail enthaltenen Informationen
                  auf den Servern von Google gespeichert. Google verarbeitet
                  Daten auch in den USA. Wir haben mit Google entsprechende
                  Verträge zur Auftragsverarbeitung abgeschlossen, die die
                  Einhaltung europäischer Datenschutzstandards sicherstellen
                  (Standardvertragsklauseln).
                </p>
                <p>
                  Weitere Informationen finden Sie in der Datenschutzerklärung
                  von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                E-Mail-Marketing und Newsletter
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Für den Versand von Newslettern und E-Mail-Marketing nutzen
                  wir den Dienst <strong>Brevo</strong> (ehemals Sendinblue).
                  Wenn Sie sich für unseren Newsletter anmelden oder uns eine
                  E-Mail senden, werden Ihre E-Mail-Adresse und zugehörige Daten
                  auf den Servern von Brevo gespeichert.
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
              <h2 className="text-xl font-semibold text-black mb-4">
                Analyse mit Microsoft Clarity
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Wir arbeiten mit Microsoft Clarity und Microsoft Advertising
                  zusammen, um zu erfassen, wie Sie unsere Website nutzen und
                  mit ihr interagieren. Dies geschieht durch Verhaltensmetriken,
                  Heatmaps und Sitzungswiederholungen, um unsere
                  Produkte/Dienstleistungen zu verbessern und zu vermarkten.
                  Nutzungsdaten der Website werden unter Verwendung von Cookies
                  von Erst- und Drittanbietern sowie anderen
                  Tracking-Technologien erfasst, um die Beliebtheit von
                  Produkten/Dienstleistungen und Online-Aktivitäten zu
                  bestimmen. Zusätzlich verwenden wir diese Informationen zur
                  Website-Optimierung, für Betrugs-/Sicherheitszwecke und
                  Werbung. Weitere Informationen darüber, wie Microsoft Ihre
                  Daten erhebt und verwendet, finden Sie in der{" "}
                  <a
                    href="https://privacy.microsoft.com/de-de/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Datenschutzerklärung von Microsoft
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Newsletter abbestellen
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Sie können den Newsletter jederzeit{" "}
                  <strong>abbestellen</strong>, ohne dass Ihnen hierfür
                  Nachteile entstehen. Die Abmeldung ist kostenlos und auf
                  mehreren Wegen möglich:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Klick auf den &quot;Abmelden&quot;-Link am Ende jeder
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
                    mit dem Betreff &quot;Newsletter abbestellen&quot;
                  </li>
                  <li>
                    Kontaktieren Sie uns über das Kontaktformular auf unserer
                    Website
                  </li>
                </ul>
                <p>
                  Nach der Abmeldung werden Ihre E-Mail-Daten aus unserem
                  Newsletter-System gelöscht, sofern keine anderen rechtlichen
                  Gründe für die Speicherung vorliegen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Ihre Rechte
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                  Zudem haben Sie das Recht auf Datenübertragbarkeit sowie ein
                  Widerspruchsrecht gegen die Verarbeitung.
                </p>
                <p>
                  Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte
                  wahrnehmen möchten, kontaktieren Sie uns bitte unter:{" "}
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
                Änderungen der Datenschutzerklärung
              </h2>
              <div className="text-black leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
                  aktualisieren. Die aktuelle Version finden Sie immer auf
                  dieser Seite. Über wesentliche Änderungen werden wir Sie
                  rechtzeitig informieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Kontakt</h2>
              <div className="text-black">
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
