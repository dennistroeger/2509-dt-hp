"use client";

import Link from "next/link";
import Footer from "./components/Footer";
import { ChatAnimation } from "./components/ChatAnimation";
import { VideoModal } from "./components/VideoModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-body text-slate-900 bg-[#F5F5F7] overflow-x-hidden selection:bg-[#FE5454] selection:text-white relative">
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.loom.com/share/a74b291dd1644ab6bbec47dd7f96024b"
      />
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#FE5454]/5 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-20">
        {/* 2. Hero Sektion */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm animate-fade-in backdrop-blur-sm">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5454] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE5454]"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.1em] text-slate-600 uppercase">
                  JETZT NEU: INKLUSIVE SOFTWARE-LIZENZ
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-slate-900 font-heading">
                Wir installieren deinen <br />
                <span className="text-slate-500">Neukunden Motor.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
                Nutze die Macht von semi-automatisiertem Outreach. Wir
                integrieren Strategie und die &quot;Cyrano&quot;-Software in
                dein Business. 5-10 B2B Termine pro Monat. Semi-Automatisiert.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="https://cal.com/dennis-debus/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FE5454] text-white font-semibold transition-all hover:bg-red-500 hover:scale-[1.02] shadow-xl shadow-red-500/20"
                >
                  Setup-Gespräch buchen
                </Link>
                <Link
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold transition-all hover:bg-slate-50 hover:scale-[1.02]"
                >
                  ▷ Demo ansehen
                </Link>
              </div>
            </div>

            {/* Chat Animation Visual */}
            <div className="pt-8 w-full max-w-5xl mx-auto">
              <ChatAnimation />
            </div>
          </div>
        </section>

        {/* 3. Social Proof (Ticker) */}
        <section className="py-12 border-y border-slate-200 bg-white/50 backdrop-blur-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
              <span className="font-bold text-xl tracking-tighter">
                LinkedIn
              </span>
              <span className="font-bold text-xl tracking-tighter">
                Sales Navigator
              </span>
              <span className="font-bold text-xl tracking-tighter">
                Cyrano Partner
              </span>
              <span className="font-bold text-xl tracking-tighter">OpenAI</span>
              <span className="font-bold text-xl tracking-tighter">Slack</span>
              <span className="font-bold text-xl tracking-tighter">
                HubSpot
              </span>
            </div>
          </div>
        </section>

        {/* 4. Problem Sektion */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute -left-64 top-1/2 w-96 h-96 bg-red-50 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                Problem
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-heading">
                Du hast kein Sales-Problem. <br />
                <span className="text-slate-400">
                  Dir fehlt die Infrastruktur.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Die meisten B2B-Unternehmer verbringen 80% ihrer Zeit damit,
                Profile zu suchen und Nachrichten zu tippen. Das ist keine
                Arbeit für einen CEO. Das ist Arbeit für ein System.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Manuelles Tippen",
                  text: "Du bist kein Schreibbüro. Cyrano flüstert dir immer den nächsten Schritt ins Ohr.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#FE5454]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Keine Daten",
                  text: "Ohne Strategie im Sales Navigator verbrennst du Leads, bevor du sie kontaktierst.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#FE5454]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Kein Follow-Up",
                  text: "Das Geld liegt im Follow-up. Wer manuell arbeitet, vergisst 50% der Deals.",
                  icon: (
                    <svg
                      className="w-6 h-6 text-[#FE5454]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-8 rounded-[2rem]">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Prozess Sektion */}
        <section
          id="prozess"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] to-white pointer-events-none -z-10"></div>

          <div className="max-w-6xl mx-auto">
            {/* Cyrano Origin Box */}
            <div className="mb-24 max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-slate-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE5454]/5 rounded-full blur-2xl -z-10 transition-transform duration-700 group-hover:scale-150"></div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-3xl">
                    🤥
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-heading text-slate-900">
                      Warum eigentlich{" "}
                      <span className="text-[#FE5454]">&quot;Cyrano&quot;</span>
                      ?
                    </h3>
                    <div className="prose prose-slate text-slate-600 leading-relaxed">
                      <p>
                        Inspiriert von <strong>Cyrano de Bergerac</strong>, dem
                        Dichter mit der großen Nase, der einem Freund half, die
                        richtigen Worte für seine Angebetete zu finden.
                      </p>
                      <p>
                        Genau das tun wir für dich: Wir sind der unsichtbare
                        Souffleur, der dir hilft, die perfekten Worte zu finden,
                        um deine Traumkunden zu gewinnen – charmant, eloquent
                        und unwiderstehlich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-24 space-y-6">
              <div className="text-sm font-bold tracking-[0.2em] text-[#FE5454] uppercase">
                THE HYBRID MODEL
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-heading">
                4 Phasen zur <br className="hidden sm:block" />
                Pipeline-Dominanz
              </h2>
            </div>

            <div className="space-y-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="absolute left-[2.25rem] top-10 bottom-10 w-px bg-slate-200 hidden md:block"></div>

              {[
                {
                  step: "01",
                  title: "Wunschkunden definieren",
                  duration: "Woche 1",
                  text: "Wir analysieren deine besten Kunden und erstellen ein präzises Profil. Wer kauft am schnellsten? Wer zahlt am meisten?",
                },
                {
                  step: "02",
                  title: "Quellen erschließen",
                  duration: "Woche 2",
                  text: "Wir identifizieren die exakten Datenquellen im Sales Navigator. Wo halten sich diese Entscheider auf? Wie filtern wir Streuverluste raus?",
                },
                {
                  step: "03",
                  title: "Gezielter Outreach",
                  duration: "Ab Woche 3",
                  text: "Start der 'Cyrano'-Kampagnen. Personalisierte Ansprache statt Massennachrichten. Wir generieren die ersten qualifizierten Termine.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 z-10"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="text-5xl md:text-6xl font-bold text-slate-100/20 group-hover:text-red-50/40 transition-colors duration-500 font-heading">
                      {item.step}
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center md:hidden">
                      <div className="w-3 h-3 rounded-full bg-[#FE5454]"></div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                      {item.text}
                    </p>
                  </div>

                  <div className="hidden md:flex w-16 h-16 rounded-full bg-slate-50 items-center justify-center group-hover:bg-[#FE5454] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Angebot Sektion */}
        <section
          id="stack"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-slate-900 text-white rounded-[3rem] mx-4 my-8 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FE5454]/20 blur-[120px]"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FE5454]/10 border border-[#FE5454]/20">
                  <span className="text-[11px] font-bold tracking-[0.1em] text-[#FE5454] uppercase">
                    BETA ANGEBOT
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight font-heading">
                  Kein Kurs. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5454] to-orange-400">
                    Ein Upgrade.
                  </span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Wir liefern dir nicht nur die Bauanleitung, wir liefern das
                  Werkzeug und helfen beim Bauen.
                </p>
                <ul className="space-y-5">
                  {[
                    "8 Wochen Consulting (Open Hours & 1:1)",
                    "Strategie-Bibliothek (Lifetime Access)",
                    "Slack Community (24h Support)",
                    "★ INKLUSIVE: 3 Monate Cyrano Lizenz",
                  ].map((li, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-slate-300 text-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#FE5454]/20 flex items-center justify-center text-[#FE5454] text-xs shadow-[0_0_10px_rgba(254,84,84,0.3)]">
                        ✓
                      </div>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel-dark p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <div className="text-slate-500 line-through text-xl font-medium">
                      €3.800
                    </div>
                    <div className="text-6xl font-bold font-heading tracking-tight">
                      €1.900
                    </div>
                    <div className="text-slate-500 text-sm font-medium tracking-wide uppercase">
                      netto, zzgl. MwSt
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FE5454] text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(254,84,84,0.4)]">
                      BETA-PHASE
                    </span>
                  </div>

                  <Link
                    href="https://cal.com/dennis-debus/"
                    className="flex items-center justify-center w-full py-5 rounded-2xl bg-[#FE5454] text-white font-bold text-lg hover:bg-red-500 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(254,84,84,0.3)]"
                  >
                    JETZT PLATZ SICHERN
                  </Link>

                  <div className="space-y-4 pt-8 border-t border-white/10">
                    <div className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-green-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-slate-400">
                        <strong className="text-slate-200">Bedingung:</strong>{" "}
                        Der Preis gilt nur gegen ein Video-Testimonial nach
                        Erfolg.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-green-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-slate-400">
                        <strong className="text-slate-200">Garantie:</strong>{" "}
                        Wir arbeiten kostenlos weiter, bis die Pipeline steht.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section
          id="faq"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-slate-50"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-16 text-center font-heading">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Wie viel Zeit brauche ich?",
                  a: "Rechne mit ca. 2-3 Stunden pro Woche für das Setup in den ersten 2 Wochen. Sobald das System läuft, reduziert sich dein Aufwand auf ca. 30 Minuten pro Tag für das Bestätigen der Nachrichten.",
                },
                {
                  q: "Ist das Kaltakquise?",
                  a: "Ja und Nein. Wir sprechen Leute an, die uns noch nicht kennen. Aber wir nutzen keine plumpen Copy-Paste Texte. Durch die Software personalisieren wir intelligent, sodass es sich wie ein echtes Netzwerk-Gespräch anfühlt.",
                },
                {
                  q: "Wie schnell sehe ich Ergebnisse?",
                  a: 'Das ist keine "Get Rich Quick" Nummer. Wir bauen ein System. Die ersten validen Termine kommen meist in Woche 3 oder 4, sobald die Kampagnen angelaufen sind.',
                },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading text-[#FE5454]">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-heading">
              Bereit für deinen <br />
              <span className="text-[#FE5454]">Neukunden Motor?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Lass uns in 15 Minuten prüfen, ob das System bei dir funktioniert.
              Kein Pitch. Nur Strategie.
            </p>
            <div className="pt-8">
              <Link
                href="https://cal.com/dennis-debus/"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg transition-all hover:bg-[#FE5454] hover:scale-[1.02] shadow-2xl hover:shadow-red-500/20"
              >
                Potenzial-Check buchen
              </Link>
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/50 to-red-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
