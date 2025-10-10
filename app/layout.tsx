import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import PrivacyModeManager from "./components/PrivacyModeManager";
import { Suspense } from "react";
import React from "react";
import { cookies } from "next/headers";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const isPrivate = cookieStore.get("privacy-mode")?.value === "true";
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="gtm-consent" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': '${isPrivate ? "denied" : "granted"}',
          'analytics_storage': '${isPrivate ? "denied" : "granted"}'
        });
      `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDJCH7GP');`}
      </Script>
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDJCH7GP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense>
          <PrivacyModeManager />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
