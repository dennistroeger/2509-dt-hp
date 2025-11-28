import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generiere 5+ qualifizierte Termine pro Woche",
  description:
    'Direktnachrichten auf LinkedIn sind der schnellste Weg zu neuen Kunden. Wir zeigen dir, wie du das ohne "Salesy"-Nachrichten automatisierst.',
  openGraph: {
    title: "Generiere 5+ qualifizierte Termine pro Woche",
    description:
      'Direktnachrichten auf LinkedIn sind der schnellste Weg zu neuen Kunden. Wir zeigen dir, wie du das ohne "Salesy"-Nachrichten automatisierst.',
    images: [
      {
        url: "/images/Animation_Inbox.gif",
        width: 1200,
        height: 630,
        alt: "The Inbox Guide - LinkedIn Outreach System",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generiere 5+ qualifizierte Termine pro Woche",
    description:
      'Direktnachrichten auf LinkedIn sind der schnellste Weg zu neuen Kunden. Wir zeigen dir, wie du das ohne "Salesy"-Nachrichten automatisierst.',
    images: ["/images/Animation_Inbox.gif"],
  },
};

const Infobox = ({
  children,
  title,
  variant = "amber",
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "amber" | "blue" | "slate";
}) => {
  const styles = {
    amber: "bg-amber-50/80 border-amber-200/60 text-amber-900",
    blue: "bg-blue-50/80 border-blue-200/60 text-blue-900",
    slate: "bg-slate-50/80 border-slate-200/60 text-slate-900",
  };

  return (
    <div
      className={`rounded-xl p-6 backdrop-blur-sm my-6 border ${styles[variant]}`}
    >
      {title && <h3 className="font-bold mb-2 opacity-90">{title}</h3>}
      <div className="opacity-90 leading-relaxed">{children}</div>
    </div>
  );
};

export default function TigPage() {
  return (
    <div className="min-h-screen font-body text-slate-900 bg-[#F5F5F7] overflow-x-hidden selection:bg-[#fe5454] selection:text-white relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#fe5454]/8 rounded-full blur-[120px] animate-blob mix-blend-multiply opacity-40"></div>
        <div className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-[#9C88FF]/8 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] bg-[#00D4AA]/8 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply opacity-40"></div>
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
                Organic Outreach
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] font-heading">
              The Inbox <span className="text-gradient">Guide</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Das 5-Phasen-Modell für 16+ Termine / Monat (Organic Outreach)
            </p>


            </div>
          </div>

          <Infobox title="Wichtiger Hinweis vorab:" variant="amber">
            Dies ist ein lebendes Framework, kein starres Gesetzbuch. Betrachte
            die folgenden Schritte als strategischen Vorschlag. Der Erfolg liegt
            in der Anpassung an deine spezifische Zielgruppe, deine
            Persönlichkeit und dein Angebot. Kopiere nichts blind, sondern
            adaptiere es. Wichtig ist, dass du anfängst und Daten sammelst.
          </Infobox>

          {/* Guide Coverage */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              Dieser Guide deckt ab:
            </h2>
            <ul className="space-y-4 text-lg text-slate-700">
              {[
                "Wie du alle 5 Sekunden eine Vernetzung-Anfrage sendest (Fokus auf aktive Leute).",
                "Die „Value-First“-Strategie, die uns Antworten von 45% der Kontakte bringt.",
                "Wie du Gespräche mit einem klaren Framework am Laufen hältst.",
                "Die Strategie, die uns hilft, 75% der Chats wiederzubeleben (Follow-ups).",
                "Der gesamte Prozess, der mir im Oktober 20+ Calls und meinen Kunden durchschnittlich 3 gebuchte Meetings mit einer 0% No-Show-Rate gebracht hat.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Outreach Works */}
          <div className="glass-card rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Warum Outreach funktioniert
            </h2>
            <p className="text-slate-600 italic font-medium">
              (Wenn Content allein nicht reicht)
            </p>

            <div className="prose prose-lg text-slate-700 max-w-none">
              <p>
                Die meisten Leute verlassen sich auf Kanäle, die sie nicht
                kontrollieren können:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#fe5454]">
                <li>Inbound (Warten, dass jemand kommt)</li>
                <li>Empfehlungen (Hoffnung auf Dritte)</li>
              </ul>
              <p>
                Es fühlt sich einfacher an, weil es die direkte Ablehnung
                vermeidet. Also posten sie endlos Content und hoffen, dass sich
                jemand meldet (&quot;Post & Pray&quot;).
              </p>
              <p className="font-bold text-slate-900 text-xl">
                Outreach ist anders.
              </p>
              <p>
                Du kontrollierst das Ergebnis. Mehr Zeit in führenden KPIs
                (Leading KPIs: Nachrichten senden) → mehr gebuchte Calls
                (Lagging KPIs: Umsatz).
              </p>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60 mt-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Der Schlüssel: Vertrautheit + Interesse.
                </h3>
                <p>
                  Wenn du vertrauenswürdig und bekannt wirkst, antworten die
                  Leute. Dieses Protokoll schafft beides. Entscheidend ist, dass
                  niemand deine Zielkunden so gut kennt wie du. Die Strategie
                  muss am Ende des Tages zu dir passen.
                </p>
              </div>
            </div>
          </div>

          {/* Scientific Outreach */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              Outreach wissenschaftlich & intuitiv Betreiben
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Outreach ist kein Glücksspiel und keine Kunst – es ist
              Ingenieursarbeit. Es gibt nicht „die eine magische Nachricht“, die
              bei jedem CEO der Welt sofort funktioniert. Was funktioniert, ist
              eine Variable aus Zielgruppe, Timing, Angebot und Markt-Reife.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Da niemand (auch ich nicht) die Zukunft vorhersagen kann, ersetzen
              wir „Hoffnung“ durch Daten. Wir betrachten deinen
              LinkedIn-Posteingang wie ein Labor. Mit der Zeit schulst du deine
              Intuition, dieses Framework hilft dir dabei, das auf eine
              strukturierte Art und Weise zu tun.
            </p>

            <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3">
                Wieso Intuition beim Verkauf wesentlich ist
              </h3>
              <p className="text-slate-700 mb-4">
                In einem Gespräch schnell zu reagieren und die Persönlichkeit
                des Gegenüber zu erkennen und Fingerspitzengefühl zu haben,
                basiert auf Intuition. Viele, die mit Outreach beginnen, haben
                diese Intuition noch nicht. Das folgende Protokoll kannst du
                also erst einmal nutzen, um es dann mit der Zeit für dich
                anzupassen.
              </p>
              <p className="text-slate-700">
                Denn nach dem Führen von vielen Gesprächen wirst du besser
                verstehen, was funktioniert und was eben nicht. Ich selbst führe
                auch noch viele Experimente durch, die mir helfen zu verstehen,
                wie ich meine Zielkunden noch besser erreichen kann. Dabei ziehe
                ich Rückschlüsse erst, wenn ich mindestens 100 Leute
                angeschrieben habe. Mehr ist immer besser, doch am Ende soll es
                ja praktikabel bleiben.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Das wissenschaftliche Protokoll besteht aus 4 Säulen:
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="glass-card p-6 rounded-xl">
                  <span className="text-4xl font-bold text-[#fe5454]/20 mb-2 block">
                    1
                  </span>
                  <h4 className="font-bold text-lg mb-2">
                    Die Baseline (Der Nullpunkt)
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Bevor wir optimieren, müssen wir messen. Wenn du heute 100
                    Nachrichten sendest und 2 Antworten bekommst, ist das deine
                    Baseline (2% Reply Rate). Egal wie schlecht die Zahl ist –
                    sie ist unser Startpunkt. Ohne Baseline fliegst du blind.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <span className="text-4xl font-bold text-[#fe5454]/20 mb-2 block">
                    2
                  </span>
                  <h4 className="font-bold text-lg mb-2">
                    Isolierte Variablen (Ceteris Paribus)
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Der größte Fehler im Outreach: Man ändert alles
                    gleichzeitig.
                    <br />
                    <br />
                    <strong>Falsch:</strong> Du änderst am Montag deine
                    Zielgruppe, dein Profilbild UND den Text.
                    <br />
                    <strong>Richtig:</strong> Wir ändern nur eine Variable (z.B.
                    Zielgruppe) und behalten den Rest bei.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <span className="text-4xl font-bold text-[#fe5454]/20 mb-2 block">
                    3
                  </span>
                  <h4 className="font-bold text-lg mb-2">
                    Statistische Signifikanz
                  </h4>
                  <p className="text-slate-600 text-sm">
                    5 Antworten sind keine Grundlage. Das ist statistisches
                    Rauschen.
                    <br />
                    <br />
                    <strong>Sample Size:</strong> Wir treffen keine
                    Entscheidungen unter 50–100 Datenpunkten (gesendeten
                    Anfragen).
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <span className="text-4xl font-bold text-[#fe5454]/20 mb-2 block">
                    4
                  </span>
                  <h4 className="font-bold text-lg mb-2">
                    Die Feedback-Schleife (A/B Testing)
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Wir testen systematisch Nachricht A gegen Nachricht B.
                    <br />
                    <br />
                    Das Ziel: Wir eliminieren Emotionen aus dem Verkaufsprozess.
                    Ein &quot;Nein&quot; ist keine persönliche Ablehnung,
                    sondern nur ein Datenpunkt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The 5 Phases */}
          <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                Die 5 Phasen
              </h2>
              <Infobox variant="slate">
                Du magst einzelne Phasen nicht? Du möchtest den Beziehungsaufbau
                langsamer gestalten? Kein Problem. Wir nutzen dieses System bei
                fast keinem Kunden 1:1. Doch viele fangen damit an und
                adaptieren es mit der Zeit für sich, damit es für sie, ihre
                Persönlichkeit und ihr Produkt passt. Es gibt nicht den einen
                Weg!
              </Infobox>
          </div>

          {/* Phase 1 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-[#fe5454]/10 text-[#fe5454] font-bold text-sm tracking-wide mb-2">
              PHASE 1
            </div>
              <h3 className="text-3xl font-bold font-heading">
              Interessenten finden (Signal-basiert)
              </h3>
            <p className="text-lg text-slate-600">
              Ziel: Identifiziere aktive Leute in deiner Nische, mit denen man
              am einfachsten ins Gespräch kommt.
            </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">
                  Methode A - Wettbewerber-Kontakte
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                  <li>
                    Finde einen Influencer oder Wettbewerber in deiner Nische.
                  </li>
                  <li>Öffne deren Kontakte.</li>
                  <li>Filtere nach deinem ICP (Ideal Customer Profile).</li>
                  <li>Füge die besten Treffer zu deiner Liste hinzu.</li>
                </ol>
              </div>

              <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">
                  Methode B - Engagement Scrape
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                  <li>Suche einen Influencer oder Wettbewerber.</li>
                  <li>Öffne deren beste Posts.</li>
                    <li>
                      Checke Likes und Kommentare (Das sind aktive Nutzer!).
                    </li>
                  <li>Identifiziere deinen ICP von dort.</li>
                </ol>
            </div>

                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">
                Methode C - Unternehmenswebseiten scrapen
                  </h4>
                  <p className="text-sm text-slate-700 mb-3">
                Scrapeli.io erlaubt es, dass du die Follower von
                    Unternehmensseiten auf LinkedIn scrapen kannst.
              </p>
              <a
                href="https://scrapeli.io/"
                target="_blank"
                rel="noopener noreferrer"
                    className="text-[#fe5454] hover:underline text-sm font-medium block mb-2"
              >
                👉 https://scrapeli.io/ aufrufen
              </a>
                  <ul className="list-disc pl-5 text-sm text-slate-700">
                    <li>Wunschmenge an Followern wählen</li>
                <li>24h warten</li>
              </ul>
                </div>
            </div>

              <div className="bg-slate-50/50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Tools, die ich verwende:</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>RapidAPI (für Profile)</li>
                  <li>Serper (für Google Suche)</li>
                  <li>ScrapeLi.io (für Company Page Follower)</li>
                <li>
                  Breakcold (oder Google Sheet) - Tracke: Akzeptanzrate,
                  Einladungen, Antworten.
                </li>
              </ul>
            </div>
          </div>

            {/* Phase 2 */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-[#9C88FF]/10 text-[#9C88FF] font-bold text-sm tracking-wide mb-2">
                PHASE 2
              </div>
              <h3 className="text-3xl font-bold font-heading">
                Vernetzung-Anfragen senden
              </h3>

              <div className="bg-amber-50/80 p-6 rounded-xl border border-amber-200/50">
                <p className="font-bold text-amber-900 text-lg mb-2">
                  Regel: Keine Notiz dazu senden
                </p>
                <p className="text-amber-800 text-sm">
                  (außer du bist extrem spezifisch). Standard-Notizen wirken oft
                  aufdringlich („salesy“).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg">
                    Voraussetzung: Dein Profil muss ohne Worte verkaufen.
                  </h4>
                  <p className="text-slate-600">Es muss klar aussagen:</p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
                  <li>Wen du unterstützt</li>
                  <li>Welches Problem du löst</li>
                  <li>Welches Ergebnis du lieferst</li>
                </ul>
              </div>
                <div className="bg-white/40 p-6 rounded-xl text-center border border-white/60">
                  <span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">
                    Tägliches Ziel
                  </span>
                  <span className="block text-4xl font-bold text-[#9C88FF]">
                    ~20
                  </span>
                  <span className="text-slate-700 font-medium">
                    Einladungen/Tag
                  </span>
                  <p className="text-xs text-slate-500 mt-2">
                    Konstanz &gt; Intensität
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] font-bold text-sm tracking-wide mb-2">
                PHASE 3
              </div>
              <h3 className="text-3xl font-bold font-heading">
                Aufwärmen (Die Vertrauens-Maschine)
              </h3>
              <p className="text-slate-700 text-lg">
                Bevor du eine DM schreibst, stell sicher, dass sie deinen Namen
                gesehen haben. Nutze das 7-Tage-Fenster zwischen angenommener
                Anfrage & erster DM.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-[#00D4AA]/10 p-6 rounded-xl border border-[#00D4AA]/20">
                  <h4 className="font-bold text-[#008f72] mb-3 text-lg">Do:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-[#00D4AA] font-bold">✓</span> Like
                      2–3 Posts
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#00D4AA] font-bold">✓</span>{" "}
                      Hinterlasse EINEN durchdachten Kommentar
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#00D4AA] font-bold">✓</span> Bezieh
                      dich auf etwas Spezifisches
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#00D4AA] font-bold">✓</span> Bleib
                      menschlich
                    </li>
                  </ul>
                </div>
                <div className="bg-[#fe5454]/10 p-6 rounded-xl border border-[#fe5454]/20">
                  <h4 className="font-bold text-[#c93636] mb-3 text-lg">
                    Don&apos;t:
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span>{" "}
                      „Toller Post!“ (Lazy Comments)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span> Alles
                      kommentieren (Stalker-Vibes)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span> Kalt
                      anschreiben ohne Aufwärmen
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-medium text-center text-slate-700 italic">
                Ziel: Antwortrate durch den &quot;Mere-Exposure-Effect&quot;
                (Vertrautheit) erhöhen.
              </p>
          </div>

          {/* Phase 4 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#9C88FF]/10 text-[#9C88FF] font-bold text-sm tracking-wide mb-2">
              PHASE 4
            </div>
              <h3 className="text-3xl font-bold font-heading">
              Gespräche starten (Ohne Pitching)
              </h3>
              <p className="text-slate-700">
                Wenn sie annehmen, warte kurz (oder bis zum nächsten
                Content-Stück).
              </p>

            <div className="space-y-6">
                <h4 className="text-2xl font-bold">
                Gesprächseinstiege (Opener)
                </h4>

                <Infobox variant="amber">
                  Wichtig: Bitte kopiere diese Nachrichten nicht 1:1! Sie dienen
                  als Inspiration. Passe sie zwingend an deine Tonalität und
                  deine Zielgruppe an. Authentizität funktioniert immer besser
                  als &quot;Copy & Paste&quot;.
                </Infobox>

              <div className="space-y-4">
                  {[
                    {
                      title: "Nachricht 1",
                      text: '"Hey [Name], freut mich, dich kennenzulernen!"',
                    },
                    {
                      title: "Nachricht 2 (Kontext)",
                      text: '"Ich habe gerade deinen neuesten Post über [Thema] gesehen. Ich konnte mich total in [Spezifisches Detail] hineinversetzen. Habe einen Kommentar dagelassen – hoffe, du rockst das hier auf LinkedIn weiterhin!"',
                    },
                    {
                      title: "Nachricht 3 (Brücke)",
                      text: '"Apropos, wie läuft’s aktuell auf LinkedIn für dich? Zufrieden mit den Ergebnissen?"',
                    },
                    {
                      title: "Nachricht 4 (Bonding - Optional)",
                      text: '"P.S. Ich habe gesehen, dass du in [Ort] wohnst. Ich wollte schon immer mal [Wahrzeichen] besuchen!"',
                    },
                    {
                      title: 'Nachricht 5 (Der "menschliche Fehler")',
                      text: '[Korrigiere einen kleinen Tippfehler aus der vorherigen Nachricht, um zu beweisen, dass du kein Bot bist, z.B. "Ergebnissen meinte ich natürlich"]',
                    },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="bg-white/60 p-5 rounded-xl border border-slate-200/50 backdrop-blur-sm shadow-sm"
                    >
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        {msg.title}
                  </span>
                      <p className="text-slate-800 italic font-medium">
                        {msg.text}
                  </p>
                </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/40 p-4 rounded-xl border border-white/60">
                    <h5 className="font-bold mb-2">Regeln:</h5>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li className="text-[#00D4AA]">✔ Kein Pitching</li>
                      <li className="text-[#00D4AA]">
                        ✔ Einfach zu beantworten
                      </li>
                      <li className="text-[#00D4AA]">✔ Menschlicher Tonfall</li>
                      <li className="text-[#fe5454]">
                        ❌ Keine langen Textblöcke
                      </li>
                    </ul>
                </div>
                  <div className="bg-white/40 p-4 rounded-xl border border-white/60">
                    <h5 className="font-bold mb-2">
                      4.1 - Schnellen Rapport aufbauen
                    </h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                      <li>Reagiere auf das, was sie sagen.</li>
                      <li>Füge kurze Insights hinzu.</li>
                      <li>
                        Pass dich ihrem Tonfall an (Matching & Mirroring).
                      </li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">
                      Signal: Sie teilen Details/stellen Fragen.
                  </p>
                </div>
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-2xl font-bold mb-4">
                    4.2 - Discovery (Smarte Fragen)
                  </h4>
                  <p className="text-slate-700 mb-6">
                    Du verkaufst nicht. Du lernst (Diagnose vor Rezept). Passe
                    auch diese Fragen an deinen Kontext an.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                      <h5 className="font-bold mb-2 text-slate-900">
                        Kernfragen:
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700 italic">
                    <li>„Wie gewinnst du aktuell Kunden auf LinkedIn?“</li>
                        <li>„Was ist gerade die größte Hürde dabei?“</li>
                        <li>„Ist es eine Priorität, das jetzt zu lösen?“</li>
                  </ul>
                </div>
                <div>
                      <h5 className="font-bold mb-2 text-slate-900">
                        Signale:
                      </h5>
                      <div className="space-y-3">
                        <div className="flex gap-2 items-start">
                          <span className="text-xl">🟢</span>
                          <p className="text-sm text-slate-700">
                            <span className="font-bold">Grüne Flagge:</span> Sie
                            teilen echte Herausforderungen/Schmerzen.
                          </p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <span className="text-xl">🔴</span>
                          <p className="text-sm text-slate-700">
                            <span className="font-bold">Rote Flagge:</span>{" "}
                            „Alles gut“, „keine Prio“, „wir schauen nur“.
                          </p>
                        </div>
                  </div>
                </div>
              </div>
            </div>

                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-2xl font-bold mb-4">
                4.3 - Wert zeigen (Ohne zu pitchen)
                  </h4>
                  <div className="bg-[#9C88FF]/10 p-6 rounded-xl border border-[#9C88FF]/20">
                    <p className="font-bold mb-2 text-slate-900">Struktur:</p>
                    <ul className="list-disc pl-5 mb-4 text-sm text-slate-700">
                      <li>
                        Wiederhole ihre Herausforderung (&quot;Ich verstehe, X
                        ist das Problem...&quot;)
                      </li>
                      <li>
                        Teile einen schnellen Insight oder ein Mini-Framework
                        (&quot;Was wir oft sehen ist Y...&quot;)
                      </li>
                      <li>
                        Erwähne ein Ergebnis (&quot;Kunden, die Y machen, sehen
                        meist Z...&quot;)
                      </li>
                    </ul>
                <p className="font-bold mb-2 text-slate-900">Beispiel:</p>
                    <p className="italic text-slate-800">
                      „Basierend auf dem, was du gesagt hast, würde ich eine
                      Sache ändern: Starte mit Outreach → DANN schichte Content
                      oben drauf. Die meisten Kunden sehen so schnellere
                      Erfolge, weil sie früher echte Gespräche führen.“
                    </p>
                  </div>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#FFD54F]/20 text-[#FF8F00] font-bold text-sm tracking-wide mb-2">
              PHASE 5
            </div>
              <h3 className="text-3xl font-bold font-heading">
                Zum Call überleiten (Sanft & Natürlich)
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Soft Ask</h4>
                  <p className="italic text-slate-700 text-sm">
                  „Wir haben jetzt ein bisschen geschrieben – Lust, nächste
                    Woche kurz zu telefonieren, um das zu vertiefen?“
                </p>
              </div>
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Wert versprechen
                  </h4>
                  <p className="italic text-slate-700 text-sm">
                    „Ich führe dich gerne kurz durch das System. Selbst wenn wir
                    nicht zusammenarbeiten, nimmst du auf jeden Fall einen
                    klaren Fahrplan mit.“
                </p>
              </div>
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Link</h4>
                  <p className="italic text-slate-700 text-sm">
                  „Hier ist mein Kalender, falls das einfacher ist: [Link]“
                </p>
                </div>
              </div>
            </div>

            {/* Follow-Up Protocol */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
              <h2 className="text-3xl font-bold font-heading">
                Das Follow-Up Protokoll
              </h2>
              <p className="text-slate-600 font-medium">
                Die meisten Calls kommen erst durch das Nachfassen zustande (The
                money is in the follow-up).
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex-1 w-full">
                    <span className="text-xs uppercase font-bold text-slate-500 mb-2 block">
                      Follow-Up 1
                  </span>
                    <h4 className="font-bold text-lg mb-2">
                      Nach 3 Tagen ohne Antwort
                    </h4>
                    <p className="text-slate-700 text-sm">
                      Sende Mehrwert (z.B. ein Link zu einem relevanten Post
                      oder Case Study). Keine Frage: &quot;Dachte, das könnte
                      für dich spannend sein.&quot;
                    </p>
                  </div>
                  <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex-1 w-full">
                    <span className="text-xs uppercase font-bold text-slate-500 mb-2 block">
                      Follow-Up 2
                  </span>
                    <h4 className="font-bold text-lg mb-2">
                      Nach weiteren 4 Tagen
                    </h4>
                    <p className="text-slate-700 text-sm mb-4">
                      Die GIF-Strategie. Sende ein lustiges/sympathisches GIF
                      (z.B. jemand, der im Staub wartet oder freundlich winkt).
                      Das hat oft eine 80% Antwortrate, weil es den Druck
                      rausnimmt.
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60 flex flex-col items-center">
                  <p className="text-slate-500 text-sm mb-4 italic text-center">
                    Beispiel für ein Pattern Interrupt GIF
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-xs">
                    <Image
                      src="/images/giphy.gif"
                      alt="Waving GIF"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                </div>
              </div>
            </div>

          {/* What now */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 text-center space-y-8 bg-gradient-to-b from-white/80 to-white/60">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Was jetzt zu tun ist
            </h2>
              <p className="text-lg text-slate-600">
                Du hast jetzt zwei Möglichkeiten:
              </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-4 text-left">
              <div className="p-8 rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Option 1 - Mach es allein
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Du kennst jetzt die Theorie. Du wirst herausfinden, wie du
                  die Variablen testest, aber es wird Zeit kosten, deine
                  Baseline zu finden.
                </p>
              </div>

              <div className="p-8 rounded-2xl border-2 border-[#fe5454]/20 bg-white/60 backdrop-blur-sm shadow-xl relative overflow-hidden group hover:border-[#fe5454]/40 transition-all">
                <div className="absolute top-0 right-0 bg-[#fe5454] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Empfohlen
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Option 2 - Arbeite mit mir
                </h3>
                <p className="text-slate-600 mb-4">Du bekommst:</p>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span> Das volle,
                    getestete Protokoll
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span> Schnelle
                    Iterationen (Lernkurve abkürzen)
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span>{" "}
                    Vorhersehbaren Call-Flow durch Skripte
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-slate-800 mb-6">
                Wenn das Sinn ergibt:
              </p>
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#fe5454] text-white font-medium hover:bg-[#e04545] transition-all shadow-lg shadow-red-500/30 hover:scale-[1.02] text-lg"
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
