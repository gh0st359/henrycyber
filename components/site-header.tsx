"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 z-40 border-b border-[var(--line-strong)] bg-[rgba(7,8,11,0.78)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center border border-acid/40 bg-acid/10 font-mono text-[11px] font-medium tracking-[0.14em] text-acid">
            HC
          </span>
          <span className="font-mono text-[12px] tracking-[0.22em] text-ink uppercase">
            henrycyber
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-acid" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center border border-[var(--line-strong)] font-mono text-[10px] tracking-[0.16em] text-muted md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "CLS" : "NAV"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line-strong)] bg-bg/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[12px] tracking-[0.2em] uppercase text-ink"
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
