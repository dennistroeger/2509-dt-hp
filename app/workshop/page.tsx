"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Anruf() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF5044" },
          dark: { "cal-brand": "#FF5044" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kostenlosen Workshop buchen
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Erfahre in diesem Workshop, wie wir mit dem CEO-System planbar
              Kunden gewinnen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Cal
              namespace="30min"
              calLink="dennis-debus/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "auto" }}
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Was erwartet dich im Workshop?
              </h3>
              <ul className="text-gray-600 space-y-1 text-left max-w-md mx-auto">
                <li>
                  • Das CEO-System, welches uns planbar Kunden gewinnen lässt
                </li>
                <li>• Konkrete Optimierungsvorschläge</li>
                <li>• Strategien für mehr Sichtbarkeit</li>
                <li>• Tipps für Networking und Content</li>
                <li>• Antworten auf deine Fragen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
