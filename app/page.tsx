import Link from "next/link";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Intent Meeting System™",

  keywords:
    "Hackathon Acquisition System, LinkedIn, Acquisition, Sales, Marketing, Consulting, AI, Automation",
  authors: [{ name: "Histack.io" }],
  creator: "Histack.io",
  publisher: "Histack.io",
  robots: {
    index: true,
    follow: true,
  },
  description: "Land Your Next High-Ticket Consulting Deal in 45 Days*",
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-[#F5F5F7] overflow-x-hidden selection:bg-[#0071e3] selection:text-white">
      {/* Background Elements - Subtle / Liquid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-100/40 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-purple-100/40 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Glass Container - Apple Style */}
        <div className="glass-apple w-full max-w-5xl mx-auto rounded-[2.5rem] p-1 transition-all duration-500 hover:shadow-[0_20px_80px_0_rgba(0,0,0,0.1)]">
          <div className="bg-white/30 rounded-[2.4rem] p-8 sm:p-16 flex flex-col items-center text-center relative overflow-hidden group">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40 pointer-events-none opacity-50"></div>

            {/* Headline Badge */}
            <div className="relative inline-flex items-center px-5 py-2 rounded-full bg-white/60 border border-white/60 backdrop-blur-xl mb-10 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase">
                Für KI-Experten & Consultants
              </span>
            </div>

            {/* Headline */}
            <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-12 text-[#1d1d1f] drop-shadow-sm">
              So wird aus einem <br className="hidden sm:block" />
              <span className="inline-block relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#0071e3] to-[#9b5de5] px-2">
                  ‚Hey 👋‘
                </span>
              </span>{" "}
              Umsatz
            </h1>

            {/* Description */}
            <p className="relative text-xl sm:text-2xl text-[#1d1d1f] font-medium max-w-2xl mb-12 leading-relaxed tracking-wide">
              Bisher sind Termine mit Neukunden für dich mit hohem Aufwand
              verbunden und unvorhersehbar? Direktnachrichten auf LinkedIn sind
              oft der schnellste und einfachste Weg, um planbar Termine zu
              buchen. Wie das funktioniert, verrate ich dir in diesem Video.
            </p>

            {/* Video Container - Apple Card Style */}
            <div className="relative w-full max-w-3xl mb-16 group/video transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover/video:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border border-white/40 bg-white/40 backdrop-blur-2xl">
                <iframe
                  src="https://player.mux.com/A3boCcTmLKzqTw3QE3LVg5wKl9Ri1KYrae7021qo005pM?metadata-video-title=Leads_With_AI&video-title=Leads_With_AI&accent-color=%230071e3"
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                  }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center gap-8 w-full relative z-20">
              <Link
                href="/workshop"
                className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full overflow-hidden bg-[#0071e3] hover:bg-[#0077ED] transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,113,227,0.39)] hover:shadow-[0_6px_20px_rgba(0,113,227,0.23)] hover:scale-[1.02]"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-widest mb-1">
                    Für AI & Automation Consultants
                  </span>
                  <span className="text-lg font-medium text-white tracking-wide">
                    Jetzt bewerben
                  </span>
                </div>
              </Link>

              {/* Scarcity */}
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/50 border border-white/40 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34c759]"></span>
                </span>
                <span className="text-sm font-medium text-[#1d1d1f]/70">
                  Nur 3 Plätze pro Woche verfügbar
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-200/60 bg-white/40 backdrop-blur-xl">
        <Footer />
      </div>
    </div>
  );
}
