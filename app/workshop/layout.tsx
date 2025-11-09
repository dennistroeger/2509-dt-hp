import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Strategy Session",
  description:
    "Learn in this free strategy session how you can predictably win high-paying clients with LinkedIn.",
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

