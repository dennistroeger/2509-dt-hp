"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import Cookies from "js-cookie";
import Script from "next/script";

const PRIVACY_COOKIE_NAME = "privacy-mode";

export default function PrivacyModeManager() {
  const [isPrivate, setIsPrivate] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const privateParam = searchParams.get("private");
    const cookieExists = Cookies.get(PRIVACY_COOKIE_NAME);

    if (privateParam === "true") {
      Cookies.set(PRIVACY_COOKIE_NAME, "true", { expires: 365 });
      setIsPrivate(true);
    } else if (cookieExists) {
      setIsPrivate(true);
    }
  }, [searchParams]);

  return (
    <>
      {isPrivate ? (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-50">
          Private mode
        </div>
      ) : (
        <>
          <Analytics />
          <Script id="clarity-script">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tnxc0fa3u7");
            `}
          </Script>
        </>
      )}
    </>
  );
}
