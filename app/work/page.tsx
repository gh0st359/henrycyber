import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected public projects from Henry Hilf.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionLabel index="02" label="Selected work" />
      <h1 className="mt-6 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
        Public systems
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
        Three projects you can already point at. Axiom is the recon foundation.
        Tyraxes is the operator harness. xmcp is agent infrastructure. Swap
        these for whatever you want the world to see first.
      </p>

      <div className="mt-14 grid gap-6">
        {work.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="panel group grid gap-6 p-6 transition-colors hover:border-acid/30 sm:grid-cols-[1fr_220px] sm:p-8"
          >
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-acid">
                {item.index} / {item.year}
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.02em] group-hover:text-acid">
                {item.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                {item.blurb}
              </p>
              <p className="mt-5 font-mono text-[11px] tracking-[0.16em] text-ink uppercase">
                Open brief <span className="link-arrow">→</span>
              </p>
            </div>
            <div className="flex flex-col justify-between gap-6 border-t border-[var(--line-strong)] pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
              <p className="font-mono text-[10px] tracking-[0.18em] text-copper uppercase">
                {item.status}
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] tracking-[0.06em] text-muted">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
