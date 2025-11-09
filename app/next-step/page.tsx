import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { sendLinkedInConversion } from "../lib/linkedin";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Next Step - Confirm Your Email",
  description:
    "Confirm your email to access your free guide and start winning high-value clients with LinkedIn",
};

export default async function NextStep() {
  const cookieStore = await cookies();
  const liFatId = cookieStore.get("li_fat_id")?.value;
  const conversionUrn = process.env.LINKEDIN_CEO_SYSTEM_DOWNLOAD;

  // Debug logging
  console.log("🔍 Next Step Debug Info:", {
    liFatId: liFatId ? "present" : "missing",
    conversionUrn: conversionUrn ? "present" : "missing",
    nodeEnv: process.env.NODE_ENV,
  });

  if (conversionUrn) {
    if (liFatId) {
      // Send conversion with real LinkedIn tracking ID
      sendLinkedInConversion(liFatId, conversionUrn);
    } else if (process.env.NODE_ENV === "development") {
      // Send test conversion in development mode
      console.log("🧪 Testing LinkedIn conversion tracking (no real liFatId)");
      sendLinkedInConversion("", conversionUrn, true);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <span className="text-4xl">✓</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Almost There!
            </span>
            <br />
            Confirm Your Email
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Thank you for your interest! You'll receive an email within the next
            few minutes with a download link to access your free guide.
          </p>

          {/* Important Notice Box */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚠️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-amber-800 mb-2">
                  Important Notice:
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  <strong>
                    You must click the confirmation link in the email
                  </strong>{" "}
                  to receive your free guide. Please also check your spam folder
                  if you don't see the email in your inbox.
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Check Your Email
              </h3>
              <p className="text-gray-600 text-sm">
                Look in your inbox (and spam folder) for our confirmation email
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Click the Link
              </h3>
              <p className="text-gray-600 text-sm">
                Confirm your email address by clicking the confirmation link
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Access Your Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Get instant access to your free guide and start implementing
              </p>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">
              What's Inside Your Guide?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">
                  Why 95% of SaaS founders waste their time on LinkedIn
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">
                  How the top 5% systematically and predictably win customers
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">
                  Measure real results instead of relying on hope
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">
                  Step-by-step guide with ready-to-use templates
                </span>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
