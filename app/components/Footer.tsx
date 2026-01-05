import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <h3 className="text-xl font-bold mb-4 text-slate-900 font-heading">
              Ready to install?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              15 Min Potenzial-Check. Kein Sales-Blabla. Nur System-Check.
            </p>
            <Link
              href="https://cal.com/dennis-debus/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium transition-all hover:bg-[#FE5454] hover:scale-[1.02]"
            >
              Termin buchen ➔
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
                Navigation
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#prozess"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  Prozess
                </Link>
                <Link
                  href="#stack"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  Stack
                </Link>
                <Link
                  href="#faq"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  FAQ
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
                Rechtliches
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/imprint"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  Datenschutz
                </Link>
                <Link
                  href="/agb"
                  className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm"
                >
                  AGB
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 All Systems Go. | Impressum | Datenschutz | AGB</p>
          <div className="text-center md:text-right max-w-md space-y-2">
            <p>
              Diese Website ist kein Teil von LinkedIn oder Microsoft INC.
              Außerdem wird diese Website NICHT von LinkedIn in irgendeiner
              Weise unterstützt. LINKEDIN ist eine Marke von LINKEDIN.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
