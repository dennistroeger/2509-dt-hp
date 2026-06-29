import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloses Strategiegespräch buchen",
  description:
    "Erfahre in diesem kostenlosen Strategiegespräch, wie du planbar hochpreisige Kunden über LinkedIn gewinnst.",
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
