import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Client Acquisition System for AI Consultants",
  description:
    "Learn how to acquire high-paying clients for your AI consulting business.",
};

export default function ClientAcquisitionSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
