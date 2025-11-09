"use client";

import { useState, useEffect } from "react";
import WaitlistForm from "../components/WaitlistForm";
import Footer from "../components/Footer";

export default function ClientAcquisitionSystemPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <main className="min-h-screen relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Top Small Text / Banner */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs sm:text-sm font-medium text-blue-800 mb-3 sm:mb-4">
            🚀 For AI & Automation Consultants
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-4 sm:mb-6 leading-tight">
            The Hackathon Acquisition System
          </h1>

          {/* Subheadline / Supporting Copy */}
          <p className="text-sm sm:text-base text-black mb-6 leading-relaxed max-w-2xl mx-auto">
            Get the Blueprint worth $999 for free when its released.
          </p>

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl max-w-md mx-auto mb-6">
            <WaitlistForm
              formId="hackathon-acquisition-system"
              buttonText="Get the Blueprint worth $999 for free when its released →"
              listId={13}
            />

            {/* Trust Badge / Disclaimer */}
            <div className="flex items-center justify-center mt-3 sm:mt-4 space-x-2">
              <span className="text-green-600">🔒</span>
              <p className="text-xs text-black">
                No spam. We&apos;ll send you the blueprint and other valuable
                content.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
