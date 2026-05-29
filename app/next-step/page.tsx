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

  if (conversionUrn) {
    if (liFatId) {
      sendLinkedInConversion(liFatId, conversionUrn);
    } else if (process.env.NODE_ENV === "development") {
      sendLinkedInConversion("", conversionUrn, true);
    }
  }

  return (
    <div className="page-shell">
      <section className="py-24 section-pad">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-0 mb-12">
            <div className="hatched-bar mr-6 sm:mr-10 shrink-0" aria-hidden="true" />
            <div className="space-y-6">
              <p className="section-label">Next Step</p>
              <h1 className="text-4xl sm:text-5xl font-black text-ink font-heading leading-tight">
                Almost there.
                <br />
                <span className="highlight-block">Confirm your email.</span>
              </h1>
              <p className="text-lg text-slate max-w-2xl leading-relaxed">
                Thank you for your interest. You&apos;ll receive an email within
                the next few minutes with a download link to access your free
                guide.
              </p>
            </div>
          </div>

          <div className="editorial-card border-accent p-6 sm:p-8 mb-10 max-w-2xl">
            <p className="section-label text-accent mb-3">Important</p>
            <p className="text-ink leading-relaxed">
              <strong>You must click the confirmation link in the email</strong>{" "}
              to receive your free guide. Please also check your spam folder if
              you don&apos;t see the email in your inbox.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Check Your Email",
                text: "Look in your inbox (and spam folder) for our confirmation email",
              },
              {
                step: "02",
                title: "Click the Link",
                text: "Confirm your email address by clicking the confirmation link",
              },
              {
                step: "03",
                title: "Access Your Guide",
                text: "Get instant access to your free guide and start implementing",
              },
            ].map((item) => (
              <div key={item.step} className="editorial-card p-6 space-y-4">
                <span className="font-mono text-sm text-accent">{item.step}</span>
                <h3 className="text-lg font-bold text-ink font-heading">
                  {item.title}
                </h3>
                <p className="text-slate text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="editorial-card p-8 max-w-2xl space-y-6">
            <h2 className="text-2xl font-bold text-ink font-heading">
              What&apos;s Inside Your Guide?
            </h2>
            <ul className="space-y-4 text-slate">
              {[
                "Why 95% of SaaS founders waste their time on LinkedIn",
                "How the top 5% systematically and predictably win customers",
                "Measure real results instead of relying on hope",
                "Step-by-step guide with ready-to-use templates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent font-mono shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
