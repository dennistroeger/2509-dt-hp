import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import WistiaPlayer from "./components/WistiaPlayer";

export default function Home() {
  return (
    <div className="bg-gray-900 font-sans text-white">
      {/* Hero Section */}
      <section className="min-h-screen h-auto flex flex-col w-full relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,80,68,0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-200"></div>

        {/* Logo/Header */}
        <header className="w-full flex justify-center items-start absolute top-0 left-0 p-8 z-10">
          <Image
            src="/images/histack-logo-white.svg"
            alt="UnlockAI Logo"
            width={128}
            height={32}
            className="w-32 h-auto"
          />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-full">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight shadow-md">
              Wie du in 3-6 Monaten von stressiger Kundenakquise zum
              <span className="text-red-400"> entspannten Experten</span> mit
              einem funktionierenden System wirst.
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              Dein LinkedIn-Kanal arbeitet für dich, nicht umgekehrt. Für
              Kontrolle, Planbarkeit und Freiheit.
            </p>

            {/* Video Player */}
            <div className="w-full max-w-3xl mx-auto my-12 shadow-2xl rounded-xl overflow-hidden border-2 border-red-500/50 transform hover:scale-105 transition-transform duration-300">
              <WistiaPlayer mediaId="39u4itcqa2" />
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/workshop"
                className="text-white font-bold py-4 px-10 rounded-lg text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Jetzt Workshop-Platz sichern
              </Link>
              {/* Scarcity element */}
              <div className="flex items-center space-x-2 text-sm text-gray-400 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Nur 3 Plätze pro Woche verfügbar!</span>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
