import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
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
  const sections = [
    { title: "The gap", copy: item.problem },
    { title: "The build", copy: item.approach },
    { title: "What it leaves", copy: item.outcome },
  ] as const;

  return (
    <Container className="py-16 sm:py-24">
      <Link href="/work" className="text-[13px] text-mute hover:text-fg">
        ← All work
      </Link>
      <p className="mt-8 text-[13px] text-blue">
        {item.status} · {item.year}
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] text-blue hover:text-blue-soft"
          >
            Repository ↗
          </a>
        ) : null}
      </div>
      <p className="mt-5 max-w-2xl text-[16px] leading-7 text-mute">
        {item.summary}
      </p>
      <p className="mt-4 text-[13px] text-faint">{item.stack.join("  ·  ")}</p>

      <div className="mt-14 max-w-2xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[13px] tracking-wide text-blue uppercase">
              {section.title}
            </h2>
            <p className="mt-3 text-[16px] leading-7">{section.copy}</p>
          </section>
        ))}
      </div>

      <ul className="mt-14 max-w-2xl space-y-3 border-t border-line pt-8">
        {item.notes.map((note) => (
          <li key={note} className="text-[15px] leading-6 text-mute">
            <span className="mr-2 text-blue">–</span>
            {note}
          </li>
        ))}
      </ul>

      <div className="mt-16 flex items-center justify-between text-[13px]">
        <Link href="/work" className="text-mute hover:text-fg">
          ← All work
        </Link>
        <Link href={`/work/${next.slug}`} className="text-blue hover:text-blue-soft">
          Next: {next.title} →
        </Link>
      </div>
    </Container>
  );
}
