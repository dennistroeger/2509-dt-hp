"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-auto aspect-[3/4]">
                <Image
                  src="/images/TheInboxPlaybook.png"
                  alt="Histack Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                The Inbox Playbook
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
