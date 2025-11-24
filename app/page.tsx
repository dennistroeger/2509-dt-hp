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
    <div className="min-h-screen font-sans text-slate-900 bg-[#f8fafc] overflow-x-hidden selection:bg-[#FE5454] selection:text-white">
      {/* Background Elements - Bright / Aurora Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-[#FE5454]/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Glass Container */}
        <div className="w-full max-w-5xl mx-auto p-1 rounded-[3rem] bg-gradient-to-br from-white/80 to-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-3xl border border-white/60">
          <div className="bg-white/40 rounded-[2.8rem] p-8 sm:p-16 flex flex-col items-center text-center backdrop-blur-sm relative overflow-hidden group border border-white/50">
            {/* Inner Sheen effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            {/* Headline Badge */}
            <div className="relative inline-flex items-center px-4 py-1.5 rounded-full border border-[#FE5454]/20 bg-[#FE5454]/5 backdrop-blur-md mb-8 shadow-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-[#FE5454] uppercase">
                Für KI-Experten & Consultants
              </span>
            </div>

            {/* Headline */}
            <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12 text-slate-900">
              So wird aus einem <br className="hidden sm:block" />
              <span className="inline-block relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FE5454] to-purple-600 px-2">
                  ‚Hey 👋‘
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FE5454]/10 -rotate-1 z-0 rounded-full transform scale-105"></span>
              </span>{" "}
              Umsatz
            </h1>

            {/* Description */}
            <p className="relative text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed">
              Verschwende keine Zeit mehr mit Kaltakquise, die nichts bringt.
              Nutze ein bewährtes System, das deinen Kalender mit qualifizierten
              KI-Gründern füllt, die wirklich kaufen wollen – durch echten
              Beziehungsaufbau, kein Spam.
            </p>

            {/* Video Container with Bright Glassmorphism */}
            <div className="relative w-full max-w-3xl mb-12 group/video">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FE5454]/30 to-purple-600/30 rounded-[2rem] blur-xl opacity-40 group-hover/video:opacity-60 transition duration-1000 group-hover/video:duration-200"></div>
              <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/60 bg-white/50 backdrop-blur-md">
                <iframe
                  src="https://player.mux.com/A3boCcTmLKzqTw3QE3LVg5wKl9Ri1KYrae7021qo005pM?metadata-video-title=Leads_With_AI&video-title=Leads_With_AI&accent-color=%23fe5454"
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
            <div className="flex flex-col items-center gap-6 w-full relative z-20">
              <Link
                href="/workshop"
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 font-bold text-white transition-all duration-300 ease-out border border-[#FE5454] rounded-full overflow-hidden bg-[#FE5454] hover:bg-[#ff6b6b] hover:scale-105 shadow-[0_10px_40px_-10px_rgba(254,84,84,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(254,84,84,0.6)]"
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-xs font-medium text-white/90 uppercase tracking-widest mb-1">
                    Für AI & Automation Consultants
                  </span>
                  <span className="text-lg sm:text-xl tracking-wide">
                    JETZT BEWERBEN
                  </span>
                </div>
              </Link>

              {/* Scarcity */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-white/40 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Nur 3 Plätze pro Woche verfügbar!
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
