"use client";

import { clearCookieConsent } from "../lib/cookies";

/**
 * Button component to reopen cookie consent banner
 * Clears the consent cookie and reloads the page to show the banner again
 */
export default function CookieSettingsButton() {
  const handleOpenCookieSettings = () => {
    clearCookieConsent();
    // Trigger a custom event to show the banner immediately without reload
    window.dispatchEvent(new CustomEvent('showCookieBanner'));
    // Also reload to ensure everything is reset properly
    window.location.reload();
  };

  return (
    <button
      onClick={handleOpenCookieSettings}
      className="inline-flex items-center px-6 py-3 bg-[#fe5454] text-white rounded-lg font-medium hover:bg-[#e64545] transition-colors shadow-sm hover:shadow-md"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
      Cookie-Einstellungen ändern
    </button>
  );
}

