"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function SevenDayChallengePage() {
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
      firstName: "AI Consultant Challenge Participant",
      listId: 16,
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
        {/* Challenge Label */}
        <p className="uppercase text-sm font-semibold tracking-wider text-red-600 mb-4">
          FREE CHALLENGE
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
          The 7-Day Validation Sprint:{" "}
          <span className="underline">
            Find Your AI Consulting Niche Worth 5-Fig in 7 Days
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl font-bold text-black mb-6">
          Turn Your AI Expertise Into High-Value Consulting Offers
        </p>

        {/* Descriptive Paragraph */}
        <p className="text-lg text-black mb-8 leading-relaxed">
          You know AI inside and out, but struggling to package your expertise
          into offers that sell? I found my profitable niche in 20 minutes after
          years of trying everything - and I&apos;ll show you how. This
          isn&apos;t just about making money. It&apos;s about combining your AI
          skills with real business problems to create value that clients
          can&apos;t resist—and that pays you what you&apos;re worth.
        </p>

        {/* What You'll Get */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-lg font-bold text-black mb-4">
            Over the next 7 days, you&apos;ll:
          </p>
          <ul className="space-y-2 text-black">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✓</span>
              <span>Uncover your unique AI skill combination</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✓</span>
              <span>
                Transform your expertise into profitable consulting offers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✓</span>
              <span>Identify your AI consulting superpower</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✓</span>
              <span>Validate demand before building anything</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✓</span>
              <span>Pre-sell your first high-value AI consulting offer</span>
            </li>
          </ul>
        </div>

        {/* Closing Statement */}
        <p className="text-lg text-black leading-relaxed">
          The AI consulting market is crowded, but your unique combination of
          skills and experience? That&apos;s your unfair advantage. Let&apos;s
          turn it into a profitable niche that fits you perfectly.
        </p>
      </section>

      {/* Lead Generation Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Call to Action Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 text-center">
            Start Your 7-Day Sprint
          </h2>

          {/* Instructional Paragraph */}
          <p className="text-lg text-black mb-8 text-center">
            Ready to turn your AI expertise into a profitable consulting niche?
            Enter your email below to join the challenge and receive your daily
            action steps. No overwhelm—just progress.
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
              {isSubmitting ? "Submitting..." : "Join the Challenge"}
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
