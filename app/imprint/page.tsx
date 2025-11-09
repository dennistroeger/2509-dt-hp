import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Gewinne Premium Kunden mit LinkedIn",
};

export default function Imprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Impressum
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Company Information
              </h2>
              <div className="space-y-2 text-black">
                <p>
                  <strong>Company:</strong> Histack
                </p>
                <p>
                  <strong>CEO:</strong> Konstantin Ristl
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Address
              </h2>
              <div className="text-black">
                <p>1111B S Governors Ave STE 21755</p>
                <p>Dover</p>
                <p>DE</p>
                <p>19904</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Contact
              </h2>
              <div className="text-black">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@histack.io"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@histack.io
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Disclaimer
              </h2>
              <div className="text-black leading-relaxed">
                <p>
                  The information provided on this website is for general
                  informational purposes only and is subject to change without
                  notice. For legal questions, please contact us directly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Copyright
              </h2>
              <div className="text-black">
                <p>COPYRIGHT 2024® ALL RIGHTS RESERVED | Histack.io</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
