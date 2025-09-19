import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growmytechprofile.com"),
  title:
    "Planbare Meetings statt Content-Hamsterrad auf LinkedIn | B2B SaaS Guide",
  description:
    "Wie die Top 5% planbar Kunden gewinnen - kostenloses Playbook für B2B-SaaS, IT- & Tech-Unternehmer. Echte Ergebnisse statt 'Prinzip Hoffnung' bei 50+ Tech-Unternehmen.",
  keywords:
    "LinkedIn Marketing, B2B SaaS, Kundenakquise, Content Marketing, Tech Marketing, SaaS Growth, LinkedIn Strategie, B2B Lead Generation",
  authors: [{ name: "GrowMyTechProfile.com" }],
  creator: "GrowMyTechProfile.com",
  publisher: "GrowMyTechProfile.com",
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
    url: "https://growmytechprofile.com",
    siteName: "GrowMyTechProfile.com",
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
    canonical: "https://growmytechprofile.com",
  },
  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
