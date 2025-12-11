import Link from "next/link";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium-Kunden per DM gewinnen | Für KI-Experten, Berater & Agenturen | Gründer The Inbox Playbook",

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
    <div className="min-h-screen font-body text-slate-900 bg-[#F5F5F7] overflow-x-hidden selection:bg-[#fe5454] selection:text-white relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-red-200/30 rounded-full blur-[120px] animate-blob mix-blend-multiply opacity-50"></div>
        <div className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-orange-200/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] bg-pink-200/30 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply opacity-50"></div>
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8 animate-float-slow">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 border border-white/40 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe5454] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe5454]"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-slate-600 uppercase font-heading">
                Für Berater & Agenturen
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] text-[#1d1d1f] font-heading">
              Generiere <br />
              <span className="text-gradient">5+ qualifizierte</span>
              <br />
              Termine pro Woche
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-xl leading-relaxed">
              Ein komplettes Wachstumssystem, das dich auf LinkedIn skaliert -
              keine Werbung, kein Anbetteln kalter Leads, und jede Menge KI, um
              Zeit zu sparen und Burnout zu vermeiden.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
              <Link
                href="/workshop"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden bg-[#fe5454] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative font-medium tracking-wide">
                  Lass&apos; uns sprechen
                </span>
                <svg
                  className="w-4 h-4 ml-2 relative group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/40 border border-white/40 backdrop-blur-sm">
                <span className="text-sm font-medium text-slate-600">
                  Nur 3 Plätze / Woche
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual / Video */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 w-full">
            {/* Decorative background for the video */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#fe5454]/10 to-orange-500/10 rounded-[2.5rem] blur-2xl -z-10"></div>

            <div className="glass-panel rounded-[2rem] p-2 shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] hover:-rotate-1">
              <div
                className="relative rounded-[1.5rem] overflow-hidden bg-black/5 shadow-inner"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://www.loom.com/embed/ad20713ad514492e8f4ff67c7736a73f?hideEmbedTopBar=true"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 border-t border-slate-200/60 bg-white/40 backdrop-blur-xl">
        <Footer />
      </div>
    </div>
  );
}
