import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.location} · {site.availability}
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link href="/work" className="text-muted-foreground hover:text-foreground">
            Work
          </Link>
          <Link href="/notes" className="text-muted-foreground hover:text-foreground">
            Notes
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <a
            href={site.github}
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <Separator />
      <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted-foreground sm:px-8">
        {site.domain} · Built as a working draft, not a finished brand.
      </p>
    </footer>
  );
}
