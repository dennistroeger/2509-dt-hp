"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WistiaPlayer from "../components/WistiaPlayer";

export default function VadsPage() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (showPlayer) {
      const timer = setTimeout(() => {
        setIsButtonVisible(true);
      }, 8 * 60 * 1000); // 8 minutes

      return () => clearTimeout(timer);
    }
  }, [showPlayer]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!firstName || !email) {
      setError("Bitte gib deinen Namen und deine E-Mail-Adresse ein.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
          listIds: [12],
        }),
      });

      if (!response.ok) {
        throw new Error("Anmeldung fehlgeschlagen.");
      }

      setShowPlayer(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const Header = () => (
    <div className="w-full max-w-4xl text-center">
      <p className="text-lg sm:text-xl text-gray-600">
        Planbar Kunden gewinnenn auf LinkedIn
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Wie du mit dem &quot;Viral Ad&quot;-System LinkedIn Ads für unter 1 €
        pro Klick schaltest.
      </h1>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        showPlayer ? "bg-white" : "bg-gray-50"
      }`}
    >
      {!showPlayer ? (
        <div className="flex items-center justify-center min-h-screen p-4 py-12">
          <div className="flex flex-col items-center space-y-8 w-full">
            <Header />
            <div className="w-full max-w-md">
              <Image
                src="/images/vads.gif"
                alt="VADS animation"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg object-contain"
                priority
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                Exklusiven Zugang erhalten
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Vorname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg py-3 px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isLoading ? "Wird gesendet..." : "Senden"}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-xs italic mt-4">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 py-12">
          <div className="flex flex-col items-center space-y-8 w-full">
            <Header />
            <div className="w-full max-w-2xl">
              <WistiaPlayer mediaId="39u4itcqa2" />
            </div>
            <div
              className={`mt-4 flex items-center space-x-4 transition-opacity duration-1000 ${
                isButtonVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="#" // You can add the workshop link later
                className="text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#FF5044" }}
              >
                Jetzt Workshop buchen
              </Link>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                3 Slots pro Woch!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
