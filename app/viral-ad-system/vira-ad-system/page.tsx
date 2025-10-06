import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { cookies } from "next/headers";
import { sendLinkedInConversion } from "../../lib/linkedin";
import WistiaPlayer from "../../components/WistiaPlayer";

export default async function ViraAdSystem() {
  const cookieStore = await cookies();
  const liFatId = cookieStore.get("li_fat_id")?.value;
  const conversionUrn = process.env.LINKEDIN_VIRAL_AD_SYSTEM;

  if (conversionUrn) {
    if (liFatId) {
      sendLinkedInConversion(liFatId, conversionUrn);
    } else if (process.env.NODE_ENV === "development") {
      sendLinkedInConversion("", conversionUrn, true);
    }
  }

  return (
    <div className="bg-white font-sans">
      <section className="h-screen flex flex-col w-full relative">
        <header className="w-full flex justify-center items-start absolute top-0 left-0 p-8 z-10">
          <Image
            src="/images/histack-logo.svg"
            alt="Histack Logo"
            width={128}
            height={32}
            className="w-32 h-auto"
          />
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-full">
            <p className="text-lg sm:text-xl text-gray-600">
              Planbar Kunden gewinnenn auf LinkedIn
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Wie du mit dem &quot;Viral Ad&quot;-System LinkedIn Ads für unter
              1 € pro Klick schaltest.
            </h1>

            <div className="mt-8 w-full max-w-2xl">
              <WistiaPlayer mediaId="39u4itcqa2" />
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <Link
                href="#" // You can add the workshop link later
                className="text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#FF5044" }}
              >
                Jetzt Workshop buchen
              </Link>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                3 Slots pro Woch!
              </span>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
