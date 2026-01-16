import Link from "next/link";
import Footer from "./components/Footer";
import { Metadata } from "next";
import { ChatAnimation } from "./components/ChatAnimation";

export const metadata: Metadata = {
  title: "The Inbox Playbook | 5-10 qualifizierte B2B-Termine pro Monat",
  description:
    "Wir bauen dein LinkedIn-System auf, bis der Kundenfluss steht. Hybride Strategie aus KI-gestützter Software und High-Level Consulting. 100% Ergebnis-Garantie.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-body text-slate-900 bg-white overflow-x-hidden selection:bg-[#FE5454] selection:text-white relative">
      {/* Background Ambiente */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#FE5454]/5 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-50/30 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      {/* Floating CTA (Desktop only) */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block animate-fade-in">
        <Link
          href="https://cal.com/dennis-debus/"
          className="group relative flex items-center gap-3 px-6 py-4 rounded-full bg-slate-900 text-white font-bold shadow-2xl transition-all hover:scale-105 hover:bg-[#FE5454]"
        >
          <span className="text-sm">STRATEGIE-GESPRÄCH VEREINBAREN</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
        </Link>
      </div>

      <main className="relative z-10">
        {/* 1. Hero Sektion */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 flex flex-col items-center text-center">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm animate-fade-in">
                <span className="flex h-2 w-2 relative mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5454] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE5454]"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-slate-600 uppercase">
                  Exklusiv für Agenturen & Berater
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-[92px] font-extrabold tracking-tight leading-[1.05] text-slate-900 font-heading">
                Souveräne LinkedIn-Akquise. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                  Planbare Termine statt Zufall.
                </span>
              </h1>

              {/* Subheadline Update */}
              <p className="text-xl sm:text-2xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
                Das 12-Wochen Mentoring-Programm inkl. KI-Wingman
                &quot;Cyrano&quot;. Wir liefern die Strategie, du führst die
                Gespräche. Nie wieder sprachlos im Chat.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <div className="space-y-3">
                  <Link
                    href="https://cal.com/dennis-debus/"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#FE5454] text-white font-bold text-lg transition-all hover:bg-red-500 hover:scale-[1.02] shadow-[0_20px_50px_rgba(254,84,84,0.3)]"
                  >
                    POTENZIAL-ANALYSE BUCHEN
                  </Link>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">
                    Kein Verkaufs-Pitch. In 15 Min zum individuellen Fahrplan.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Component */}
            <div className="w-full max-w-5xl mx-auto pt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FE5454]/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <ChatAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Tech Stack Bar */}
        <section className="py-16 bg-[#F5F5F7] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
              Nahtlose Integration in deinen Workflow
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#0077B5] rounded flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-110">
                  in
                </div>
                <span className="font-bold text-2xl tracking-tighter">
                  LinkedIn
                </span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#0077B5] rounded flex items-center justify-center text-white font-bold text-[8px] transition-transform group-hover:scale-110">
                  NAV
                </div>
                <span className="font-bold text-2xl tracking-tighter">
                  Sales Navigator
                </span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#10A37F] rounded flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9022 6.0462 6.0462 0 0 0-4.385-3.1097 6.0293 6.0293 0 0 0-5.4327 1.2916 6.0718 6.0718 0 0 0-4.081 3.2033 6.0402 6.0402 0 0 0 .199 5.3456 6.0227 6.0227 0 0 0 .5153 4.9022 6.0462 6.0462 0 0 0 4.385 3.1097 6.0293 6.0293 0 0 0 5.4327-1.2916 6.0718 6.0718 0 0 0 4.081-3.2033 6.0402 6.0402 0 0 0-.199-5.3456z" />
                  </svg>
                </div>
                <span className="font-bold text-2xl tracking-tighter">
                  OpenAI
                </span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#FF7A59] rounded flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.2 12.1v2.5L9 16.5l-2.2-1.9v-2.5l2.2-1.9 2.2 2z" />
                  </svg>
                </div>
                <span className="font-bold text-2xl tracking-tighter">
                  HubSpot
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Beweise & Ergebnisse */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
                  Kein Rätselraten mehr. <br />
                  <span className="text-[#FE5454]">Sondern ein System.</span>
                </h2>
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE5454]/10 blur-3xl"></div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FE5454]/20 border border-[#FE5454]/30 text-[#FE5454] text-[10px] font-bold uppercase tracking-widest">
                      Beta-Phase
                    </div>
                    <h3 className="text-2xl font-bold font-heading leading-tight">
                      Wir bauen die Zukunft <br />
                      <span className="text-slate-400">deiner Akquise.</span>
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Cyrano ist die nächste Evolutionsstufe unserer Strategie
                      zur Kundengewinnung. Das System ist brandneu – deshalb
                      suchen wir aktuell die ersten 10 Partner, die mit uns
                      diese neue Ära des B2B-Vertriebs prägen wollen.
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xl">
                        🏗️
                      </div>
                      <div>
                        <p className="text-sm font-bold">
                          Werde unser Beta-Partner
                        </p>
                        <p className="text-xs text-slate-500">
                          Sichere dir den First-Mover Vorteil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-white rounded-[2.5rem] border-8 border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden group">
                  <img
                    src="/images/kalendereinträge.png"
                    alt="Voller Terminkalender durch Cyrano Kundengewinnung"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-bold italic">
                      Das Ziel: So sieht ein Terminkalender mit Cyrano aus.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FE5454] animate-pulse"></div>
                  <p className="text-[12px] text-slate-900 font-bold uppercase tracking-tight">
                    Beta-Phase läuft
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Proofs (Added for Trust) */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  sender: "Interessent",
                  msg: "Spannender Ansatz. Hättest du am Donnerstag Zeit für einen kurzen Austausch?",
                  time: "14:22",
                },
                {
                  sender: "Interessent",
                  msg: "Endlich mal keine 08/15 Nachricht. Das Thema KI-Outreach beschäftigt uns gerade sehr.",
                  time: "Gestern",
                },
                {
                  sender: "Interessent",
                  msg: "Können wir dazu mal telefonieren? Deine Nachricht hat genau einen Nerv getroffen.",
                  time: "11:05",
                },
              ].map((chat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="flex-1">
                      <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {chat.time}
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-600 font-medium italic">
                      &quot;{chat.msg}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Problem Sektion */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 bg-white relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-widest uppercase shadow-sm">
                Die Realität
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-heading">
                Das Problem ist nicht fehlende Disziplin. <br />
                <span className="text-slate-400">
                  Das Problem ist das &quot;Blank Page Syndrome&quot;.
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Du starrst auf den blinkenden Cursor und weißt nicht, was du
                schreiben sollst, ohne wie ein schmieriger Verkäufer zu klingen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Kein Roboter-Gefühl",
                  text: "Die Software passt sich zu 100% deinem Schreibstil und Verkaufsprozess an. Keine generischen Phrasen, sondern Nachrichten, die nach dir klingen.",
                  icon: "🎭",
                },
                {
                  title: "Passt in jeden Ablauf",
                  text: "Ob Erstgespräch, Info-Material oder Direktverkauf: Cyrano steuert deine Interessenten exakt dorthin, wo dein Prozess am stärksten ist.",
                  icon: "⚙️",
                },
                {
                  title: "Kaufbereite Kontakte",
                  text: "Wir helfen dir mit den richtigen Filtern und der LinkedIn-Suche genau die Entscheider zu finden, die jetzt Bedarf haben.",
                  icon: "🎯",
                },
                {
                  title: "Automatisches Nachfassen",
                  text: "Der Erfolg liegt im Dranbleiben. Wer manuell arbeitet, vergisst 50% der Chancen. Cyrano lässt niemanden durch das Netz fallen.",
                  icon: "⌛",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-[2rem] space-y-6 flex flex-col items-start text-left"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Cyrano Origin Box */}
        <section className="px-4 py-12 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <div className="relative glass-panel p-10 md:p-12 rounded-[3rem] border-white shadow-xl flex flex-col md:flex-row gap-10 items-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE5454]/5 blur-3xl -z-10"></div>
              <div className="w-24 h-24 shrink-0 rounded-3xl bg-slate-900 flex items-center justify-center text-5xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <span className="filter drop-shadow-lg">🖋️</span>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold font-heading text-slate-900 leading-tight">
                  Warum eigentlich{" "}
                  <span className="text-[#FE5454]">&quot;Cyrano&quot;</span>?
                </h3>
                <div className="prose prose-slate text-slate-600 text-lg leading-relaxed">
                  <p>
                    Inspiriert von <strong>Cyrano de Bergerac</strong>, dem
                    meisterhaften Dichter und Fechter, der im Schatten stand, um
                    seinem Freund die perfekten Worte für seine Briefe
                    einzuflüstern.
                  </p>
                  <p className="text-base text-slate-500 italic font-medium">
                    Genau das ist unsere Software für dich: Dein unsichtbarer
                    Souffleur, der sicherstellt, dass jede Nachricht ein
                    Volltreffer ist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Prozess Sektion */}
        <section
          id="prozess"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 bg-white relative"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24 space-y-6">
              <div className="text-sm font-bold tracking-[0.3em] text-[#FE5454] uppercase">
                Der Fahrplan
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-heading">
                3 Phasen zum vollen Terminkalender
              </h2>
            </div>

            <div className="space-y-8 relative">
              {[
                {
                  step: "01",
                  title: "Setup & Positionierung",
                  duration: "Woche 1-2",
                  text: "Wir schärfen dein Profil und definieren deine Wunschkunden. Dein Fundament muss stehen, bevor wir Traffic draufgeben.",
                },
                {
                  step: "02",
                  title: "Cyrano Installation",
                  duration: "Woche 3",
                  text: "Du erhältst Zugang zur Software. Wir richten gemeinsam die Filter im Sales Navigator ein und trainieren die KI auf deine Tonalität.",
                },
                {
                  step: "03",
                  title: "Routine & Skalierung",
                  duration: "Woche 4-12",
                  text: "Tägliche Routine: 15 Min für 5-10 Termine. Wir optimieren deine Chats in wöchentlichen Calls, bis der Prozess sitzt.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col md:flex-row gap-10 items-start md:items-center p-10 rounded-[3rem] bg-[#F5F5F7] border border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <div className="text-7xl font-extrabold text-slate-200/40 font-heading shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest">
                      {item.duration}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xl leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5.5 Software Showcase */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 bg-[#F5F5F7] overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase shadow-sm">
                Product Deep-Dive
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-heading">
                Dein neuer <span className="text-[#FE5454]">Sidekick.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Cyrano analysiert das Profil deines Wunschkunden und liefert dir
                in Sekunden 3 maßgeschneiderte Gesprächsaufhänger – eloquent,
                psychologisch fundiert und unwiderstehlich.
              </p>
            </div>

            <div className="relative w-full max-w-2xl mx-auto">
              {/* Background Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FE5454]/10 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

              <div className="glass-panel p-3 md:p-6 rounded-[2.5rem] shadow-3xl bg-white border border-white relative z-10 overflow-hidden">
                <img
                  src="/images/screenshot ders software.png"
                  alt="Screenshot der Cyrano Software - DM Sidekick"
                  className="w-full h-auto rounded-xl shadow-2xl border border-slate-100 transition-transform duration-1000 hover:scale-[1.02]"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-10 -right-10 hidden md:flex flex-col p-6 rounded-[2rem] bg-white border border-slate-100 shadow-2xl z-20 max-w-[240px] animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    Live Analyse
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Basierend auf echten LinkedIn-Daten und deinem individuellen
                  Schreibstil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Angebot Sektion (The Grand Slam Offer) */}
        <section
          id="stack"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 bg-slate-900 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#FE5454]/15 blur-[150px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FE5454]/10 border border-[#FE5454]/20">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#FE5454] uppercase">
                      BETA ANGEBOT
                    </span>
                  </div>
                  <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight font-heading">
                    Kein Kurs. <br />
                    <span className="text-[#FE5454]">Ein Upgrade.</span>
                  </h2>
                  <p className="text-2xl text-slate-400 font-light leading-relaxed">
                    Wir liefern dir nicht nur die Bauanleitung, wir liefern das
                    Werkzeug und helfen beim Bauen.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Was du heute installierst:
                  </p>
                  <ul className="space-y-5">
                    {[
                      {
                        item: "12 Wochen Mentoring & Implementation (Done-With-You)",
                        value: "3.500 €",
                      },
                      {
                        item: "12 Wochen 'Cyrano' Software-Lizenz (Pro Plan)",
                        value: "Geschenkt",
                        highlight: true,
                      },
                      {
                        item: "The Inbox Playbook Video Library",
                        value: "997 €",
                      },
                      {
                        item: "Wöchentliche Live Q&A Calls & WhatsApp Support",
                        value: "Priceless",
                      },
                      {
                        item: "4x 30 Min. Deep-Dive persönlich mit einem der Gründer",
                        value: "Inkludiert",
                      },
                      {
                        item: "BONUS: Individuelles Skript-Review (2x)",
                        value: "400 €",
                      },
                    ].map((li, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center text-lg text-slate-300 border-b border-white/5 pb-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#FE5454]/20 flex items-center justify-center text-[#FE5454] text-xs">
                            ✓
                          </div>
                          {li.item}
                        </div>
                        <span
                          className={`text-sm italic ${
                            li.value === "Geschenkt"
                              ? "text-[#FE5454] font-bold"
                              : "text-slate-500"
                          }`}
                        >
                          {li.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">
                      Gesamtwert:
                    </span>
                    <span className="text-2xl font-bold line-through text-slate-600 tracking-tight">
                      5.847 €
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-panel-dark p-10 sm:p-16 rounded-[3.5rem] border-white/10 shadow-3xl text-center space-y-10 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FE5454] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(254,84,84,0.5)]">
                    BETA-INVESTMENT
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                    Heute nur ein Investment von
                  </div>
                  <div className="text-8xl font-black font-heading tracking-tighter text-white">
                    1.900€
                  </div>
                  <div className="text-slate-500 text-xs font-medium tracking-widest uppercase">
                    netto, zzgl. MwSt
                  </div>
                </div>

                <Link
                  href="https://cal.com/dennis-debus/"
                  className="flex items-center justify-center w-full py-6 rounded-full bg-white text-slate-900 font-black text-xl hover:bg-[#FE5454] hover:text-white transition-all hover:scale-[1.05] shadow-2xl"
                >
                  POTENZIAL-ANALYSE BUCHEN
                </Link>

                <div className="space-y-6 pt-10 border-t border-white/10 text-left">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold italic">
                      !
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <strong className="text-white">Bedingung:</strong> Der
                      Preis gilt nur gegen ein Video-Testimonial nach Erfolg.
                    </p>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-[#FE5454]/10 border border-[#FE5454]/20">
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      <span className="text-[#FE5454] font-bold uppercase block mb-1">
                        Erfolgs-Garantie:
                      </span>
                      Wenn du in den ersten 12 Wochen keine qualifizierten
                      Termine im Kalender hast, arbeiten wir kostenlos weiter,
                      bis der Prozess sitzt. Das gesamte Risiko liegt bei uns.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#FE5454] font-bold uppercase text-[10px] tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#FE5454] animate-pulse"></span>
                    Nur noch 3 Plätze für Januar verfügbar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section
          id="faq"
          className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 bg-[#F5F5F7]"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-heading">
                Häufige Fragen
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "Wie viel Zeit brauche ich?",
                  a: "In den ersten 2 Wochen ca. 3 Stunden für das Setup. Danach ist Cyrano dein Zeitsparer: 15-20 Minuten pro Tag reichen, um deine Pipeline zu füllen.",
                },
                {
                  q: "Ist das Software oder Coaching?",
                  a: "Beides. Wir glauben, dass ein Tool ohne Skill nutzlos ist. Deshalb lernst du in 12 Wochen das Handwerk, und Cyrano ist dein Werkzeug, das wir dir für die Laufzeit kostenlos zur Verfügung stellen.",
                },
                {
                  q: "Ist das Kaltakquise?",
                  a: "Ja und Nein. Wir sprechen Leute an, die uns noch nicht kennen. Aber durch Cyrano personalisieren wir so intelligent, dass es sich wie ein echtes Gespräch anfühlt.",
                },
                {
                  q: "Wie schnell sehe ich Ergebnisse?",
                  a: "Die ersten validen Termine kommen meist in Woche 3 oder 4, sobald die individuellen Kampagnen angelaufen sind. Durch das 12-Wochen Mentoring stellen wir sicher, dass der Prozess dauerhaft sitzt.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="glass-card p-10 rounded-[2.5rem] bg-white border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading tracking-tight leading-tight">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg italic">
                    &quot;{faq.a}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 sm:py-48 bg-white relative overflow-hidden text-center border-t border-slate-100">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <h2 className="text-5xl sm:text-8xl font-black tracking-tight text-slate-900 font-heading leading-none uppercase">
              Bereit für den <br />
              <span className="text-[#FE5454]">System-Check?</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              In 20 Minuten erfährst du, wie unser Vertriebssystem dir hilft,
              dein LinkedIn-Profil in eine Terminkalender-Maschine verwandeln.
              100% Strategie, 0% Verkaufsdruck.
            </p>
            <div className="pt-10 flex flex-col items-center gap-6">
              <Link
                href="https://cal.com/dennis-debus/"
                className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-slate-900 text-white font-black text-2xl transition-all hover:bg-[#FE5454] hover:scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
              >
                STRATEGIE-GESPRÄCH VEREINBAREN
              </Link>
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#FE5454] animate-pulse"></span>
                Nur noch 3 Plätze für Januar verfügbar
              </div>
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-red-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
