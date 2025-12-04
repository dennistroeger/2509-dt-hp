"use client";

import { useEffect } from "react";
import { getCookieConsent } from "../lib/cookies";
import { loadScriptsByConsent } from "../lib/scripts";

/**
 * ScriptLoader component
 * Automatically loads scripts based on cookie consent
 * This component runs on the client side after consent is set
 */
export default function ScriptLoader() {
  useEffect(() => {
    // Only load scripts if consent has been given
    const consent = getCookieConsent();
    if (consent) {
      loadScriptsByConsent();
    }
  }, []);

  return null;
}

