import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short writing on agents, reconnaissance, and local-first security work.",
};

export default function NotesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Notes"
        title="Field notes"
        description="Short writing on agents, reconnaissance, and local-first security work. Keep, rewrite, or delete."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <Card key={note.slug} className="h-full">
            <CardHeader>
              <CardDescription>
                {note.date} · {note.reading}
              </CardDescription>
              <CardTitle className="text-xl">{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-6 text-muted-foreground">{note.dek}</p>
              <Button
                variant="link"
                className="mt-4 h-auto px-0"
                render={<Link href={`/notes/${note.slug}`} />}
              >
                Read note
                <ArrowRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
