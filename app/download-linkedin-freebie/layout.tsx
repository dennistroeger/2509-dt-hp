import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Freebie Download | GrowMyTechProfile.com",
  description:
    "Lade dein kostenloses LinkedIn Playbook herunter - Wie die Top 5% planbar Kunden gewinnen.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
