"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-auto aspect-[3/4]">
                <Image
                  src="/images/TheInboxPlaybook.png"
                  alt="The Inbox Playbook Logo"
                  width={36}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight font-heading">
                The Inbox Playbook
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#prozess"
              className="text-sm font-medium text-slate-600 hover:text-[#FE5454] transition-colors"
            >
              Prozess
            </Link>
            <Link
              href="#stack"
              className="text-sm font-medium text-slate-600 hover:text-[#FE5454] transition-colors"
            >
              Stack
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-[#FE5454] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center">
            <Link
              href="https://cal.com/dennis-debus/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium transition-all hover:bg-[#FE5454] hover:scale-[1.02]"
            >
              Potenzial-Check
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
