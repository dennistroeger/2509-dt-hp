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
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 font-sans text-left">
      {/* Browser Chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
      </div>

      <div className="absolute inset-0 top-8 flex bg-slate-50/50">
        {/* Sidebar Mockup */}
        <div className="w-16 md:w-64 border-r border-slate-200 bg-white hidden md:block">
          <div className="p-4 space-y-4">
            <div className="h-8 w-8 rounded bg-blue-600 mb-8"></div>
            <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
            <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
            <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative bg-white">
          {/* Chat Header */}
          <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200"></div>
              <div>
                <div className="h-3 w-24 bg-slate-200 rounded mb-1"></div>
                <div className="h-2 w-16 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 space-y-6 bg-slate-50/30">
            {/* Incoming Message */}
            <div
              className={`flex gap-4 transition-all duration-500 transform ${
                step >= 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-md">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Hey Dennis, danke für die Vernetzung! Klingt spannend was ihr macht. Wie genau sieht der Prozess aus?
                </p>
              </div>
            </div>

            {/* Outgoing Message (Final State) */}
            <div
              className={`flex gap-4 flex-row-reverse transition-all duration-500 transform ${
                step >= 5
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0 flex items-center justify-center text-[10px] font-bold text-blue-600">
                YOU
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md max-w-md">
                <p className="text-sm leading-relaxed">
                  Gerne! Wir analysieren erst deine aktuelle Pipeline und setzen dann unser "Cyrano"-System auf. Hast du nächste Woche 15 Min für einen kurzen Check?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="h-20 border-t border-slate-100 p-4 bg-white relative z-10">
            <div className="w-full h-full rounded-lg border border-slate-200 bg-slate-50 p-3 flex items-center text-slate-400 text-sm">
              {step >= 4 && step < 5 ? (
                <span className="text-slate-800 animate-pulse">
                  Gerne! Wir analysieren erst deine aktuelle Pipeline...|
                </span>
              ) : (
                "Nachricht schreiben..."
              )}
            </div>
          </div>
        </div>

        {/* Cyrano Helper Sideview */}
        <div
          className={`absolute top-8 right-4 bottom-20 w-72 bg-white rounded-xl shadow-2xl border border-blue-100 transition-all duration-700 ease-out transform origin-right z-30 flex flex-col overflow-hidden ${
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
          <div className="p-4 flex-1 bg-slate-50">
            <div
              className={`transition-all duration-500 delay-300 ${
                step >= 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-sm mb-3 cursor-pointer hover:border-blue-400 transition-colors group">
                <div className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wide">
                  Empfohlene Antwort
                </div>
                <p className="text-slate-700 text-sm mb-3">
                  Gerne! Wir analysieren erst deine aktuelle Pipeline und setzen dann unser "Cyrano"-System auf. Hast du nächste Woche 15 Min für einen kurzen Check?
                </p>
                <div className="flex justify-end">
                  <button className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Übernehmen ↵
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
