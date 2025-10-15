"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/histack-logo.svg"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
