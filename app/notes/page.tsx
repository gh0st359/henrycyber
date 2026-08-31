import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short writing on agents, reconnaissance, and local-first security work.",
};

export default function NotesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <p className="text-[13px] tracking-wide text-blue uppercase">Notes</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
        Field notes
      </h1>
      <p className="mt-4 max-w-xl text-[16px] leading-7 text-mute">
        Short writing on agents, reconnaissance, and local-first security work.
      </p>
      <div className="mt-12 border-b border-line">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group grid gap-2 border-t border-line py-7 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-baseline"
          >
            <span className="text-[13px] text-mute">
              {note.date} · {note.reading}
            </span>
            <div>
              <h2 className="text-2xl tracking-tight group-hover:text-blue">
                {note.title}
              </h2>
              <p className="mt-2 max-w-xl text-[15px] leading-6 text-mute">
                {note.dek}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
