import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line-strong)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-acid uppercase">
            {site.brand}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            Preview site for {site.domain}. Copy and case studies are a starting
            point — swap in your voice, add the work you want public, point the
            domain when it feels right.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
          <Link href="/work" className="hover:text-ink">
            Work
          </Link>
          <Link href="/notes" className="hover:text-ink">
            Notes
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <a href={site.github} className="hover:text-ink" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
