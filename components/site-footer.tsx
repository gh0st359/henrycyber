import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line-strong)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-muted">
          <span className="text-ink">{site.brand}</span>
          <span className="mx-2 text-faint">/</span>
          Preview for {site.domain}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
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
