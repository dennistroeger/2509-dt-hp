"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface WaitlistFormProps {
  formId: string;
  buttonText: string;
  listId?: number;
}

export default function WaitlistForm({
  formId,
  buttonText,
  listId,
}: WaitlistFormProps) {
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
    const consent = formData.get("consent") as string;

    if (!consent) {
      setError("Please confirm that we're allowed to contact you.");
      setIsSubmitting(false);
      return;
    }

    const data = {
      email: email,
      firstName: "Waitlist-Teilnehmer",
      listId: listId,
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
        // Redirect to a thank you page
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
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor={`email-${formId}`}
          className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2 sr-only"
        >
          Email Address*
        </label>
        <input
          type="email"
          id={`email-${formId}`}
          name="email"
          required
          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={`consent-${formId}`}
            name="consent"
            type="checkbox"
            required
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={`consent-${formId}`}
            className="text-gray-500 text-left"
          >
            Yes, you can contact me
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : buttonText}
      </button>
    </form>
  );
}
