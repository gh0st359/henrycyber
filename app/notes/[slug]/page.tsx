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
    <article className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel index={note.index} label="Note" />
      <p className="mt-5 font-mono text-[11px] text-muted">
        {note.date} · {note.reading}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {note.title}
      </h1>
      <p className="mt-5 text-[15px] leading-7 text-muted">{note.dek}</p>
      <div className="mt-10 space-y-5">
        {note.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-[15px] leading-7 text-ink/90">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-12 border-t border-[var(--line-strong)] pt-6">
        <Link href="/notes" className="text-[13px] text-acid">
          ← All notes
        </Link>
      </div>
    </article>
  );
}
