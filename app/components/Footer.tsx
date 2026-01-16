import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE5454]/5 blur-[100px] -z-10"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">
                THE INBOX PLAYBOOK
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Das 12-Wochen Mentoring-Programm für planbare LinkedIn-Akquise. Strategie trifft Software.
              </p>
            </div>
            <Link
              href="https://cal.com/dennis-debus/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold transition-all hover:bg-[#FE5454] hover:scale-105 shadow-xl"
            >
              Potenzial-Check buchen ➔
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Programm
              </h4>
              <nav className="flex flex-col space-y-4">
                <Link href="#prozess" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">Der Prozess</Link>
                <Link href="#stack" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">Angebot</Link>
                <Link href="#faq" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">Häufige Fragen</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Rechtliches
              </h4>
              <nav className="flex flex-col space-y-4">
                <Link href="/imprint" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">Impressum</Link>
                <Link href="/datenschutz" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">Datenschutz</Link>
                <Link href="/agb" className="text-slate-600 hover:text-[#FE5454] transition-colors text-sm font-medium">AGB</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-slate-400 font-medium">
          <p>© 2026 Dennis Debus. Alle Rechte vorbehalten.</p>
          <div className="text-center md:text-right max-w-lg space-y-2 opacity-60 leading-relaxed">
            <p>
              Diese Website ist kein Teil von LinkedIn oder Microsoft INC.
              LINKEDIN ist eine Marke von LINKEDIN.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
