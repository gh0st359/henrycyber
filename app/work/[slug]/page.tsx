import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <PageShell>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 text-muted-foreground"
        render={<Link href="/work" />}
      >
        <ArrowLeft data-icon="inline-start" />
        All work
      </Button>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{item.status}</Badge>
            <Badge variant="outline">{item.year}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground text-pretty">
            {item.summary}
          </p>
        </div>
        {item.href ? (
          <Button variant="outline" render={<a href={item.href} target="_blank" rel="noreferrer" />}>
            Repository
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-pretty">{section.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Hold points</CardTitle>
            <CardDescription>What to keep in mind after the page.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {item.notes.map((note) => (
                <li key={note}>
                  <Separator className="mb-3" />
                  <p className="leading-6 text-muted-foreground">{note}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <Button variant="ghost" size="sm" render={<Link href="/work" />}>
          <ArrowLeft data-icon="inline-start" />
          All work
        </Button>
        <Button variant="ghost" size="sm" render={<Link href={`/work/${next.slug}`} />}>
          Next: {next.title}
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </PageShell>
  );
}
