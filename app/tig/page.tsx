import Link from "next/link";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Inbox Guide - Planbar 5+ Termine pro Woche auf LinkedIn",
  description:
    "Die genaue Anleitung, wie wir mit LinkedIn planbar 5+ Termine pro Woche gewinnen. Das exakte 5-Phasen-System für kaltes Outreach.",
  openGraph: {
    title: "The Inbox Guide - Planbar 5+ Termine pro Woche auf LinkedIn",
    description:
      "Die genaue Anleitung, wie wir mit LinkedIn planbar 5+ Termine pro Woche gewinnen.",
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
    title: "The Inbox Guide - Planbar 5+ Termine pro Woche auf LinkedIn",
    description:
      "Die genaue Anleitung, wie wir mit LinkedIn planbar 5+ Termine pro Woche gewinnen.",
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
    amber: "bg-amber-50/80 border-amber-200/60 text-black",
    blue: "bg-blue-50/80 border-blue-200/60 text-black",
    slate: "bg-slate-50/80 border-slate-200/60 text-black",
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] font-heading">
              The Inbox <span className="text-gradient">Guide</span>
            </h1>

            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              Die genaue Anleitung, wie wir mit LinkedIn planbar 5+ Termine pro
              Woche gewinnen
            </p>
          </div>

          {/* Was du lernen wirst */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Was du lernen wirst
            </h2>
            <ul className="space-y-4 text-lg text-black">
              <li className="flex items-start">
                  <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Wie du mit kaltem Outreach planbar 5+ Termine pro Woche
                  generierst – ohne monatelang Content zu posten
                </span>
                </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Das exakte 5-Phasen-System, welches wir unseren Kunden
                  mitgeben.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Warum &quot;Content allein&quot; auf LinkedIn nicht mehr
                  funktioniert (und was stattdessen wirklich zählt)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Die Signal-basierten Methoden, um hochinteressierte
                  Interessenten zu finden, bevor deine Konkurrenz sie entdeckt
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Gesprächseinstiege, die sich menschlich anfühlen und keine
                  Spam-Vibes verbreiten
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#fe5454] font-bold mt-1">✓</span>
                <span>
                  Follow-up-Strategien mit nachweislich 80% Antwortrate
                </span>
              </li>
            </ul>
          </div>

          {/* Einleitung: Die Realität */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Einleitung: Die Realität
            </h2>
            <div className="prose prose-lg text-black max-w-none space-y-4">
              <p>
                Die meisten Unternehmer träumen davon: ein konstanter Strom an
                aufbereiteten, passenden Kunden. Die Realität sieht oft anders
                aus – ein &quot;Feast & Famine&quot;-Zyklus, bei dem sich Phasen
                mit zu vielen Aufträgen (Feast = Festmahl) und zu wenigen
                (Famine = Hungern) abwechseln.
              </p>
              <p>
                LinkedIn scheint die logische Antwort zu sein. Schließlich
                tummeln sich hier die Entscheider, die wir erreichen wollen.
                Doch die Frage bleibt: Wie machen wir sie auf uns aufmerksam?
              </p>
              <p>
                Bei den meisten läuft LinkedIn ohne Strategie und sporadisch ab:
                Einen Monat lang werden ein paar Posts veröffentlicht, ein paar
                Kontakte hinzugefügt, hier und da kommentiert – und dann landet
                die Plattform wieder in der Schublade, weil das erhoffte Ergebnis
                ausbleibt.
              </p>
              <p>
                Das Problem: LinkedIn ist voll mit falschen Versprechungen.
                &quot;Poste Content und die Kunden fliegen dir wie gebratene
                Enten mit wedelnder Kreditkarte in den Mund.&quot; Für die
                meisten Unternehmen ist das illusorisch. 6-9 Monate Content
                posten und hoffen?
              </p>
              <p>
                Lass mich eines klarstellen: Content-Marketing funktioniert. Sogar
                sehr effektiv. Doch LinkedIn will Geld verdienen und reduziert
                seit Jahren die organische Reichweite. Das macht es für jeden
                einzelnen immer schwerer, seine Ziele zu erreichen – zumindest mit
                Content allein.
              </p>
              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60 mt-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-black">
                  Was ist also die Lösung?
                </h3>
                <p className="mb-3">
                  LinkedIn als Gesamtsystem begreifen und alle verfügbaren Tools
                  miteinander verbinden:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#fe5454]">
                  <li>Outreach über Direktnachrichten starten</li>
                  <li>Parallel dazu eine Content-Strategie aufbauen</li>
                  <li>Später Ads einsetzen</li>
                </ul>
                <p className="mt-3 font-semibold">
                  Ich bin fest überzeugt: Das ist der einzige Weg, der wirklich
                  zuverlässig funktioniert.
                </p>
              </div>
            </div>
          </div>

          {/* Warum mir zuhören? */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Warum mir zuhören?
            </h2>
            <div className="prose prose-lg text-black max-w-none space-y-4">
              <p>
                Ich nutze LinkedIn jetzt seit 2 Jahren sehr intensiv. Anfang 2024
                habe ich alles irgendwie und nichts gemacht – mal Content
                gepostet, mal Outreach betrieben, aber ohne klares Konzept. Die
                Ergebnisse waren entsprechend unplanbar.
              </p>
              <p>
                Damals, als &quot;Automatisierungs-Agentur&quot;, war
                Kundengewinnung noch relativ einfach. KI war im Hype, der Trend
                der &quot;KI-Agenten&quot; machte es leicht, mit Leuten in
                Kontakt zu kommen.
              </p>
              <p>
                Doch mit der Zeit wurde es schwieriger. Kunden wurden skeptischer,
                Inbound-Leads versiegten, Empfehlungen führten seltener zum
                Abschluss. Uns wurde klar: Wir hatten ein Pipeline-Problem. Wir
                waren es gewohnt, dass warme Leads auf uns zukamen. Ende 2024 war
                diese Zeit erst einmal vorbei. Eine Lösung musste her.
              </p>
              <p>
                Also starteten wir mit LinkedIn Ads. Ich hielt das für eine gute
                Idee – schließlich hatte ich 2016/2017 erfolgreich Werbeanzeigen
                geschaltet, damals auf Facebook. Doch LinkedIn-Ads waren eine
                härtere Nuss. Über 10.000 EUR investiert, Kosten von 500-1.000
                EUR pro Termin. Das war nicht nachhaltig und bereitete uns große
                Sorgen. LinkedIn Ads funktionieren, keine Frage – aber man braucht
                entweder ein glasklares Marktverständnis oder tiefe Taschen.
              </p>
              <p>
                Also beschloss ich, etwas zu tun, was mir als Techie wirklich
                schwerfällt. Als diplomierter Molekularbiologe bin ich kein
                geborener Verkäufer. Verkaufen, vor allem am Telefon, bereitet mir
                physischen Schmerz…
              </p>
              <p>
                Doch ich zog es einfach durch. Wir hatten gerade ein Projekt für
                eine Executive Search Firma abgeschlossen: 15.000 LinkedIn-Profile
                analysiert, um passende Kandidaten zu finden. Als wir fertig
                waren, traf mich die Erkenntnis – das ist eine klare Nische mit
                einem brennenden Problem.
              </p>
              <div className="bg-[#fe5454]/10 p-6 rounded-xl border border-[#fe5454]/20 mt-6">
                <p className="font-bold text-lg mb-2">
                  Ich buchte den Sales Navigator, suchte nach Executive Search
                  CEOs und schrieb 40 Nachrichten. Das Ergebnis:
                </p>
                <p className="text-lg">
                  Aus 40 Direktnachrichten wurden 7 Termine. Nach 3 Wochen hatten
                  wir daraus 3 Kunden für knapp 10.000 EUR gewonnen – mit völlig
                  kalten Kontakten, die uns vorher nicht kannten.
                </p>
                <p className="font-semibold mt-3">
                  Das war der Moment, als uns klar wurde: Kalter Outreach ist die
                  beste Methode, um planbare Termine zu buchen.
                </p>
              </div>
            </div>
          </div>

          {/* Das neue Mindset */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              Das neue Mindset
            </h2>
            <div className="prose prose-lg text-black max-w-none space-y-4">
              <p>
                Vermutlich wurde kein Wort mehr missbraucht als
                &quot;Mindset&quot; – was heißt das überhaupt? Übersetzt könnte
                man es &quot;Mentale Modelle&quot; nennen. Doch da wir hier nicht
                in einer Philosophie-Vorlesung sind, bleibe ich beim bekannten
                Wort &quot;Mindset&quot;.
              </p>
              <p>
                Viele von uns finden Verkaufen unseriös. Die Bilder im Kopf: eine
                Drückerkolonne oder ein unsympathischer Mensch, der uns etwas
                &quot;aufschwatzen&quot; will. Mit dieser Vorstellung im Kopf wird
                sich Verkauf immer schäbig anfühlen – und die Ergebnisse bleiben
                aus.
              </p>
              <p className="font-semibold text-lg">
                Verkauf bedeutet nicht, andere zu überreden, sondern sie davon zu
                überzeugen, dass du ihnen helfen kannst. Es geht beim Verkauf um
                Dienen – dem Kunden dabei zu dienen, sein Problem zu lösen und
                endlich Ruhe zu haben.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Mindset-Regel 1: Dienen, statt verkaufen
              </h3>
                <p className="text-black mb-3">
                  Ja, du möchtest den Abschluss machen – das ist dem anderen aber
                  völlig egal. Jeden Menschen interessiert vor allem eins: sich
                  selbst. Ich widerspreche hier Kant, der sagte: &quot;Behandle
                  jeden so, wie du behandelt werden möchtest.&quot;
                </p>
                <p className="text-black font-semibold">
                  Stattdessen gilt: Behandle jeden so, wie er behandelt werden
                  möchte.
                </p>
                <p className="text-slate-700 mt-3">
                  Es geht also darum, dich als Diener zu sehen. Damit meine ich
                  &quot;Diener&quot; wie ein sehr guter Kellner, der dir das
                  Gefühl gibt, dass du WIRKLICH wichtig bist – anders als die
                  Bandansage am Telefon: &quot;Ihr Anruf ist uns wichtig.&quot;
              </p>
            </div>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Mindset-Regel 2: Mehrwert geben
              </h3>
                <p className="text-black mb-3">
                  Vielleicht kennst du Gary Vaynerchuk. Sein Motto: &quot;Geben,
                  geben, geben&quot; (Jab, Jab, Jab, Hook – sein Buch dazu). Im
                  Kern geht es darum, in einer neuen Beziehung erst einmal etwas zu
                  geben.
                </p>
                <p className="text-black mb-3">
                  Im Business-Kontext heißt das: einen Tipp oder eine Ressource.
                  Das können Branchen-Insights sein oder ein konkreter Vorschlag.
                  Die Leitfrage: &quot;Was kann ich tun, damit die andere Person
                  einen echten Mehrwert von mir bekommt?&quot;
                </p>
                <p className="text-black mb-3">
                  Zwei Dinge passieren, wenn du dem anderen hilfst:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#fe5454]">
                  <li>Du wirst als Experte wahrgenommen</li>
                  <li>Du nutzt die Kraft der Reziprozität</li>
                </ul>
                <p className="text-slate-700 mt-3">
                  Reziprozität ist ein psychologischer Mechanismus: Wenn uns
                  jemand einen Gefallen tut, haben wir den Wunsch, diesen zu
                  erwidern. Je mehr du gibst, desto größer die Chance, dass die
                  andere Person sich Zeit für dich nimmt – ihr gewinnt beide.
                </p>
              </div>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="text-xl font-bold mb-3 text-black">
                  Mindset-Regel 3: Verkaufen ist gut
                </h3>
                <p className="text-black">
                  Ohne Verkauf funktioniert unsere Wirtschaft nicht. Guter Verkauf
                  schafft Arbeitsplätze und macht das Leben der Menschen besser.
                  Deshalb gilt: Verkaufen ist gut.
                </p>
              </div>
            </div>
                </div>

          {/* Häufige Ausreden */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Häufige Ausreden
            </h2>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="font-bold text-lg mb-2 text-black">
                  &quot;Fühlt sich zu sehr nach Verkaufen an&quot;
                </h3>
                <p className="text-black">
                  Klar, wenn du Standard-Pitches an wildfremde Leute spamst, ist
                  das verkäuferisch – und nervig. Aber wenn du echt wie ein Mensch
                  auftrittst, zuhörst und auf das eingehst, was Leute wirklich
                  brauchen, fühlt es sich überhaupt nicht nach Verkauf an. Es
                  fühlt sich wie ein Gespräch zwischen zwei Menschen an, die sich
                  gegenseitig respektieren.
                  </p>
                </div>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  &quot;Das dauert zu lange&quot;
                </h3>
                <p className="text-slate-700">
                  Die Wahrheit: Chatten kostet Zeit, aber es ist der schnellste
                  Weg zu Ergebnissen. Richtig gemacht schlägt es Cold Calls,
                  E-Mail-Sequenzen oder unzählige Zoom-Calls. Wenn du diesem
                  Playbook folgst, weißt du genau, was du sagen musst, wann und
                  wie du Leute weiterbringst – ohne Zeit zu verschwenden.
                  </p>
                </div>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  &quot;Leads werden kalt&quot;
                </h3>
                <p className="text-slate-700">
                  Die meisten Leads werden nicht wirklich kalt. Sie warten nur
                  darauf, dass du nachhakst. Die Magie liegt in den Follow-ups –
                  der fünfte, sechste oder sogar siebte Kontakt. Schreib niemanden
                  ab, nur weil er nicht sofort geantwortet hat. Sei hartnäckig,
                  aber respektvoll, und du erweckst jede Menge &quot;toter&quot;
                  Leads wieder zum Leben.
                  </p>
                </div>

              <div className="bg-white/50 p-6 rounded-xl border border-slate-200/60">
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  &quot;Outsourcing funktioniert nicht&quot;
                </h3>
                <p className="text-slate-700">
                  Du kannst Chat-Verkäufe abgeben – aber nur, wenn dein Prozess
                  bombensicher ist. Halte dich von Anfang bis Ende an dieses
                  Playbook, und du hast die Struktur, die es zum Laufen bringt.
                  Leads haben nicht das Gefühl, mit einem Roboter zu reden – sie
                  fühlen sich, als würden sie mit dir sprechen. Und dann verkaufst
                  du den ganzen Tag. Jeden Tag.
                  </p>
              </div>
            </div>
          </div>

          {/* Wir denken wissenschaftlich */}
          <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl font-bold font-heading">
              Wir denken wissenschaftlich
            </h2>
            <div className="prose prose-lg text-black max-w-none space-y-4">
              <p>
                Outreach ist ein Zahlenspiel. Es gibt nicht &quot;die eine
                Nachricht&quot;, die magisch alle Türen öffnet. Welche Strategie
                funktioniert, hängt von der Zielgruppe ab, ihrer
                LinkedIn-Affinität, wie viele Nachrichten sie bereits bekommen und
                was du anbietest.
              </p>
              <p>
                Niemand kann dir mit Sicherheit sagen, was funktionieren wird –
                und was nicht. Deshalb gehen wir immer mit einem wissenschaftlichen
                Mindset heran. Entscheidend ist, dass für alle Aktivitäten erst
                einmal eine Baseline etabliert wird.
              </p>
              <p className="font-semibold">
                Das folgende System ist daher ein Vorschlag, wie man loslegen kann.
              </p>
            </div>
          </div>

          {/* Die 5 Phasen */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                Die 5 Phasen
              </h2>
              <Infobox variant="slate">
                Du magst einzelne Phasen nicht? Du möchtest den Beziehungsaufbau
                langsamer gestalten? Kein Problem. Wir nutzen dieses System bei
                fast keinem Kunden 1:1. Doch viele fangen damit an und adaptieren
                es mit der Zeit für sich, damit es für sie, ihre Persönlichkeit und
                ihr Produkt passt. Es gibt nicht den einen Weg!
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
              <p className="text-lg text-black">
                Ziel: Identifiziere aktive Leute in deiner Nische, mit denen man
                am einfachsten ins Gespräch kommt.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3">
                    Methode A - Wettbewerber-Kontakte
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-black">
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
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-black">
                    <li>Suche einen Influencer oder Wettbewerber.</li>
                    <li>Öffne deren beste Posts.</li>
                    <li>Checke Likes und Kommentare.</li>
                    <li>Identifiziere deinen ICP von dort.</li>
                  </ol>
                  <p className="text-xs text-black mt-3">
                    Tool: Breakcold (oder Google Sheet). Tracke: Akzeptanzrate,
                    Einladungen, Antworten.
                  </p>
                </div>
                </div>

                <div className="glass-card p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">
                  Methode C - High-Intent-Signale
                  </h4>
                <p className="text-black mb-4">
                  High-Intent-Signal bedeutet einfach gesagt: &quot;Wie kannst du
                  von außen sehen, dass der Kunde dein Produkt benötigt?&quot;.
                  Häufige Trigger sind:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-black border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 px-3 font-bold">
                          Signal-Bezeichnung
                        </th>
                        <th className="text-left py-2 px-3 font-bold">
                          Wie es hilft
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          1. Besuch der Preisseite (Pricing Page Visit)
                        </td>
                        <td className="py-3 px-3">
                          Zeigt, dass der Interessent die Informationsphase
                          verlassen hat und Budgetüberlegungen anstellt. Besucher,
                          die hier verweilen, vergleichen oft aktiv Kosten.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          2. Demo-Anfrage / Free Trial Start
                        </td>
                        <td className="py-3 px-3">
                          Das offensichtlichste Signal. Es signalisiert sofortige
                          Handlungsbereitschaft und den Wunsch, das Produkt im
                          eigenen Kontext zu testen.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          3. Nutzung von Vergleichsportalen (z.B. G2, Capterra)
                        </td>
                        <td className="py-3 px-3">
                          Verrät, dass der Kunde aktiv Wettbewerber vergleicht
                          (&quot;In-Market&quot;). Wenn jemand deine Kategorie oder
                          Konkurrenten auf Drittanbieter-Seiten recherchiert, ist
                          der Kaufzyklus weit fortgeschritten.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          4. Neue Finanzierungsrunde (Funding News)
                        </td>
                        <td className="py-3 px-3">
                          Signalisiert sofortige Liquidität und meistens aggressives
                          Wachstumsziel. Es bedeutet: &quot;Wir haben Geld und
                          müssen jetzt schnell skalieren.&quot;
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          5. Stellenanzeigen (Hiring Spree)
                        </td>
                        <td className="py-3 px-3">
                          Verrät interne Lücken und Strategien. Wer z.B. 5
                          Sales-Mitarbeiter sucht, braucht wahrscheinlich neue
                          CRM-Lizenzen oder Sales-Enablement-Tools.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          6. Führungswechsel (Management Change)
                        </td>
                        <td className="py-3 px-3">
                          Neue Entscheidungsträger (z.B. neuer CMO oder VP Sales)
                          wollen oft in den ersten 90 Tagen ihren eigenen Tech-Stack
                          implementieren und alte Prozesse aufbrechen.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          7. Änderungen im Tech-Stack (Technographics)
                        </td>
                        <td className="py-3 px-3">
                          Zeigt an, wenn ein Unternehmen eine Konkurrenz-Software
                          deinstalliert (Churn-Risiko beim Gegner = Chance für dich)
                          oder eine komplementäre Technologie neu installiert.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          8. Mehrere Besucher einer Firma (Account Surge)
                        </td>
                        <td className="py-3 px-3">
                          Wenn nicht nur einer, sondern 3-5 Personen derselben
                          Firma (Buying Center) deine Website besuchen, findet
                          intern eine ernsthafte Evaluation statt.
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3">
                          9. Konsum von &quot;Bottom-of-Funnel&quot; Content
                        </td>
                        <td className="py-3 px-3">
                          Das Lesen von Fallstudien (Case Studies), ROI-Rechnern
                          oder Implementierungs-Guides zeigt deutlicheres
                          Kaufinteresse als das bloße Lesen eines Blogartikels.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">
                          10. Fragen in Fach-Communities
                        </td>
                        <td className="py-3 px-3">
                          Wenn Mitarbeiter einer Ziel-Firma in Foren (Reddit,
                          LinkedIn Gruppen) technische Fragen zu einem Problem
                          stellen, das dein Produkt löst, ist der Schmerzpunkt
                          akut.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-blue-50/80 rounded-xl border border-blue-200/60">
                  <p className="text-sm text-blue-900 mb-2">
                    <strong>Wie du mit KI leichter potentielle Kunden finden kannst:</strong>
                  </p>
                  <a
                    href="https://www.loom.com/share/b0329aeef02245e99402bd3f2f71c0f1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline text-sm"
                  >
                    👉 Loom Video ansehen
                  </a>
                </div>
              <div className="bg-slate-50/50 p-6 rounded-xl">
                <h4 className="font-bold mb-2">Tools, die ich verwende:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-black">
                    <li>RapidAPI für Profile</li>
                    <li>Serper für die Google suche</li>
                    <li>ScrapeLi.io für das Scrapen von LinkedIn Company Page Followern</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">
                  Methode D - Der Sales Navigator
                </h4>
                <p className="text-black mb-4">
                  Der Sales Navigator ist ein sehr unterschätztes Werkzeug. Oft
                  wird er gebucht und nur ein Bruchteil der Funktionen tatsächlich
                  genutzt. Hier ein paar einfache Tipps:
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold mb-2 text-black">
                      1. ICP-Klarheit & -Zielgruppenansprache
                    </h5>
                    <p className="text-black text-sm mb-2">
                      Je nach Größe des Unternehmens gehst du nicht direkt auf den
                      CEO los. Du schaust, von wem du interessante Informationen
                      erhalten kannst.
                    </p>
                    <p className="text-black text-sm mb-2">
                      Viele meiner Kunden gehen auf Unternehmensgröße bis 200
                      Mitarbeiter. Ab 50 Mitarbeitern empfehle ich, nicht mehr den
                      Geschäftsführer anzuschreiben, sondern den Bereichsleiter. Je
                      größer das Unternehmen wird, desto ausgefeilter wird die
                      Strategie. Ich gehe in dieser Guide primär von Unternehmen
                      bis 50 Leuten aus.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-black mt-2">
                      <li>
                        <strong>Einkäufer auf Führungsebene</strong> (z. B. CEO,
                        CFO): Zur endgültigen Genehmigung und Budgetverantwortung.
                      </li>
                      <li>
                        <strong>Wichtige Einflussfaktoren</strong> (z. B.
                        Vertriebs-/IT-Leiter): Zur technischen Abstimmung und
                        internen Interessenvertretung.
                      </li>
                      <li>
                        <strong>Zugangspunkte</strong> (z. B. Vertriebsleiter,
                        Vertriebsmitarbeiter): Für einen praxisnahen Kontext und
                        echtes Feedback.
                  </li>
                </ul>
                    <p className="text-black text-sm mt-2 italic">
                      &quot;Groundswell Prospecting&quot;: Nimm zunächst Kontakt
                      mit den Endnutzern auf, um Erkenntnisse zu gewinnen
                      (&quot;durch Besuche in den Gängen&quot;), bevor du dich an
                      die Führungsebene wendet. Dies kann die Vertragsabwicklung
                      beschleunigen.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2 text-black">
                      2. Filterbeherrschung & Boolesche Suche
                    </h5>
                    <p className="text-black text-sm mb-2">
                      Um keine Zeit mehr mit Scrollen zu verschwenden, empfiehlt
                      das Set bestimmte Maßnahmen. Boolesche Suchzeichenfolgen für
                      jede Stufe (z.B.(&quot;CEO&quot; ODER &quot;Chief Executive
                      Officer&quot;...)) und konzentriert sich auf fünf Filter
                      mit hoher Suchintention:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-black">
                      <li>
                        <strong>Haben Dein Profil angesehen:</strong> Leads, die
                        Interesse gezeigt haben.
                      </li>
                      <li>
                        <strong>Folgen deinem Unternehmen:</strong> Interessenten
                        sind bereit für ein Gespräch.
                      </li>
                      <li>
                        <strong>Veröffentlicht in den letzten 30 Tagen:</strong>{" "}
                        Identifiziert aktive Nutzer, die mit 3-facher
                        Wahrscheinlichkeit antworten.
                      </li>
                      <li>
                        <strong>Jahre im Unternehmen (4-10 Monate):</strong> Der
                        &quot;ideale Punkt&quot;, an dem neue Mitarbeiter
                        ausreichend eingelebt sind, um den Kontext zu verstehen,
                        aber gleichzeitig neu genug, um etwas bewegen zu wollen.
                      </li>
                      <li>
                        <strong>Berufsbezeichnungen:</strong> Für lasergenaues
                        Zielen.
                      </li>
                    </ul>
                  </div>
                </div>
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
                  Regel: Keine Notiz dazu.
                </p>
                <p className="text-amber-800 text-sm">
                  Notizen wirken aufdringlich (&quot;pushy&quot;).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg">
                    Dein Profil sollte klar aussagen:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-black font-medium">
                    <li>Wen du unterstützt</li>
                    <li>Welches Problem du löst</li>
                    <li>Welches Ergebnis du lieferst</li>
                  </ul>
                </div>
                <div className="bg-white/40 p-6 rounded-xl text-center border border-white/60">
                  <span className="block text-sm text-black uppercase tracking-wider mb-1">
                    Ziel
                  </span>
                  <span className="block text-4xl font-bold text-[#9C88FF]">
                    20
                  </span>
                  <span className="text-black font-medium">
                    Einladungen/Tag
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] font-bold text-sm tracking-wide mb-2">
                PHASE 3
              </div>
              <h3 className="text-3xl font-bold font-heading">
                Aufwärmen (Vertrauens-Maschine)
              </h3>
              <p className="text-black text-lg">
                Bevor du eine DM schreibst, stell sicher, dass sie deinen Namen
                gesehen haben. Nutze das 7-Tage-Fenster zwischen angenommener
                Anfrage & erster DM.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-[#00D4AA]/10 p-6 rounded-xl border border-[#00D4AA]/20">
                  <h4 className="font-bold text-[#008f72] mb-3 text-lg">Do:</h4>
                  <ul className="space-y-2 text-black">
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
                  <ul className="space-y-2 text-black">
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span>{" "}
                      &quot;Toller Post!&quot;
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span> Alles
                      kommentieren
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#fe5454] font-bold">✕</span> Kalt
                      anschreiben ohne Aufwärmen (außer sie haben dein Profil
                      besucht)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-medium text-center text-black italic">
                Ziel: Antwortrate durch Aufbau von Vertrautheit erhöhen.
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
              <p className="text-black">
                Wenn sie annehmen, warte 7 Tage.
              </p>
              <p className="text-black">
                <strong>Warum?</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black">
                <li>Dein Content wärmt sie eine Woche lang auf.</li>
                <li>
                  Selbst mit 2–3 wöchentlichen Posts erinnern sie sich eher an
                  dich.
                </li>
              </ul>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold">
                  Gesprächseinstiege (Opener)
                </h4>

                <Infobox variant="amber">
                  Wichtig, das ist ein Vorschlag. Bitte kopiere ihn nicht 1:1,
                  sondern passe ihn für dich, deine Tonalität und deine
                  Zielgruppe an!
                </Infobox>

                <p className="text-black">
                  Der Opener sollte stark personalisiert sein, damit dein
                  Gegenüber den Eindruck hast, dass du dich mit ihm
                  auseinandergesetzt hast. Am besten verwendest du dafür einen
                  Aufhänger, der ultra-spezifisch ist. Was das sein kann? Die
                  weiter oben genannten Signale.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Nachricht 1",
                      text: "Hey [Name], freut mich, dich kennenzulernen!",
                    },
                    {
                      title: "Nachricht 2",
                      text: "Ich habe gerade deinen neuesten Post über [Thema, über das sie gepostet haben] gesehen. Ich konnte mich total in [Spezifisches Detail/Gemeinsamkeit] hineinversetzen, also Glückwunsch dazu! Ich habe einen Kommentar dagelassen, um den Post zu unterstützen.",
                    },
                    {
                      title: "Nachricht 3",
                      text: "Apropos, wie läuft's auf LinkedIn? Zufrieden mit den Ergebnissen?",
                    },
                    {
                      title: "Nachricht 4",
                      text: "P.S. Ich habe gesehen, dass du in [Ort] wohnst. Ich wollte schon immer mal [Wahrzeichen/Stadt] besuchen! Mein [Freund/Verwandter/Bekannter] wohnt tatsächlich in der Nähe. [Frage zu ihrem Wohnort/Hintergrund]?",
                    },
                    {
                      title: 'Nachricht 5 (Der "menschliche Fehler" - sofort danach gesendet)',
                      text: "[korrigiere einen kleinen Tippfehler aus der vorherigen Nachricht, um zu beweisen, dass du kein Bot bist]",
                    },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="bg-white/60 p-5 rounded-xl border border-slate-200/50 backdrop-blur-sm shadow-sm"
                    >
                      <span className="text-xs font-bold text-black uppercase tracking-wider block mb-2">
                        {msg.title}
                      </span>
                      <p className="text-black italic font-medium">
                        {msg.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/40 p-4 rounded-xl border border-white/60">
                    <h5 className="font-bold mb-2">Regeln:</h5>
                    <ul className="space-y-1 text-sm text-black">
                      <li className="text-[#00D4AA]">✔ Kein Pitching</li>
                      <li className="text-[#00D4AA]">
                        ✔ Einfach zu beantworten
                      </li>
                      <li className="text-[#00D4AA]">✔ Menschlicher Tonfall</li>
                      <li className="text-[#fe5454]">
                        ❌ Lange Absätze
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl border border-white/60">
                    <h5 className="font-bold mb-2">
                      4.1 - Schnellen Rapport aufbauen (1–3 Nachrichten)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-black">
                      <li>Reagiere auf das, was sie sagen</li>
                      <li>Füge kurze Insights hinzu</li>
                      <li>Pass dich ihrem Tonfall an</li>
                      <li>Halt es locker</li>
                    </ul>
                    <p className="text-xs text-black mt-2">
                      Signal für nächste Stufe: Sie teilen Details oder stellen
                      Fragen.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-2xl font-bold mb-4">
                    4.2 - Discovery (Smarte Fragen)
                  </h4>
                  <p className="text-black mb-2">
                    Du verkaufst nicht.
                  </p>
                  <p className="text-black mb-6">Du lernst.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-2 text-black">
                        Kernfragen:
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>&quot;Wie gewinnst du aktuell Kunden auf LinkedIn?&quot;</li>
                        <li>&quot;Was ist gerade die größte Hürde?&quot;</li>
                        <li>&quot;Ist es eine Priorität, das zu lösen?&quot;</li>
                        <li>
                          &quot;Wie sieht Erfolg in den nächsten 90 Tagen aus?&quot;
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2 text-black">
                        Drei Arten von Fragen:
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-black text-sm">
                        <li>
                          <strong>Affektiv:</strong> Bauen emotionale Verbindung
                          auf.
                        </li>
                        <li>
                          <strong>Prozedural:</strong> Enthüllen Tools +
                          Prozesse.
                        </li>
                        <li>
                          <strong>Qualitativ:</strong> Klären Ziele und Metriken.
                        </li>
                      </ul>
                      <div className="mt-4 space-y-2">
                        <div className="flex gap-2 items-start">
                          <span className="text-xl">🟢</span>
                          <p className="text-sm text-black">
                            <span className="font-bold">Grüne Flagge:</span> Sie
                            teilen Herausforderungen.
                          </p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <span className="text-xl">🔴</span>
                          <p className="text-sm text-black">
                            <span className="font-bold">Rote Flagge:</span>{" "}
                            &quot;Alles gut&quot;, &quot;keine Prio&quot;,
                            &quot;testen nur&quot;.
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
                  <p className="text-black mb-4">Nutze diese Struktur:</p>
                  <div className="bg-[#9C88FF]/10 p-6 rounded-xl border border-[#9C88FF]/20">
                    <ul className="list-disc pl-5 mb-4 text-sm text-black space-y-2">
                      <li>Wiederhole ihre Herausforderung</li>
                      <li>Teile einen schnellen Insight oder ein Mini-Framework</li>
                      <li>Erwähne ein Ergebnis (kurz)</li>
                      <li>Nicht pitchen</li>
                    </ul>
                    <p className="font-bold mb-2 text-black">Beispiel:</p>
                    <p className="italic text-black">
                      &quot;Basierend auf dem, was du gesagt hast, würde ich eine
                      Sache ändern: Starte mit Outreach → DANN schichte Content
                      oben drauf.
                      <br />
                      <br />
                      Die meisten Kunden sehen schnellere Erfolge, weil sie früher
                      echte Gespräche führen.&quot;
                    </p>
                    <p className="text-sm text-black mt-3 italic">
                      Sie denken jetzt: &quot;Diese Person versteht es.&quot;
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
                Zum Call überleiten (Sanft, Natürlich)
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-black mb-2">Soft Ask (Sanfte Frage)</h4>
                  <p className="italic text-black text-sm">
                    &quot;Wir haben jetzt ein bisschen geschrieben – Lust, nächste
                    Woche kurz zu telefonieren?&quot;
                  </p>
                </div>
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-black mb-2">
                    Wert versprechen
                  </h4>
                  <p className="italic text-black text-sm">
                    &quot;Führe dich gerne durch das System. Du nimmst auf jeden
                    Fall etwas mit.&quot;
                  </p>
                </div>
                <div className="bg-white/40 p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-bold text-black mb-2">Link</h4>
                  <p className="italic text-black text-sm">
                    &quot;Hier ist mein Kalender, falls das einfacher ist: [Link]&quot;
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold mb-2">Nach dem Call:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black">
                  <li>Bedanke dich</li>
                  <li>Fasse zusammen</li>
                  <li>Teile die nächsten Schritte</li>
                  <li>Mach das Vorankommen einfach</li>
                </ul>
                <p className="text-black mt-3">
                  <strong>Falls nicht bereit → Nurture (Pflegen):</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black">
                  <li>Interagiere mit ihren Posts</li>
                  <li>Sende hilfreiche Dinge</li>
                  <li>Monatliche Check-ins</li>
                </ul>
                </div>
              </div>
            </div>

          {/* Follow-Up Protokoll */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 space-y-8">
              <h2 className="text-3xl font-bold font-heading">
              Follow-Up Protokoll
              </h2>
            <p className="text-black font-medium">
              Die meisten Calls kommen durch Follow-ups zustande.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex-1 w-full">
                  <span className="text-xs uppercase font-bold text-black mb-2 block">
                    Follow-Up 1 (3 Tage)
                    </span>
                  <h4 className="font-bold text-lg mb-2">Sende Mehrwert (Value).</h4>
                  </div>
                  <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex-1 w-full">
                  <span className="text-xs uppercase font-bold text-black mb-2 block">
                    Follow-Up 2 (4 Tage)
                    </span>
                    <h4 className="font-bold text-lg mb-2">
                    Diese GIF hat eine 80% Antwortrate!
                    </h4>
                  <p className="text-black text-sm mb-2">
                    Wähle eine GIF aus, die dir und deinem Charakter entspricht. Du
                    bist jemand, der niemals eine GIF senden würde? Sieh es so: Wenn
                    dir jemand nicht antwortet, dann hast du nichts zu verlieren.
                  </p>
                  <p className="text-black text-sm italic">
                    Ganz nebenbei, ich durfte vor Kurzem herausfinden, dass Alex
                    Hormozi die gleiche Strategie anwendet:
                  </p>
                  </div>
                </div>
              </div>
            </div>

          {/* Was jetzt zu tun ist */}
            <div className="glass-panel rounded-[2rem] p-8 sm:p-12 text-center space-y-8 bg-gradient-to-b from-white/80 to-white/60">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                Was jetzt zu tun ist
              </h2>
              <p className="text-lg text-black">
              An diesem Punkt verstehst du:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-black">
              <li className="flex items-start">
                <span className="mr-2 text-[#fe5454]">✓</span>
                <span>Vernetzung-Anfragen senden</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#fe5454]">✓</span>
                <span>Gespräche starten</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#fe5454]">✓</span>
                <span>Chats am Laufen halten</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#fe5454]">✓</span>
                <span>Antworten in Calls verwandeln</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#fe5454]">✓</span>
                <span>Follow-ups machen</span>
              </li>
            </ul>

            <p className="text-lg text-black mt-6">
                Du hast jetzt zwei Möglichkeiten:
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-4 text-left">
                <div className="p-8 rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-black">
                    Option 1 - Mach es allein
                  </h3>
                <p className="text-black leading-relaxed">
                  Klar, no hard feelings, es wird aber mit Sicherheit länger dauern
                  ;)
                  </p>
                </div>

                <div className="p-8 rounded-2xl border-2 border-[#fe5454]/20 bg-white/60 backdrop-blur-sm shadow-xl relative overflow-hidden group hover:border-[#fe5454]/40 transition-all">
                  <div className="absolute top-0 right-0 bg-[#fe5454] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Empfohlen
                  </div>
                <h3 className="text-xl font-bold mb-3 text-black">
                    Option 2 - Arbeite mit mir
                  </h3>
                <p className="text-black mb-4">Du bekommst:</p>
                <ul className="space-y-2 text-sm text-black mb-6">
                    <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span> Das volle
                    Protokoll
                    </li>
                    <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span> Iterationen
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#fe5454] mr-2">✓</span> Struktur
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#fe5454] mr-2">✓</span>{" "}
                    Vorhersehbaren Call-Flow
                    </li>
                  </ul>
                </div>
              </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-black mb-6">
                Wenn das mehr Sinn ergibt:
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
