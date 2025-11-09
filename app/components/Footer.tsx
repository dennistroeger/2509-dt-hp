import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <p className="text-white text-sm">
              Systematic meetings instead of &quot;Content Hamster Wheel&quot;
              <br />
              Systematic customer acquisition
              <br />
              Top 5% Strategies
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <div className="text-white text-sm space-y-1">
              <Link href="/datenschutz" className="hover:text-gray-300 underline">
                Privacy Policy
              </Link>

              <p>
                <Link href="/imprint" className="hover:text-gray-300 underline">
                  Imprint
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white text-center md:text-left">
              COPYRIGHT 2024® ALL RIGHTS RESERVED | dennisdebus.com
            </p>
            <div className="text-xs text-white text-center md:text-right max-w-md">
              <p className="mb-2">
                We use Microsoft Clarity to understand how you use our website
                and to improve our products and advertising. By using our
                website, you consent to the collection and use of this data by
                us and Microsoft. For more details, please see our{" "}
                <Link
                  href="/datenschutz"
                  className="underline hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mb-2">
                I am committed to protecting your privacy. I use the information
                you provide to contact you about my relevant content, products,
                and services. You can unsubscribe from these communications at
                any time.
              </p>
              <p>
                This website is not part of LinkedIn or Microsoft INC.
                Additionally, this website is NOT endorsed by LinkedIn in any
                way. LINKEDIN is a trademark of LINKEDIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
