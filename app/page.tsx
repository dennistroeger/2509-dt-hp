import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col w-full relative">
        {/* Logo/Header */}
        <header className="w-full flex justify-center items-start absolute top-0 left-0 p-8 z-10">
          <Image
            src="/images/histack-logo.svg"
            alt="UnlockAI Logo"
            width={128}
            height={32}
            className="w-32 h-auto"
          />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-full">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              5+ warme Leads pro Woche
              <br />
              auf LinkedIn –{" "}
              <span
                className="underline decoration-4"
                style={{
                  textDecorationColor: "#FF5044",
                  color: "#FF5044",
                }}
              >
                mit dem Viral-Ad-System
              </span>
            </h1>
            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Lerne, hochpreisige Kunden auf LinkedIn zu gewinnen mit dem
              Viral-Ad-System.
            </p>
            {/* Call to Action */}
            <div className="mt-8">
              <Link
                href="https://tally.so/r/waVLQy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#FF5044" }}
              >
                INTERESSIERT? BUCHE EIN GESPRÄCH!
              </Link>
            </div>
          </div>
        </main>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
