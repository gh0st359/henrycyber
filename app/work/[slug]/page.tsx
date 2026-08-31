import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/section-label";
import { getWork, work } from "@/lib/content";

type WorkParams = { slug: string };

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const next = work[(work.findIndex((entry) => entry.slug === slug) + 1) % work.length];

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionLabel index={item.index} label="Case brief" />
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h1 className="font-serif text-5xl tracking-[-0.03em] sm:text-7xl">
          {item.title}
        </h1>
        <p className="font-mono text-[11px] tracking-[0.18em] text-copper uppercase">
          {item.status} · {item.year}
        </p>
      </div>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{item.summary}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="border border-[var(--line-strong)] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-acid uppercase">
              The gap
            </h2>
            <p className="mt-3 text-base leading-8 text-ink/90">{item.problem}</p>
          </section>
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-acid uppercase">
              The build
            </h2>
            <p className="mt-3 text-base leading-8 text-ink/90">{item.approach}</p>
          </section>
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-acid uppercase">
              What it leaves
            </h2>
            <p className="mt-3 text-base leading-8 text-ink/90">{item.outcome}</p>
          </section>
        </div>

        <aside className="panel h-fit p-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
            Hold points
          </p>
          <ul className="mt-5 space-y-4">
            {item.notes.map((note) => (
              <li key={note} className="text-sm leading-6 text-muted">
                {note}
              </li>
            ))}
          </ul>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex font-mono text-[11px] tracking-[0.16em] text-acid uppercase"
            >
              Repository <span className="link-arrow ml-2">↗</span>
            </a>
          ) : null}
        </aside>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--line-strong)] pt-8">
        <Link
          href="/work"
          className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-ink"
        >
          ← All work
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="font-mono text-[11px] tracking-[0.16em] text-acid uppercase"
        >
          Next: {next.title} →
        </Link>
      </div>
    </article>
  );
}
