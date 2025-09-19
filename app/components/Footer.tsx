import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Content-Hamsterrad Exit
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Spezialisiert auf B2B-SaaS, IT- & Tech-Unternehmer mit $1M+
              Revenue. Wie die Top 5% planbar Kunden gewinnen statt
              &quot;Prinzip Hoffnung&quot;.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Kontakt</h3>
            <p className="text-gray-300 text-sm">
              Planbare Meetings statt &quot;Content-Hamsterrad&quot;
              <br />
              Planbare Kundenakquise
              <br />
              Top 5% Strategien
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Rechtliches</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <Link href="/datenschutz" className="hover:text-white underline">
                Datenschutz
              </Link>

              <p>
                <Link href="/imprint" className="hover:text-white underline">
                  Impressum
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 text-center md:text-left">
              COPYRIGHT 2024® ALL RIGHTS RESERVED | dennisdebus.com
            </p>
            <div className="text-xs text-gray-400 text-center md:text-right max-w-md">
              <p className="mb-2">
                Ich bin verpflichtet, deine Privatsphäre zu schützen. Ich
                verwende die Informationen, die du mir gibst, um dich über meine
                relevanten Inhalte, Produkte und Dienstleistungen zu
                kontaktieren. Du kannst dich jederzeit von diesen
                Kommunikationen abmelden.
              </p>
              <p>
                Diese Website ist kein Teil von LinkedIn, Microsoft INC.
                Zusätzlich wird diese Website NICHT von LinkedIn in irgendeiner
                Weise unterstützt. LINKEDIN ist eine Marke von LINKEDIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
