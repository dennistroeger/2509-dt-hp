import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Inbox Guide | 5-Phasen-Modell für LinkedIn Outreach",
  description:
    "Das 5-Phasen-Modell, mit dem unsere Kunden regelmäßig 16+ Termine / Monat buchen - ganz ohne Ads.",
};

export default function TigPage() {
  return (
    <div className="min-h-screen font-body text-slate-900 bg-[#F5F5F7] overflow-x-hidden selection:bg-[#fe5454] selection:text-white relative">
      {/* Background Ambience - Subtle Apple-style */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#fe5454]/8 rounded-full blur-[120px] animate-blob mix-blend-multiply opacity-40"></div>
        <div className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-[#9C88FF]/8 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] bg-[#00D4AA]/8 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply opacity-40"></div>
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-float-slow">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 border border-white/40 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe5454] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe5454]"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-slate-600 uppercase font-heading">
                Outreach System
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] font-heading">
              The Inbox <span className="text-gradient">Guide</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Das ist unser 5-Phasen-Modell, mit dem unsere Kunden regelmäßig
              16+ Termine / Monat buchen - ganz ohne Ads.
            </p>
          </div>

          {/* Intro Card */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              Dieser Guide deckt ab …
            </h2>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold">✓</span>
                Wie du alle 5 Sekunden eine Vernetzung-Anfrage sendest. Fokus
                auf aktive Leute auf LinkedIn.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold">✓</span>
                Die „Value-First“-Strategie, die uns Antworten von 45% der
                Kontakte bringt.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold">✓</span>
                Wie du Gespräche mit einem klaren Framework am Laufen hältst.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold">✓</span>
                Die Strategie, die uns hilft, 75% der Chats wiederzubeleben
                (Follow-ups).
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold">✓</span>
                Der gesamte Prozess, der mir im Oktober 20+ Calls und meinen
                Kunden durchschnittlich 3 gebuchte Meetings mit einer 0%
                No-Show-Rate gebracht hat.
              </li>
            </ul>
          </div>

          {/* Phases Overview */}
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-6 sm:mb-8 text-center">
              Die 5 Phasen im Überblick
            </h2>

            {/* Vertical Layout for All Screen Sizes */}
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                {
                  num: 1,
                  title: "Interessenten finden",
                  subtitle: "Signal-basiert",
                  color: "#fe5454",
                },
                {
                  num: 2,
                  title: "Vernetzung senden",
                  subtitle: "Ohne Notiz",
                  color: "#9C88FF",
                },
                {
                  num: 3,
                  title: "Aufwärmen",
                  subtitle: "Vertrauens-Maschine",
                  color: "#00D4AA",
                },
                {
                  num: 4,
                  title: "Gespräche starten",
                  subtitle: "Ohne Pitching",
                  color: "#9C88FF",
                },
                {
                  num: 5,
                  title: "Zum Call überleiten",
                  subtitle: "Sanft & Natürlich",
                  color: "#FFD54F",
                },
              ].map((phase, idx) => (
                <div key={phase.num} className="relative group">
                  <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 md:p-6 rounded-xl bg-white/40 border border-slate-200/60 backdrop-blur-sm hover:bg-white/60 hover:border-opacity-40 hover:shadow-lg transition-all duration-300">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${phase.color}15` }}
                    >
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                        style={{ color: phase.color }}
                      >
                        {phase.num}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg md:text-xl mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  {idx < 4 && (
                    <div className="flex justify-center my-3">
                      <div
                        className="w-0.5 h-6 sm:h-8 rounded-full"
                        style={{ backgroundColor: `${phase.color}20` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Outreach Works */}
          <div className="glass-card rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Warum Outreach funktioniert
            </h2>
            <p className="text-slate-600 italic">
              (Wenn Content allein nicht reicht)
            </p>

            <div className="prose prose-lg text-slate-700">
              <p>
                Die meisten Leute verlassen sich auf Kanäle, die sie nicht
                kontrollieren können:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Inbound</li>
                <li>Empfehlungen</li>
              </ul>
              <p className="mt-4">
                Es fühlt sich einfacher an, weil es Ablehnung vermeidet. Also
                posten sie endlos Content und hoffen, dass sich jemand meldet.
              </p>
              <p className="font-bold text-slate-900 mt-4">
                Outreach ist anders. Du kontrollierst das Ergebnis.
              </p>
              <p>
                Mehr Zeit in führenden KPIs (Leading KPIs) → mehr gebuchte Calls
                (Lagging KPIs).
              </p>
              <div className="bg-slate-50/80 p-6 rounded-xl border border-slate-200/60 mt-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Der Schlüssel: Vertrautheit + Interesse.
                </h3>
                <p className="text-slate-700">
                  Wenn du vertrauenswürdig und bekannt wirkst, antworten die
                  Leute. Dieses Protokoll schafft beides.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 1 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-sm tracking-wide mb-2">
              PHASE 1
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Interessenten finden (Signal-basiert)
            </h2>
            <p className="text-lg text-slate-600">
              Ziel: Identifiziere aktive Leute in deiner Nische, mit denen man
              am einfachsten ins Gespräch kommt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">
                  Methode A - Wettbewerber-Kontakte
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  <li>
                    Finde einen Influencer oder Wettbewerber in deiner Nische.
                  </li>
                  <li>Öffne deren Kontakte.</li>
                  <li>Filtere nach deinem ICP (Ideal Customer Profile).</li>
                  <li>Füge die besten Treffer zu deiner Liste hinzu.</li>
                </ol>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">
                  Methode B - Engagement Scrape
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  <li>Suche einen Influencer oder Wettbewerber.</li>
                  <li>Öffne deren beste Posts.</li>
                  <li>Checke Likes und Kommentare.</li>
                  <li>Identifiziere deinen ICP von dort.</li>
                </ol>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl bg-white/30">
              <h3 className="text-xl font-bold mb-3">
                Methode C - Unternehmenswebseiten scrapen
              </h3>
              <p className="text-slate-700 mb-4">
                Scrapeli.io erlaubt es, dass du die Follower von
                Unternehmensseiten auf LinkedIn scrapen kannst. D.h. wenn du
                z.B. weißt, dass deine Zielgruppe eine bestimmte Software intern
                einsetzt, kannst du schauen, wer nach außen offiziell Fan ist.
              </p>
              <a
                href="https://scrapeli.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fe5454] hover:underline font-medium"
              >
                👉 https://scrapeli.io/ aufrufen
              </a>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>Wunschmenege an Followern wählen</li>
                <li>24h warten</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tools & Ressourcen</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Breakcold (oder Google Sheet) - Tracke: Akzeptanzrate,
                  Einladungen, Antworten.
                </li>
                <li>RapidAPI für Profile</li>
                <li>Serper für die Google Suche</li>
                <li>
                  ScrapeLi.io für das Scrapen von LinkedIn Company Page
                  Followern
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium mb-2">
                  Wie du mit KI leichter potentielle Kunden finden kannst:
                </p>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <iframe
                    src="https://www.loom.com/embed/b0329aeef02245e99402bd3f2f71c0f1"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-[2rem] p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-xs tracking-wide">
                PHASE 2
              </div>
              <h2 className="text-2xl font-bold font-heading">
                Vernetzung-Anfragen senden
              </h2>

              <div className="bg-[#FF8A80]/10 p-4 rounded-lg border border-[#FF8A80]/20 backdrop-blur-sm">
                <p className="font-bold text-slate-900">
                  Regel: Keine Notiz dazu.
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Notizen wirken aufdringlich (&ldquo;pushy&rdquo;).
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Dein Profil sollte klar aussagen:</p>
                <ul className="list-disc pl-5 text-slate-700 text-sm">
                  <li>Wen du unterstützt</li>
                  <li>Welches Problem du löst</li>
                  <li>Welches Ergebnis du lieferst</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <p className="font-bold text-slate-900">
                  Ziel: 20 Einladungen/Tag.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-xs tracking-wide">
                PHASE 3
              </div>
              <h2 className="text-2xl font-bold font-heading">
                Aufwärmen (Vertrauens-Maschine)
              </h2>
              <p className="text-sm text-slate-600">
                Bevor du eine DM schreibst, stell sicher, dass sie deinen Namen
                gesehen haben. Nutze das 7-Tage-Fenster.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-[#00D4AA]/8 p-3 rounded-lg border border-[#00D4AA]/15">
                  <p className="font-bold text-[#00D4AA] mb-2">Do:</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>Like 2–3 Posts</li>
                    <li>Hinterlasse EINEN durchdachten Kommentar</li>
                    <li>Bezieh dich auf etwas Spezifisches</li>
                    <li>Bleib menschlich</li>
                  </ul>
                </div>
                <div className="bg-[#FF8A80]/8 p-3 rounded-lg border border-[#FF8A80]/15">
                  <p className="font-bold text-[#fe5454] mb-2">Don&apos;t:</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>&ldquo;Toller Post!&rdquo;</li>
                    <li>Alles kommentieren</li>
                    <li>Kalt anschreiben ohne Aufwärmen</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-sm">
                  Ziel: Antwortrate durch Vertrautheit erhöhen.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-sm tracking-wide mb-2">
              PHASE 4
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Gespräche starten (Ohne Pitching)
            </h2>

            <div className="bg-[#80E5D4]/12 p-6 rounded-xl border border-[#80E5D4]/25 backdrop-blur-sm">
              <p className="font-medium text-slate-900">
                Wenn sie annehmen, warte 7 Tage.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Warum? Dein Content wärmt sie eine Woche lang auf. Selbst mit
                2–3 wöchentlichen Posts erinnern sie sich eher an dich.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Gesprächseinstiege (Opener)
              </h3>

              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg border border-slate-200/60 backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold text-[#9C88FF] block mb-1 tracking-wider">
                    Nachricht 1
                  </span>
                  <p className="text-slate-900">
                    Hey [Name], freut mich, dich kennenzulernen!
                  </p>
                </div>

                <div className="bg-white/50 p-4 rounded-lg border border-slate-200/60 backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold text-[#9C88FF] block mb-1 tracking-wider">
                    Nachricht 2
                  </span>
                  <p className="text-slate-900">
                    Ich habe gerade deinen neuesten Post über [Thema] gesehen.
                    Ich konnte mich total in [Spezifisches Detail]
                    hineinversetzen, also Glückwunsch dazu! Ich habe einen
                    Kommentar dagelassen... hoffe, du rockst das hier auf
                    LinkedIn!
                  </p>
                </div>

                <div className="bg-white/50 p-4 rounded-lg border border-slate-200/60 backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold text-[#9C88FF] block mb-1 tracking-wider">
                    Nachricht 3
                  </span>
                  <p className="text-slate-900">
                    Apropos, wie läuft&apos;s auf LinkedIn? Zufrieden mit den
                    Ergennissen?
                  </p>
                </div>

                <div className="bg-white/50 p-4 rounded-lg border border-slate-200/60 backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold text-[#9C88FF] block mb-1 tracking-wider">
                    Nachricht 4 (Alternative)
                  </span>
                  <p className="text-slate-900">
                    P.S. Ich habe gesehen, dass du in [Ort] wohnst. Ich wollte
                    schon immer mal [Wahrzeichen] besuchen! [Frage]?
                  </p>
                </div>

                <div className="bg-white/50 p-4 rounded-lg border border-slate-200/60 backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold text-[#9C88FF] block mb-1 tracking-wider">
                    Nachricht 5 (Der &quot;menschliche Fehler&quot;)
                  </span>
                  <p className="text-slate-600 italic">
                    [korrigiere einen kleinen Tippfehler aus der vorherigen
                    Nachricht, um zu beweisen, dass du kein Bot bist]
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-slate-900">Regeln</h4>
                  <ul className="space-y-1 text-sm text-[#00D4AA] font-medium">
                    <li>✔ Kein Pitching</li>
                    <li>✔ Einfach zu beantworten</li>
                    <li>✔ Menschlicher Tonfall</li>
                  </ul>
                  <ul className="space-y-1 text-sm text-[#fe5454] font-medium mt-1">
                    <li>❌ Lange Absätze</li>
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-slate-900">
                    4.1 - Schnellen Rapport aufbauen
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>Reagiere auf das, was sie sagen</li>
                    <li>Füge kurze Insights hinzu</li>
                    <li>Pass dich ihrem Tonfall an</li>
                    <li>Halt es locker</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200/50">
              <h3 className="text-2xl font-bold mb-4">
                4.2 - Discovery (Smarte Fragen)
              </h3>
              <p className="text-lg font-medium text-slate-800 mb-4">
                Du verkaufst nicht. Du lernst.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Kernfragen</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>„Wie gewinnst du aktuell Kunden auf LinkedIn?“</li>
                    <li>„Was ist gerade die größte Hürde?“</li>
                    <li>„Ist es eine Priorität, das zu lösen?“</li>
                    <li>„Wie sieht Erfolg in den nächsten 90 Tagen aus?“</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Signale</h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-bold text-[#00D4AA]">
                        Grüne Flagge:
                      </span>{" "}
                      Sie teilen Herausforderungen.
                    </p>
                    <p className="text-sm">
                      <span className="font-bold text-[#fe5454]">
                        Rote Flagge:
                      </span>{" "}
                      &ldquo;Alles gut&rdquo;, &ldquo;keine Prio&rdquo;, &ldquo;testen nur&rdquo;.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200/50">
              <h3 className="text-2xl font-bold mb-4">
                4.3 - Wert zeigen (Ohne zu pitchen)
              </h3>
              <div className="bg-[#00D4AA]/10 p-6 rounded-xl border border-[#00D4AA]/20 backdrop-blur-sm">
                <p className="font-bold mb-2 text-slate-900">Beispiel:</p>
                <p className="italic text-slate-700">
                  &ldquo;Basierend auf dem, was du gesagt hast, würde ich eine Sache
                  ändern: Starte mit Outreach → DANN schichte Content oben
                  drauf. Die meisten Kunden sehen schnellere Erfolge, weil sie
                  früher echte Gespräche führen.&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-slate-900">
                  → Sie denken jetzt: &ldquo;Diese Person versteht es.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-sm tracking-wide mb-2">
              PHASE 5
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Zum Call überleiten (Sanft, Natürlich)
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">Soft Ask</h3>
                <p className="text-slate-700 text-sm">
                  „Wir haben jetzt ein bisschen geschrieben – Lust, nächste
                  Woche kurz zu telefonieren?“
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">Wert versprechen</h3>
                <p className="text-slate-700 text-sm">
                  „Führe dich gerne durch das System. Du nimmst auf jeden Fall
                  etwas mit.“
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold mb-2">Link</h3>
                <p className="text-slate-700 text-sm">
                  „Hier ist mein Kalender, falls das einfacher ist: [Link]“
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Follow-Up Protokoll</h3>
              <p className="mb-4">
                Die meisten Calls kommen durch Follow-ups zustande.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center p-3 bg-[#FFD54F]/10 rounded-lg border border-[#FFD54F]/20 backdrop-blur-sm">
                  <span className="font-bold min-w-[120px] text-slate-900">
                    Tag 3:
                  </span>
                  <span className="text-slate-700">
                    Sende Mehrwert (Value).
                  </span>
                </li>
                <li className="flex items-center p-3 bg-[#FFD54F]/10 rounded-lg border border-[#FFD54F]/20 backdrop-blur-sm">
                  <span className="font-bold min-w-[120px] text-slate-900">
                    Tag 4:
                  </span>
                  <span className="text-slate-700">
                    Sende ein GIF (80% Antwortrate!).
                  </span>
                </li>
              </ul>

              <div className="mt-8 p-6 rounded-xl bg-white/50 border border-slate-200/60 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex-shrink-0 relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/giphy.gif"
                      alt="Pattern Interrupt GIF - Last Resort"
                      width={300}
                      height={300}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2 text-slate-900">
                      Last Resort GIF - Pattern Interrupt
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Dieses GIF dient dazu, einen{" "}
                      <strong className="text-slate-900">
                        Pattern Interrupt
                      </strong>{" "}
                      durchzuführen. Wenn deine Nachrichten bisher ignoriert
                      wurden, bricht ein unerwartetes, humorvolles GIF das
                      gewohnte Muster und lenkt die Aufmerksamkeit auf deine
                      Nachricht. Die Überraschung erhöht die Wahrscheinlichkeit
                      einer Antwort erheblich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA / Conclusion */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 text-center space-y-8 bg-gradient-to-b from-white/80 to-white/60">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Was jetzt zu tun ist
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              An diesem Punkt verstehst du: Vernetzungsanfragen senden,
              Gespräche starten, Chats am Laufen halten, Antworten in Calls
              verwandeln und Follow-ups machen.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
              <div className="p-6 rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Option 1 - Mach es allein
                </h3>
                <p className="text-slate-600">
                  Du wirst es herausfinden, aber es ist langsam.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden group hover:border-[#fe5454]/30 transition-all">
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-[#fe5454] transition-colors">
                  Option 2 - Arbeite mit mir
                </h3>
                <p className="text-slate-600 mb-4">
                  Du bekommst: Das volle Protokoll, Iterationen, Struktur,
                  Vorhersehbaren Call-Flow.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#fe5454] text-white font-medium hover:bg-[#e04545] transition-colors shadow-lg shadow-red-500/30 hover:scale-[1.02]"
              >
                👉 Hier klicken für den Call
              </Link>
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
