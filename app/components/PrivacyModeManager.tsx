"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Clarity from "@microsoft/clarity";

const PRIVACY_COOKIE_NAME = "privacy-mode";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: (string | Record<string, string>)[]) => void;
  }
}

export default function PrivacyModeManager() {
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    const cookieExists = Cookies.get(PRIVACY_COOKIE_NAME);
    const shouldBePrivate = !!cookieExists;

    setIsPrivate(shouldBePrivate);

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: shouldBePrivate ? "denied" : "granted",
        analytics_storage: shouldBePrivate ? "denied" : "granted",
      });
    }

    if (!shouldBePrivate) {
      Clarity.init("tnxc0fa3u7");
    }
  }, []);

  return (
    <>
      {isPrivate && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-50">
          Private mode
        </div>
      )}
    </>
  );
}
