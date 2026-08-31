import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/section-label";
import { getNote, notes } from "@/lib/content";

type NoteParams = { slug: string };

export function generateStaticParams() {
  return notes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<NoteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.dek,
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<NoteParams>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionLabel index={note.index} label="Note" />
      <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        {note.date} · {note.reading}
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
        {note.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">{note.dek}</p>
      <div className="mt-12 space-y-6">
        {note.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-8 text-ink/90">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-16 border-t border-[var(--line-strong)] pt-8">
        <Link
          href="/notes"
          className="font-mono text-[11px] tracking-[0.16em] text-acid uppercase"
        >
          ← All notes
        </Link>
      </div>
    </article>
  );
}
