import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin buchen | Histack.io",
  description: "Gewinne Premium Kunden mit LinkedIn",
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
