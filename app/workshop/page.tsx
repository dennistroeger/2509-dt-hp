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
          light: { "cal-brand": "#FF3D2E" },
          dark: { "cal-brand": "#FF3D2E" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const liFatId = getCookie("li_fat_id");

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
      sendConversion();
    } else if (process.env.NODE_ENV === "development") {
      console.log("🧪 Testing LinkedIn conversion tracking (no real liFatId)");
      sendConversion();
    }
  }, []);

  return (
    <div className="page-shell overflow-x-hidden">
      <div className="max-w-4xl mx-auto py-24 section-pad">
        <div className="flex gap-0 mb-12">
          <div className="hatched-bar mr-6 sm:mr-10 shrink-0" aria-hidden="true" />
          <div className="space-y-4 max-w-2xl">
            <p className="section-label">Strategiegespräch</p>
            <h1 className="text-3xl sm:text-5xl font-black text-ink font-heading leading-tight">
              Kostenloses Strategiegespräch buchen
            </h1>
            <p className="text-lg text-slate leading-relaxed">
              Erfahre, wie du planbar hochpreisige Kunden über LinkedIn gewinnst.
            </p>
          </div>
        </div>

        <div className="editorial-card p-6 md:p-10 bg-white mb-12">
          <Cal
            namespace="30min"
            calLink="dennis-debus/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "auto" }}
          />
        </div>

        <div className="editorial-card p-8 space-y-6">
          <h3 className="text-xl font-bold text-ink font-heading">
            Was erwartet dich im Strategiegespräch?
          </h3>
          <ul className="text-slate space-y-3">
            {[
              "Eine Analyse deiner aktuellen LinkedIn-Strategie",
              "Konkrete Schritte, um deine Wunschkunden zu erreichen",
              "Strategien für Inhalte, die Anfragen generieren",
              "Ein klarer Plan für die nächsten 90 Tage",
              "Antworten auf deine individuellen Fragen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent font-mono shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
