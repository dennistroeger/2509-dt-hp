import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin buchen | Histack.io",
  description:
    "Buchen Sie einen kostenlosen Beratungstermin für Ihr LinkedIn-Profil und Ihre Karriereentwicklung",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AnrufLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
