"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WistiaPlayer } from "../components/WistiaPlayer";
import Footer from "../components/Footer";

export default function VadsPage() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showCta, setShowCta] = useState(false);

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
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Wachstum auf{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Autopilot
        </span>{" "}
        statt täglicher Akquise-Stress.
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        Die strategische Blaupause für etablierte Berater, die ihr Wachstum
        nicht länger dem Zufall überlassen wollen.
      </p>
    </div>
  );

  return (
    <div
      className={`transition-colors duration-500 ${
        showPlayer ? "bg-white" : "bg-gray-50"
      }`}
    >
      {!showPlayer ? (
        <div className="min-h-screen flex items-center justify-center p-4 py-12">
          <div className="flex flex-col items-center space-y-8 w-full">
            <Header />
            <div className="w-full max-w-md relative">
              <Image
                src="/images/vads.gif"
                alt="VADS animation"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg object-contain"
                priority
              />
              {!showCta && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-lg"
                  onClick={() => setShowCta(true)}
                >
                  <svg
                    className="w-20 h-20 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>

            {showCta && (
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
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center p-4 py-12">
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
      <Footer />
    </div>
  );
}
