"use client";

import { useState, useEffect } from "react";
import { hasConsent } from "../lib/cookies";

interface LoomPlayerProps {
  videoId: string;
  hideEmbedTopBar?: boolean;
  className?: string;
  placeholder?: React.ReactNode;
}

/**
 * GDPR-compliant Loom video player
 * Only loads the iframe after marketing cookie consent is granted
 */
export default function LoomPlayer({
  videoId,
  hideEmbedTopBar = true,
  className = "",
  placeholder,
}: LoomPlayerProps) {
  const [hasMarketingConsent, setHasMarketingConsent] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    // Check if marketing consent has been granted
    const consent = hasConsent("marketing");
    setHasMarketingConsent(consent);
    setShowPlaceholder(!consent);
  }, []);

  // Listen for consent changes (when user accepts cookies)
  useEffect(() => {
    const checkConsent = () => {
      const consent = hasConsent("marketing");
      if (consent && showPlaceholder) {
        setHasMarketingConsent(true);
        setShowPlaceholder(false);
      }
    };

    // Check immediately
    checkConsent();

    // Check periodically (in case consent was granted in another tab/window)
    const interval = setInterval(checkConsent, 1000);

    return () => clearInterval(interval);
  }, [showPlaceholder]);

  const embedUrl = `https://www.loom.com/embed/${videoId}${hideEmbedTopBar ? "?hideEmbedTopBar=true" : ""}`;

  if (showPlaceholder) {
    return (
      <div
        className={`relative rounded-[1.5rem] overflow-hidden bg-black/5 shadow-inner flex items-center justify-center ${className}`}
        style={{ paddingBottom: "56.25%", height: 0 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-center">
          {placeholder || (
            <>
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Video wird geladen
              </h3>
              <p className="text-sm text-gray-500 max-w-md">
                Um dieses Video anzuzeigen, benötigen wir deine Einwilligung
                für Marketing-Cookies. Bitte akzeptiere die Cookies in der
                Cookie-Banner.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-[1.5rem] overflow-hidden bg-black/5 shadow-inner ${className}`}
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full"
        title="Loom Video"
        loading="lazy"
      />
    </div>
  );
}

