import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Der LinkedIn DM Bot",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function DmBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

