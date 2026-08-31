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
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel index="LOG" label="Field notes" />
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Operator log
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
        Sample notes drawn from things already said in public. Keep, rewrite,
        or delete.
      </p>
      <div className="mt-10 panel overflow-hidden">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className={`group grid gap-3 px-5 py-5 sm:grid-cols-[88px_minmax(0,1fr)] ${
              index > 0 ? "border-t border-[var(--line)]" : ""
            }`}
          >
            <span className="font-mono text-[11px] text-acid">{note.date}</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight group-hover:text-acid">
                {note.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{note.dek}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
