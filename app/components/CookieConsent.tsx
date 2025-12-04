"use client";

import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  acceptAllCookies,
  rejectAllCookies,
  shouldShowBanner,
  type CookieConsent,
} from "../lib/cookies";
import { loadScriptsByConsent, removeMarketingScripts } from "../lib/scripts";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsentState] = useState<CookieConsent | null>(null);

  useEffect(() => {
    // Check if banner should be shown
    const shouldShow = shouldShowBanner();
    setShowBanner(shouldShow);

    // Load existing consent
    const existingConsent = getCookieConsent();
    setConsentState(existingConsent);

    // Load scripts based on existing consent
    if (existingConsent) {
      loadScriptsByConsent();
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
    setShowDetails(false);
    loadScriptsByConsent();
    // Reload page to ensure all scripts are properly initialized
    window.location.reload();
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
    setShowDetails(false);
    removeMarketingScripts();
    // Reload page to ensure marketing scripts are removed
    window.location.reload();
  };

  const handleCustomize = () => {
    setShowDetails(true);
  };

  const handleSavePreferences = () => {
    if (consent) {
      setCookieConsent(consent);
      setShowBanner(false);
      setShowDetails(false);
      loadScriptsByConsent();
      // Reload page to ensure scripts are properly loaded/removed
      window.location.reload();
    }
  };

  const toggleMarketing = () => {
    if (consent) {
      setConsentState({
        ...consent,
        marketing: !consent.marketing,
      });
    } else {
      setConsentState({
        functional: true,
        marketing: false,
        timestamp: Date.now(),
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div
      id="cookie-banner"
      className="fixed bottom-5 left-5 right-5 bg-white p-5 rounded-2xl shadow-lg max-w-[600px] mx-auto font-sans text-center z-[9999] border border-gray-100"
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {!showDetails ? (
        <>
          <p className="text-lg font-bold mb-2.5 text-gray-900">
            Hier gibt&apos;s Cookies 🍪
          </p>
          <p className="text-sm mb-5 text-gray-600 leading-relaxed">
            Wir nutzen Cookies, um dir das beste Erlebnis zu bieten – für
            Analysen und Marketing. Du entscheidest, was okay ist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              id="accept-all"
              onClick={handleAcceptAll}
              className="bg-[#fe5454] text-white border-none px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-[#e64545] transition-colors"
            >
              Alle Cookies
            </button>
            <button
              id="reject-all"
              onClick={handleRejectAll}
              className="bg-transparent text-[#fe5454] border-2 border-[#fe5454] px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-[#fe5454]/5 transition-colors"
            >
              Keine Cookies
            </button>
            <button
              id="customize"
              onClick={handleCustomize}
              className="bg-gray-100 text-gray-700 border-none px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-200 transition-colors"
            >
              Auswählen
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-lg font-bold mb-4 text-gray-900">
            Cookie-Einstellungen
          </p>

          <div className="text-left space-y-4 mb-6">
            {/* Functional Cookies - Always On */}
            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">
                    Functional
                  </span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                    Immer aktiv
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies sind für die Grundfunktionen der Website
                  erforderlich und können nicht deaktiviert werden.
                </p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-6 bg-[#fe5454] rounded-full relative cursor-not-allowed opacity-60">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Marketing Cookies - Toggle */}
            <div className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">Marketing</span>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies werden verwendet, um dir relevante Werbung und
                  Marketing-Inhalte zu zeigen.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={toggleMarketing}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    consent?.marketing
                      ? "bg-[#fe5454]"
                      : "bg-gray-300"
                  }`}
                  aria-label="Toggle Marketing Cookies"
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      consent?.marketing ? "right-1" : "left-1"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleSavePreferences}
              className="bg-[#fe5454] text-white border-none px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-[#e64545] transition-colors"
            >
              Einstellungen speichern
            </button>
            <button
              onClick={() => setShowDetails(false)}
              className="bg-gray-100 text-gray-700 border-none px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-200 transition-colors"
            >
              Zurück
            </button>
          </div>
        </>
      )}
    </div>
  );
}

