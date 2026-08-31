"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-black/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight">
          <span className="text-blue">●</span> {site.brand}
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-fg"
                    : "text-mute transition-colors hover:text-fg"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="text-[13px] text-mute md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
