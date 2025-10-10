import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viral Ad System",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function VadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

