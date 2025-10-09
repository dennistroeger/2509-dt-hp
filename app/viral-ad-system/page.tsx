a"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import WistiaPlayer from "../components/WistiaPlayer";
import { useEffect, useState } from "react";

export default function ViraAdSystem() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 9 * 60 * 1000); // 9 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white font-sans">
      <section className="h-screen flex flex-col w-full relative">
        <header className="w-full flex justify-center items-start absolute top-0 left-0 p-8 z-10">
          <Image
            src="/images/histack-logo.svg"
            alt="Histack Logo"
            width={128}
            height={32}
            className="w-32 h-auto"
          />
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-full">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Wachstum auf{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Autopilot
              </span>{" "}
              statt täglicher Akquise-Stress.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Die strategische Blaupause für etablierte Berater, die ihr
              Wachstum nicht länger dem Zufall überlassen wollen.
            </p>

            <div className="mt-8 w-full max-w-2xl">
              <WistiaPlayer mediaId="39u4itcqa2" />
            </div>

            <div
              className={`mt-8 flex items-center space-x-4 transition-opacity duration-1000 ${
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
        </main>
      </section>
      <Footer />
    </div>
  );
}
