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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Book a Free Strategy Session
            </h1>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Learn in this free strategy session how you can predictably win
              high-paying clients with LinkedIn.
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
              <h3 className="text-lg font-semibold text-black mb-2">
                What can you expect in the strategy session?
              </h3>
              <ul className="text-black space-y-1 text-left max-w-md mx-auto">
                <li>• An analysis of your current LinkedIn strategy</li>
                <li>• Concrete steps to reach your ideal clients</li>
                <li>• Strategies for content that generates inquiries</li>
                <li>• A clear plan for the next 90 days</li>
                <li>• Answers to your specific questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
