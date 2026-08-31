import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short writing on agents, reconnaissance, and local-first security work.",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionLabel index="04" label="Field notes" />
      <h1 className="mt-6 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
        Writing you can replace
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
        Two sample essays drawn from things you have already said in public.
        Use them as tone samples — keep, rewrite, or delete.
      </p>

      <div className="mt-14 divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group grid gap-3 py-8 sm:grid-cols-[88px_minmax(0,1fr)]"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-acid">
              {note.index}
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                {note.date} · {note.reading}
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-[-0.02em] group-hover:text-acid">
                {note.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{note.dek}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
