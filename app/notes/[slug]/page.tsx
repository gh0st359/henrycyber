import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
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
    <Container className="max-w-[720px] py-16 sm:py-24">
      <Link href="/notes" className="text-[13px] text-mute hover:text-fg">
        ← All notes
      </Link>
      <p className="mt-8 text-[13px] text-blue">
        {note.date} · {note.reading}
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-pretty sm:text-5xl">
        {note.title}
      </h1>
      <p className="mt-5 text-[16px] leading-7 text-mute">{note.dek}</p>
      <div className="mt-10 space-y-5">
        {note.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-[16px] leading-7">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-14 border-t border-line pt-6">
        <Link href="/notes" className="text-[13px] text-blue hover:text-blue-soft">
          ← All notes
        </Link>
      </div>
    </Container>
  );
}
