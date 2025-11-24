import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Kontakt</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Systematische Meetings statt &quot;Content-Hamsterrad&quot;
              <br />
              Systematische Kundengewinnung
              <br />
              Top 5% Strategien
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Rechtliches
            </h3>
            <div className="text-slate-600 text-sm space-y-2 flex flex-col">
              <Link
                href="/datenschutz"
                className="hover:text-[#FE5454] transition-colors underline decoration-slate-300 underline-offset-4"
              >
                Datenschutz
              </Link>

              <Link
                href="/imprint"
                className="hover:text-[#FE5454] transition-colors underline decoration-slate-300 underline-offset-4"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-8">
            <p className="text-sm text-slate-400 text-center md:text-left font-mono uppercase tracking-wider">
              COPYRIGHT 2024® ALLE RECHTE VORBEHALTEN | dennisdebus.com
            </p>
            <div className="text-xs text-slate-500 text-center md:text-right max-w-md space-y-3">
              <p>
                Wir nutzen Microsoft Clarity, um zu verstehen, wie du unsere
                Website nutzt und um unsere Produkte und Werbung zu verbessern.
                Durch die Nutzung stimmst du der Datenerhebung durch uns und
                Microsoft zu. Für Details siehe unsere{" "}
                <Link
                  href="/datenschutz"
                  className="underline hover:text-[#FE5454] transition-colors"
                >
                  Datenschutzbestimmungen
                </Link>
                .
              </p>
              <p>
                Ich verpflichte mich, deine Privatsphäre zu schützen. Ich nutze
                die Informationen, die du bereitstellst, um dich über relevante
                Inhalte, Produkte und Dienstleistungen zu informieren. Du kannst
                dich jederzeit abmelden.
              </p>
              <p>
                Diese Website ist kein Teil von LinkedIn oder Microsoft INC.
                Außerdem wird diese Website NICHT von LinkedIn in irgendeiner
                Weise unterstützt. LINKEDIN ist eine Marke von LINKEDIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
