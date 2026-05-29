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
    <div className="page-shell overflow-x-hidden">
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <Link href="https://cal.com/dennis-debus/lets-talk" className="btn-primary">
          Strategie-Gespräch
        </Link>
      </div>

      <main>
        {/* Hero */}
        <section className="section-pad pt-36 pb-24 sm:pt-44 sm:pb-32 border-b border-rule">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-0">
              <div className="hatched-bar mr-6 sm:mr-10 shrink-0" aria-hidden="true" />
              <div className="flex-1 space-y-10 max-w-4xl">
                <p className="section-label">Exklusiv für Agenturen & Berater</p>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink font-heading leading-[1.02]">
                  Souveräne LinkedIn-Akquise.
                  <br />
                  <span className="highlight-block mt-2">
                    Planbare Termine statt Zufall.
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate max-w-2xl leading-relaxed">
                  Das 12-Wochen Mentoring-Programm inkl. KI-Wingman
                  &quot;Cyrano&quot;. Wir liefern die Strategie, du führst die
                  Gespräche. Nie wieder sprachlos im Chat.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    href="https://cal.com/dennis-debus/lets-talk"
                    className="btn-accent"
                  >
                    Potenzial-Analyse buchen
                  </Link>
                  <p className="meta-line">
                    Kein Verkaufs-Pitch · 15 Min zum individuellen Fahrplan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-5xl">
              <div className="border border-rule bg-white p-1">
                <ChatAnimation />
              </div>
            </div>

            <p className="meta-line mt-8 text-right watermark">TIP · DENNIS DEBUS</p>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-14 border-b border-rule bg-white">
          <div className="max-w-6xl mx-auto section-pad">
            <p className="section-label mb-8">
              Nahtlose Integration in deinen Workflow
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-ink">
              {["LinkedIn", "Sales Navigator", "OpenAI", "HubSpot"].map(
                (name) => (
                  <span
                    key={name}
                    className="font-heading font-bold text-xl tracking-tight"
                  >
                    {name}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-24 section-pad border-b border-rule">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-black text-ink font-heading leading-tight">
                Kein Rätselraten mehr.
                <br />
                <span className="stat-inline">Sondern ein System.</span>
              </h2>

              <div className="editorial-card p-8 space-y-6 bg-ink text-paper">
                <p className="section-label text-rule">Beta-Phase</p>
                <h3 className="text-2xl font-bold font-heading leading-tight">
                  Wir bauen die Zukunft deiner Akquise.
                </h3>
                <p className="text-lg text-rule leading-relaxed">
                  Cyrano ist die nächste Evolutionsstufe unserer Strategie zur
                  Kundengewinnung. Das System ist brandneu — deshalb suchen wir
                  aktuell die ersten 10 Partner, die mit uns diese neue Ära des
                  B2B-Vertriebs prägen wollen.
                </p>
                <p className="meta-line text-rule border-t border-white/10 pt-4">
                  Werde Beta-Partner · First-Mover Vorteil
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-rule overflow-hidden bg-white">
                <img
                  src="/images/kalendereinträge.png"
                  alt="Voller Terminkalender durch Cyrano Kundengewinnung"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="meta-line">Beta-Phase läuft</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                msg: "Spannender Ansatz. Hättest du am Donnerstag Zeit für einen kurzen Austausch?",
                time: "14:22",
              },
              {
                msg: "Endlich mal keine 08/15 Nachricht. Das Thema KI-Outreach beschäftigt uns gerade sehr.",
                time: "Gestern",
              },
              {
                msg: "Können wir dazu mal telefonieren? Deine Nachricht hat genau einen Nerv getroffen.",
                time: "11:05",
              },
            ].map((chat, i) => (
              <div key={i} className="editorial-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="section-label">Interessent</span>
                  <span className="font-mono text-[10px] text-slate">
                    {chat.time}
                  </span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  &quot;{chat.msg}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="py-24 section-pad border-b border-rule bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16 space-y-6">
              <p className="section-label">Die Realität</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink font-heading leading-tight">
                Das Problem ist nicht fehlende Disziplin.
                <br />
                <span className="text-slate">
                  Das Problem ist das &quot;Blank Page Syndrome&quot;.
                </span>
              </h2>
              <p className="text-xl text-slate leading-relaxed">
                Du starrst auf den blinkenden Cursor und weißt nicht, was du
                schreiben sollst, ohne wie ein schmieriger Verkäufer zu klingen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Kein Roboter-Gefühl",
                  text: "Die Software passt sich zu 100% deinem Schreibstil und Verkaufsprozess an. Keine generischen Phrasen, sondern Nachrichten, die nach dir klingen.",
                },
                {
                  title: "Passt in jeden Ablauf",
                  text: "Ob Erstgespräch, Info-Material oder Direktverkauf: Cyrano steuert deine Interessenten exakt dorthin, wo dein Prozess am stärksten ist.",
                },
                {
                  title: "Kaufbereite Kontakte",
                  text: "Wir helfen dir mit den richtigen Filtern und der LinkedIn-Suche genau die Entscheider zu finden, die jetzt Bedarf haben.",
                },
                {
                  title: "Automatisches Nachfassen",
                  text: "Der Erfolg liegt im Dranbleiben. Wer manuell arbeitet, vergisst 50% der Chancen. Cyrano lässt niemanden durch das Netz fallen.",
                },
              ].map((item, idx) => (
                <div key={idx} className="editorial-card p-8 space-y-4">
                  <span className="font-mono text-xs text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-ink font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cyrano origin */}
        <section className="py-16 section-pad border-b border-rule">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-0 editorial-card p-8 md:p-10">
              <div className="hatched-bar mr-6 shrink-0" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="text-3xl font-black font-heading text-ink">
                  Warum eigentlich{" "}
                  <span className="stat-inline">&quot;Cyrano&quot;</span>?
                </h3>
                <div className="prose text-slate text-lg leading-relaxed">
                  <p>
                    Inspiriert von <strong>Cyrano de Bergerac</strong>, dem
                    meisterhaften Dichter und Fechter, der im Schatten stand, um
                    seinem Freund die perfekten Worte für seine Briefe
                    einzuflüstern.
                  </p>
                  <p className="text-base text-slate">
                    Genau das ist unsere Software für dich: Dein unsichtbarer
                    Souffleur, der sicherstellt, dass jede Nachricht ein
                    Volltreffer ist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="prozess" className="py-24 section-pad border-b border-rule bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16 space-y-4">
              <p className="section-label text-accent">Der Fahrplan</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink font-heading">
                3 Phasen zum vollen Terminkalender
              </h2>
            </div>

            <div className="space-y-6">
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
                  className="editorial-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="font-heading text-6xl font-black text-rule shrink-0">
                    {item.step}
                  </div>
                  <div className="space-y-3">
                    <span className="section-label">{item.duration}</span>
                    <h3 className="text-2xl font-bold text-ink font-heading">
                      {item.title}
                    </h3>
                    <p className="text-slate text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software showcase */}
        <section className="py-24 section-pad border-b border-rule">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16 space-y-6">
              <p className="section-label">Product Deep-Dive</p>
              <h2 className="text-4xl sm:text-5xl font-black text-ink font-heading">
                Dein neuer <span className="stat-inline">Sidekick.</span>
              </h2>
              <p className="text-xl text-slate leading-relaxed">
                Cyrano analysiert das Profil deines Wunschkunden und liefert dir
                in Sekunden 3 maßgeschneiderte Gesprächsaufhänger — eloquent,
                psychologisch fundiert und unwiderstehlich.
              </p>
            </div>

            <div className="max-w-2xl border border-rule bg-white p-2">
              <img
                src="/images/screenshot ders software.png"
                alt="Screenshot der Cyrano Software - DM Sidekick"
                className="w-full h-auto border border-rule"
              />
            </div>
            <p className="meta-line mt-4">
              Live Analyse · Basierend auf LinkedIn-Daten und deinem Schreibstil
            </p>
          </div>
        </section>

        {/* Offer */}
        <section id="stack" className="py-24 section-pad bg-ink text-paper">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="section-label text-rule">Beta Angebot</p>
                <h2 className="text-4xl sm:text-6xl font-black font-heading leading-tight">
                  Kein Kurs.
                  <br />
                  <span className="highlight-block">Ein Upgrade.</span>
                </h2>
                <p className="text-xl text-rule leading-relaxed">
                  Wir liefern dir nicht nur die Bauanleitung, wir liefern das
                  Werkzeug und helfen beim Bauen.
                </p>
              </div>

              <div className="space-y-4">
                <p className="section-label text-rule">Im Paket enthalten</p>
                <ul className="space-y-4">
                  {[
                    { item: "12 Wochen Mentoring & Implementation", value: "3.500 €" },
                    { item: "1h Kickoff für technisches Setup & erste To-dos", value: "500 €" },
                    { item: "12 Wochen 'Cyrano' Software-Lizenz (Pro Plan)", value: "450 €" },
                    { item: "The Inbox Playbook Video Library", value: "997 €" },
                    { item: "Wöchentliche Live Q&A Calls & WhatsApp Support", value: "997 €" },
                    { item: "3x 30 Min. persönliche Beratung", value: "600 €" },
                  ].map((li, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-start gap-4 border-b border-white/10 pb-3 text-rule"
                    >
                      <span>{li.item}</span>
                      <span className="font-mono text-sm shrink-0">{li.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-2">
                  <span className="section-label text-rule">Gesamtwert</span>
                  <span className="text-xl font-bold line-through text-slate">
                    6.844 €
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-white/15 p-8 sm:p-12 space-y-8">
              <p className="section-label text-accent">Beta-Investment</p>
              <div className="space-y-2">
                <p className="text-rule text-sm uppercase tracking-widest">
                  Heute nur ein Investment von
                </p>
                <p className="text-7xl sm:text-8xl font-black font-heading tracking-tighter">
                  1.900€
                </p>
                <p className="meta-line text-rule">netto, zzgl. MwSt</p>
              </div>

              <Link
                href="https://cal.com/dennis-debus/lets-talk"
                className="btn-accent w-full text-center"
              >
                Potenzial-Analyse buchen
              </Link>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <p className="text-sm text-rule leading-relaxed">
                  <strong className="text-paper">Bedingung:</strong> Der Preis
                  gilt nur gegen ein Video-Testimonial nach Erfolg.
                </p>
                <div className="border border-accent/40 p-6 space-y-2">
                  <p className="section-label text-accent">Erfolgs-Garantie</p>
                  <p className="text-sm text-rule leading-relaxed">
                    Wenn du in den ersten 12 Wochen keine qualifizierten Termine
                    im Kalender hast, arbeiten wir kostenlos weiter, bis der
                    Prozess sitzt. Das gesamte Risiko liegt bei uns.
                  </p>
                </div>
                <p className="meta-line text-accent">
                  Nur noch 3 Plätze für Februar verfügbar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 section-pad border-b border-rule bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-ink font-heading mb-12">
              Häufige Fragen
            </h2>
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
                <div key={i} className="editorial-card p-8 space-y-4">
                  <h3 className="text-xl font-bold text-ink font-heading">
                    {faq.q}
                  </h3>
                  <p className="text-slate leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 section-pad border-b border-rule">
          <div className="max-w-4xl mx-auto flex gap-0">
            <div className="hatched-bar mr-6 sm:mr-10 shrink-0" aria-hidden="true" />
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-6xl font-black text-ink font-heading leading-tight uppercase">
                Bereit für den
                <br />
                <span className="highlight-block">System-Check?</span>
              </h2>
              <p className="text-xl text-slate max-w-2xl leading-relaxed">
                In 20 Minuten erfährst du, wie unser Vertriebssystem dir hilft,
                dein LinkedIn-Profil in eine Terminkalender-Maschine zu
                verwandeln. 100% Strategie, 0% Verkaufsdruck.
              </p>
              <div className="space-y-4">
                <Link
                  href="https://cal.com/dennis-debus/lets-talk"
                  className="btn-primary text-base px-10 py-5"
                >
                  Strategie-Gespräch vereinbaren
                </Link>
                <p className="meta-line text-accent">
                  Nur noch 3 Plätze für Januar verfügbar
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
