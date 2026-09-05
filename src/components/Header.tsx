"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { label: "Fleet", href: "/fleet" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Network", href: "/network" },
  { label: "Partners", href: "/partners" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/e-mobilite-logo-real.png"
            alt="E-Mobilite"
            width={1615}
            height={480}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold uppercase tracking-wide text-text hover:text-brand transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-brand hover:text-white transition-all"
          >
            Work With Us
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-1 shadow-lg">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2.5 text-sm font-semibold uppercase tracking-wide text-text hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-accent"
            onClick={() => setOpen(false)}
          >
            Work With Us
          </Link>
        </nav>
      )}
    </header>
  );
}
