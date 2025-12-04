import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import ScriptLoader from "./components/ScriptLoader";
import { Suspense } from "react";
import React from "react";
import Header from "./components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.histack.io"),
  title:
    "Planbare Meetings statt Content-Hamsterrad auf LinkedIn | B2B SaaS Guide",
  description:
    "Wie die Top 5% planbar Kunden gewinnen - kostenloses Playbook für B2B-SaaS, IT- & Tech-Unternehmer. Echte Ergebnisse statt 'Prinzip Hoffnung' bei 50+ Tech-Unternehmen.",
  keywords:
    "LinkedIn Marketing, B2B SaaS, Kundenakquise, Content Marketing, Tech Marketing, SaaS Growth, LinkedIn Strategie, B2B Lead Generation",
  authors: [{ name: "Histack.io" }],
  creator: "Histack.io",
  publisher: "Histack.io",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.histack.io",
    siteName: "Histack.io",
    title: "Planbare Meetings statt Content-Hamsterrad auf LinkedIn",
    description:
      "Wie die Top 5% planbar Kunden gewinnen - kostenloses Playbook für B2B-SaaS, IT- & Tech-Unternehmer.",
    images: [
      {
        url: "/images/freebie-cover.png",
        width: 1200,
        height: 630,
        alt: "Content-Hamsterrad Playbook Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planbare Meetings statt Content-Hamsterrad auf LinkedIn",
    description:
      "Wie die Top 5% planbar Kunden gewinnen - kostenloses Playbook für B2B-SaaS, IT- & Tech-Unternehmer.",
    images: ["/images/freebie-cover.png"],
  },
  alternates: {
    canonical: "https://www.histack.io",
  },
  category: "Business",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Suspense>
          <CookieConsent />
          <ScriptLoader />
        </Suspense>
        <Header />
        {children}
      </body>
    </html>
  );
}
