"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignalClock } from "@/components/signal-clock";

const links = [
  { href: "/work", label: "Work" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-strong)] bg-[rgba(6,8,12,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-acid/12 font-mono text-[10px] font-medium text-acid">
            HC
          </span>
          <span className="text-[13px] font-medium tracking-tight text-ink">
            henrycyber
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[var(--line-strong)] bg-panel/70 p-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                  active ? "bg-ink/8 text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            Live
          </span>
          <SignalClock />
        </div>

        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-[var(--line-strong)] text-[12px] text-muted md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line-strong)] bg-bg/95 px-5 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
