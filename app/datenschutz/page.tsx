import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Win Premium Customers with LinkedIn",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Hosting and Data Storage
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  This website is hosted on the <strong>Vercel</strong>{" "}
                  platform. Vercel is a hosting service provider based in the
                  USA. When you visit our website, certain data is automatically
                  transmitted to Vercel, including your IP address, browser
                  type, operating system, and access times.
                </p>
                <p>
                  For more information about privacy at Vercel, please see the
                  Vercel Privacy Policy:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Email Data Processing
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  For processing email newsletters and email marketing, we use
                  the <strong>Brevo</strong> service (formerly Sendinblue). When
                  you subscribe to our newsletter or send us an email, your
                  email address and associated data are stored on Brevo&apos;s
                  servers.
                </p>
                <p>
                  Brevo is a French provider with high data protection standards
                  and GDPR compliance. Your data is transmitted and stored
                  securely and encrypted.
                </p>
                <p>
                  For more information about privacy at Brevo, please see:{" "}
                  <a
                    href="https://www.brevo.com/de/legal/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://www.brevo.com/de/legal/privacypolicy/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Usage Analytics with Microsoft Clarity
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  We work with Microsoft Clarity and Microsoft Advertising to
                  capture how you use and interact with our website. This is
                  done through behavioral metrics, heatmaps, and session replays
                  to improve and market our products/services. Website usage
                  data is collected using first- and third-party cookies and
                  other tracking technologies to determine the popularity of
                  products/services and online activities. Additionally, we use
                  this information for website optimization, fraud/security
                  purposes, and advertising. For more information about how
                  Microsoft collects and uses your data, please see the{" "}
                  <a
                    href="https://privacy.microsoft.com/de-de/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Microsoft Privacy Statement
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Unsubscribe from Newsletter
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  You can <strong>unsubscribe</strong> from the newsletter at
                  any time without any disadvantages. Unsubscribing is free and
                  can be done in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Click on the &quot;Unsubscribe&quot; link at the end of each
                    newsletter email
                  </li>
                  <li>
                    Send an email to{" "}
                    <a
                      href="mailto:info@histack.io"
                      className="text-red-600 hover:text-red-700 underline"
                    >
                      info@histack.io
                    </a>{" "}
                    with the subject &quot;Unsubscribe newsletter&quot;
                  </li>
                  <li>Contact us through the contact form on our website</li>
                </ul>
                <p>
                  After unsubscribing, your email data will be deleted from our
                  newsletter system, unless there are other legal reasons for
                  storage.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  You have the right to information, correction, deletion, and
                  restriction of processing of your personal data. You also have
                  the right to data portability and to object to processing.
                </p>
                <p>
                  If you have questions about data protection or wish to
                  exercise your rights, please contact us at:{" "}
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
                Changes to the Privacy Policy
              </h2>
              <div className="text-black leading-relaxed">
                <p>
                  We reserve the right to update this Privacy Policy as needed.
                  The current version can always be found on this page. We will
                  notify you of significant changes in a timely manner.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Contact</h2>
              <div className="text-black">
                <p>
                  <strong>Histack</strong>
                </p>
                <p>CEO: Konstantin Ristl</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@histack.io"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@histack.io
                  </a>
                </p>
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
