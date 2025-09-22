"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormProps {
  formId: string;
  showCompany?: boolean;
  buttonText: string;
}

export default function ContactForm({
  formId,
  showCompany = false,
  buttonText,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      company: showCompany ? (formData.get("company") as string) : "",
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
        // Redirect to next-step page
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

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor={`firstName-${formId}`}
          className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
        >
          Vorname*
        </label>
        <input
          type="text"
          id={`firstName-${formId}`}
          name="firstName"
          required
          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
          placeholder="Dein Vorname"
        />
      </div>

      <div>
        <label
          htmlFor={`email-${formId}`}
          className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
        >
          Email Address*
        </label>
        <input
          type="email"
          id={`email-${formId}`}
          name="email"
          required
          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
          placeholder="deine@email.com"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Wird gesendet..." : buttonText}
      </button>
    </form>
  );
}
