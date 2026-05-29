"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 border-b border-rule">
      <div className="max-w-6xl mx-auto section-pad">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-stretch min-h-20">
            <div className="hatched-bar mr-4 hidden sm:block" aria-hidden="true" />
            <Link href="/" className="flex items-center gap-3 py-4">
              <div className="relative h-10 w-auto aspect-[3/4]">
                <Image
                  src="/images/TheInboxPlaybook.png"
                  alt="The Inbox Playbook Logo"
                  width={30}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading font-black text-lg text-ink tracking-tight">
                The Inbox Playbook
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#prozess"
              className="section-label hover:text-accent transition-colors"
            >
              Prozess
            </Link>
            <Link
              href="#stack"
              className="section-label hover:text-accent transition-colors"
            >
              Angebot
            </Link>
            <Link
              href="#faq"
              className="section-label hover:text-accent transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <Link
            href="https://cal.com/dennis-debus/lets-talk"
            className="btn-primary text-xs px-5 py-3"
          >
            Potenzial-Check
          </Link>
        </div>
      </div>
    </header>
  );
}
