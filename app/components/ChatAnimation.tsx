"use client";

import { useEffect, useState } from "react";

export function ChatAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setStep(1), 1000), // Incoming message
      setTimeout(() => setStep(2), 2500), // Side helper opens
      setTimeout(() => setStep(3), 4000), // Suggestion appears
      setTimeout(() => setStep(4), 5500), // Suggestion accepted
      setTimeout(() => setStep(5), 6500), // Message sent
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 font-sans text-left transition-all duration-700">
      {/* Browser Chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
        </div>
        <div className="mx-auto bg-white border border-slate-200 rounded px-3 py-0.5 text-[10px] text-slate-400 flex items-center gap-2">
          <span className="opacity-50">🔒</span> linkedin.com/messaging/thread/...
        </div>
      </div>

      <div className="absolute inset-0 top-8 flex bg-slate-50/50">
        {/* Sidebar Mockup - Hidden on mobile to save space */}
        <div className="w-16 md:w-64 border-r border-slate-200 bg-white hidden lg:block">
          <div className="p-4 space-y-4">
            <div className="h-8 w-8 rounded bg-[#0077B5] mb-8 flex items-center justify-center text-white text-xs font-bold">in</div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`flex items-center gap-3 p-2 rounded ${i === 1 ? 'bg-slate-50' : ''}`}>
                  <div className="h-8 w-8 shrink-0 bg-slate-100 rounded-full"></div>
                  <div className="flex-1 space-y-1 hidden md:block">
                    <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative bg-white">
          {/* Chat Header */}
          <div className="h-14 border-b border-slate-100 flex items-center px-4 sm:px-6 justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300"></div>
              <div>
                <div className="h-3 w-24 sm:w-32 bg-slate-200 rounded mb-1"></div>
                <div className="h-2 w-16 sm:w-24 bg-slate-100 rounded"></div>
              </div>
            </div>
            <div className="flex gap-4 opacity-30 hidden sm:flex">
              <div className="w-4 h-4 rounded-full bg-slate-400"></div>
              <div className="w-4 h-4 rounded-full bg-slate-400"></div>
              <div className="w-4 h-4 rounded-full bg-slate-400"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 sm:p-6 space-y-6 bg-slate-50/30 overflow-hidden">
            {/* Incoming Message */}
            <div
              className={`flex gap-3 sm:gap-4 transition-all duration-700 transform ${
                step >= 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
              <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] sm:max-w-md">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                  Hey Dennis, danke für die Vernetzung! Klingt spannend was ihr macht. Wie genau sieht der Prozess aus?
                </p>
              </div>
            </div>

            {/* Outgoing Message (Final State) */}
            <div
              className={`flex gap-3 sm:gap-4 flex-row-reverse transition-all duration-700 transform ${
                step >= 5
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#FE5454]/10 shrink-0 flex items-center justify-center text-[10px] font-bold text-[#FE5454]">
                DU
              </div>
              <div className="bg-slate-900 text-white p-3 sm:p-4 rounded-2xl rounded-tr-none shadow-md max-w-[85%] sm:max-w-md">
                <p className="text-[13px] sm:text-sm leading-relaxed">
                  Gerne! Wir analysieren erst deinen aktuellen Prozess und setzen dann unser &quot;Cyrano&quot;-System auf. Hast du nächste Woche 15 Min für einen kurzen Check?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="h-20 border-t border-slate-100 p-4 bg-white relative z-10">
            <div className="w-full h-full rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center text-slate-400 text-[13px] sm:text-sm">
              {step >= 4 && step < 5 ? (
                <span className="text-slate-800 animate-pulse">
                  Gerne! Wir analysieren erst deinen aktuellen Prozess...|
                </span>
              ) : (
                "Nachricht schreiben..."
              )}
            </div>
          </div>
        </div>

        {/* Cyrano Helper Sideview */}
        <div
          className={`absolute top-8 right-0 sm:right-4 bottom-20 w-full sm:w-72 bg-white rounded-none sm:rounded-xl shadow-2xl border-l sm:border border-blue-100 transition-all duration-700 ease-out transform origin-right z-30 flex flex-col overflow-hidden ${
            step >= 2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Helper Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-bold tracking-wider uppercase">
                Cyrano AI
              </span>
            </div>
            <div className="text-sm font-medium opacity-90">
              Vorschlag generiert
            </div>
          </div>

          {/* Suggestion Content */}
          <div className="p-4 flex-1 bg-slate-50 overflow-y-auto custom-scrollbar">
            <div
              className={`transition-all duration-500 delay-300 space-y-3 ${
                step >= 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                3 KI-Vorschläge bereit
              </div>

              {/* Suggestion 1 (Selected) */}
              <div className="bg-white p-3 rounded-lg border-2 border-blue-500 shadow-md cursor-pointer relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded-bl font-bold">
                  BESTER MATCH
                </div>
                <div className="text-[10px] text-blue-600 font-bold mb-1 uppercase tracking-wide">
                  Option 1: Direkt & Charmant
                </div>
                <p className="text-slate-700 text-[13px] leading-snug mb-2">
                  Gerne! Wir analysieren erst deinen aktuellen Prozess und setzen dann unser "Cyrano"-System auf. Hast du nächste Woche 15 Min?
                </p>
                <div className="flex justify-end">
                  <button className="text-[10px] bg-blue-600 text-white px-2 py-1 rounded font-bold shadow-sm">
                    Übernehmen ↵
                  </button>
                </div>
              </div>

              {/* Suggestion 2 */}
              <div className="bg-white/60 p-3 rounded-lg border border-slate-200 opacity-60 scale-95 origin-top transition-all hover:opacity-100 hover:scale-100 cursor-pointer">
                <div className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wide">
                  Option 2: Erfolgsbeispiel
                </div>
                <p className="text-slate-600 text-[13px] leading-snug">
                  Klar! Ich kann dir zeigen, wie wir für eine ähnliche Agentur 12 Termine in 30 Tagen generiert haben...
                </p>
              </div>

              {/* Suggestion 3 */}
              <div className="bg-white/60 p-3 rounded-lg border border-slate-200 opacity-40 scale-90 origin-top transition-all hover:opacity-100 hover:scale-100 cursor-pointer">
                <div className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wide">
                  Option 3: Kurz & Knapp
                </div>
                <p className="text-slate-600 text-[13px] leading-snug">
                  Danke! Am besten schauen wir uns das kurz in einer Video-Vorstellung an. Passt dir Dienstag?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
