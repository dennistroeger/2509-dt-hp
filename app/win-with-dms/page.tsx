"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function WinWithDMsPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const data = {
      email: email,
      firstName: "DM Framework Subscriber",
      listId: 15,
    };

    try {
      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/next-step");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Ebook Label */}
        <p className="uppercase text-sm font-semibold tracking-wider text-red-600 mb-4">
          NEW EBOOK
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
          The 7-Stage Process to Book 3+ Meetings{" "}
          <span className="underline">every single week</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl font-bold text-black mb-6">
          Stop guessing. Start converting. Our proven 7-stage framework turns
          prospects into meetings.
        </p>

        {/* Descriptive Paragraph */}
        <p className="text-lg text-black mb-12 leading-relaxed">
          Tired of ignored LinkedIn DMs? This battle-tested framework gives you
          the exact scripts and strategies to boost response rates from 10% to
          40-60% and book more high-quality meetings. Download your free guide
          and transform your outreach today.
        </p>
      </section>

      {/* Lead Generation Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Call to Action Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 text-center">
            Get Instant Access
          </h2>

          {/* Instructional Paragraph */}
          <p className="text-lg text-black mb-8 text-center">
            Ready to revolutionize your LinkedIn outreach? Enter your email
            below to download your complete DM Framework and start closing more
            deals.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                placeholder="Your most beautiful e-mail"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white font-bold text-lg py-4 px-6 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              {isSubmitting ? "Submitting..." : "Download Your Free Guide"}
            </button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
