import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <PageShell className="max-w-3xl">
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 text-muted-foreground"
        render={<Link href="/notes" />}
      >
        <ArrowLeft data-icon="inline-start" />
        All notes
      </Button>
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge variant="secondary">{note.date}</Badge>
        <Badge variant="outline">{note.reading}</Badge>
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
        {note.title}
      </h1>
      <p className="mt-5 text-[15px] leading-7 text-muted-foreground text-pretty">
        {note.dek}
      </p>
      <Separator className="my-8" />
      <div className="space-y-5">
        {note.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-[15px] leading-7 text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Separator className="mt-12 mb-6" />
      <Button variant="ghost" size="sm" render={<Link href="/notes" />}>
        <ArrowLeft data-icon="inline-start" />
        All notes
      </Button>
    </PageShell>
  );
}
