"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import Cookies from "js-cookie";
import Clarity from "@microsoft/clarity";

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
    } else {
      setIsPrivate(false);
      Clarity.init("tnxc0fa3u7");
    }
  }, [searchParams]);

  return (
    <>
      {isPrivate ? (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-50">
          Private mode
        </div>
      ) : (
        <Analytics />
      )}
    </>
  );
}
