import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-4 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-mute">
          {site.name}
          <span className="text-faint"> · </span>
          {site.location}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-mute">
          <Link href="/work" className="hover:text-fg">
            Work
          </Link>
          <Link href="/notes" className="hover:text-fg">
            Notes
          </Link>
          <Link href="/about" className="hover:text-fg">
            About
          </Link>
          <a href={site.github} className="hover:text-fg" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} className="hover:text-fg" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </Container>
    </footer>
  );
}
