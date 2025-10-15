import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "THE Hackathon Acquisition System™",

  keywords:
    "Hackathon Acquisition System, LinkedIn, Acquisition, Sales, Marketing, Consulting, AI, Automation",
  authors: [{ name: "Histack.io" }],
  creator: "Histack.io",
  publisher: "Histack.io",
  robots: {
    index: true,
    follow: true,
  },
  description: "Land Your Next High-Ticket Consulting Deal in 30 Days*",
};

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen h-auto flex flex-col w-full relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,80,68,0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-200"></div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-full">
            {/* Headline */}
            <p className="uppercase text-sm font-semibold tracking-wider text-red-600">
              THE HACKATHON ACQUISITION SYSTEM™
            </p>
            <h1 className="mt-2 text-7xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Acquire premium consulting clients in 30 days
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Join 100+ AI & Automation professionals leveraging AI Hackathons
              to establish figures in their niche and well paid gigs in their
              field.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col items-center space-y-4 mt-12">
              <Link
                href="/workshop"
                className="text-white font-bold py-4 px-10 rounded-full text-lg bg-[#FE5454] hover:bg-[#E54B4B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                <span className="block text-sm font-normal">
                  For AI & Automation Consultants
                </span>
                APPLY TO JOIN THE PROGRAM
              </Link>
              {/* Scarcity element */}
              <div className="flex items-center space-x-2 text-sm text-gray-500 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Only 3 spots per week available!</span>
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
