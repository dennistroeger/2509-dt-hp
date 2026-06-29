import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper py-24 section-pad">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
          <div className="max-w-md space-y-8">
            <div className="flex items-stretch gap-4">
              <div className="hatched-bar" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-ink font-heading tracking-tight">
                  THE INBOX PLAYBOOK
                </h3>
                <p className="text-slate text-base leading-relaxed">
                  Das 12-Wochen Mentoring-Programm für planbare LinkedIn-Akquise.
                  Strategie trifft Software.
                </p>
              </div>
            </div>
            <Link
              href="https://cal.com/dennis-debus/lets-talk"
              className="btn-primary"
            >
              Potenzial-Check buchen
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div>
              <h4 className="section-label mb-6">Programm</h4>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#prozess"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  Der Prozess
                </Link>
                <Link
                  href="#stack"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  Angebot
                </Link>
                <Link
                  href="#faq"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  Häufige Fragen
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="section-label mb-6">Rechtliches</h4>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/imprint"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  Datenschutz
                </Link>
                <Link
                  href="/agb"
                  className="text-slate hover:text-accent transition-colors text-sm"
                >
                  AGB
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-rule pt-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="meta-line">© 2026 Dennis Debus</p>
          <p className="meta-line max-w-lg leading-relaxed">
            Nicht Teil von LinkedIn oder Microsoft. LINKEDIN ist eine Marke von
            LINKEDIN.
          </p>
        </div>
      </div>
    </footer>
  );
}
