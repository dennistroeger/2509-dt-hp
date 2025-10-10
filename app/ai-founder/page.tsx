import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.histack.io"),
  title: "AI-Founder: Die tägliche Arbeit eines Gründers, automatisiert.",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        src="https://gamma.app/embed/archt83dcs61kkn"
        style={{ width: "80%", maxWidth: "1200px", height: "80vh" }}
        allow="fullscreen"
        title="KI-gestützter Vertrieb: Wie du die richtigen Kunden zur richtigen Zeit finden"
      ></iframe>
    </div>
  );
}
