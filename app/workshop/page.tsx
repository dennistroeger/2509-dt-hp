"use client";

import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function BookACallPage() {
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

    // Track custom conversion for download page
    // Get LinkedIn tracking ID from cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const liFatId = getCookie("li_fat_id");

    // Send conversion via API route
    const sendConversion = async () => {
      try {
        const response = await fetch("/api/linkedin/conversion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            liFatId: liFatId || "",
            conversionEventName: "LINKEDIN_WORKFLOW_PAGE_OPEN",
            testMode: !liFatId && process.env.NODE_ENV === "development",
          }),
        });

        if (response.ok) {
          console.log("✅ LinkedIn conversion sent successfully");
        } else {
          console.error("❌ Failed to send LinkedIn conversion");
        }
      } catch (error) {
        console.error("Error sending LinkedIn conversion:", error);
      }
    };

    if (liFatId) {
      // Send conversion with real LinkedIn tracking ID
      sendConversion();
    } else if (process.env.NODE_ENV === "development") {
      // Send test conversion in development mode
      console.log("🧪 Testing LinkedIn conversion tracking (no real liFatId)");
      sendConversion();
    }
  }, []);

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

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 font-heading">
              Kostenloses Strategiegespräch buchen
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Erfahre in diesem kostenlosen Strategiegespräch, wie du planbar
              hochpreisige Kunden über LinkedIn gewinnst.
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
            <div className="bg-slate-50/50 rounded-lg p-6 border border-slate-100">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4 font-heading">
                Was erwartet dich im Strategiegespräch?
              </h3>
              <ul className="text-slate-600 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-[#fe5454] mr-2">•</span>
                  Eine Analyse deiner aktuellen LinkedIn-Strategie
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe5454] mr-2">•</span>
                  Konkrete Schritte, um deine Wunschkunden zu erreichen
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe5454] mr-2">•</span>
                  Strategien für Inhalte, die Anfragen generieren
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe5454] mr-2">•</span>
                  Ein klarer Plan für die nächsten 90 Tage
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe5454] mr-2">•</span>
                  Antworten auf deine individuellen Fragen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-200/60 bg-white/40 backdrop-blur-xl">
        <Footer />
      </div>
    </div>
  );
}
