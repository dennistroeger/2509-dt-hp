import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio - Histack.io",
  description: "Content management for Histack.io",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
