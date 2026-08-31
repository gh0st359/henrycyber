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
    <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel index={item.index} label="System" />
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        <span className="chip">
          {item.status} · {item.year}
        </span>
      </div>
      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">{item.summary}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-8">
          {[
            ["The gap", item.problem],
            ["The build", item.approach],
            ["What it leaves", item.outcome],
          ].map(([title, copy]) => (
            <section key={title} className="panel p-6">
              <h2 className="text-sm font-medium text-acid">{title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-ink/90">{copy}</p>
            </section>
          ))}
        </div>

        <aside className="panel h-fit p-5">
          <p className="text-sm font-medium text-ink">Hold points</p>
          <ul className="mt-4 space-y-3">
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
              className="mt-6 inline-flex text-[13px] text-acid"
            >
              Repository <span className="link-arrow ml-1">↗</span>
            </a>
          ) : null}
        </aside>
      </div>

      <div className="mt-12 flex items-center justify-between text-[13px]">
        <Link href="/work" className="text-muted hover:text-ink">
          ← All work
        </Link>
        <Link href={`/work/${next.slug}`} className="text-acid">
          Next: {next.title} →
        </Link>
      </div>
    </article>
  );
}
