import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Berater & KI-Agenturen: Der Kurs",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function KiBeraterKursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

