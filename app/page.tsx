import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { WorkCard } from "@/components/work-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { notes, practices, skills, stats, work } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <PageShell className="pb-10 sm:pb-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{site.location}</Badge>
              <Badge variant="outline">{site.availability}</Badge>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{site.name}</p>
            <h1 className="mt-2 max-w-xl text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              Local-first security tools. Systems that act.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground text-pretty">
              I build reconnaissance platforms and agent harnesses that keep
              data on your machine and leave an audit trail another operator
              can read.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/work" />}>
                View systems
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button variant="outline" render={<Link href="/contact" />}>
                Get in touch
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar size="lg" className="size-12">
                <AvatarFallback className="bg-primary/15 text-primary">
                  HH
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{site.name}</CardTitle>
                <CardDescription>{site.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Based in</span>
                <span>{site.location}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Focus</span>
                <span>Recon, agents, MCP</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Public work</span>
                <span>{work.length} systems</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Handle</span>
                <span>{site.handle}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} size="sm">
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </PageShell>

      <PageShell className="pt-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Selected systems</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Work in public
            </h2>
          </div>
          <Button variant="ghost" size="sm" render={<Link href="/work" />}>
            All work
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {work.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </PageShell>

      <section className="border-y border-border bg-card/40">
        <PageShell>
          <p className="text-sm font-medium text-primary">Practice</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            How the work is scoped
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Four lanes I keep coming back to. The tools change; the constraints
            do not.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => (
              <Card key={practice.title} className="h-full">
                <CardHeader>
                  <CardDescription>{practice.index}</CardDescription>
                  <CardTitle>{practice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-6 text-muted-foreground">
                    {practice.copy}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium">Stack and surfaces</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <PageShell>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Notes</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Recent writing
            </h2>
          </div>
          <Button variant="ghost" size="sm" render={<Link href="/notes" />}>
            All notes
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <Card key={note.slug} className="h-full">
              <CardHeader>
                <CardDescription>
                  {note.date} · {note.reading}
                </CardDescription>
                <CardTitle className="text-lg">{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-6 text-muted-foreground">{note.dek}</p>
                <Button
                  variant="link"
                  className="mt-3 h-auto px-0"
                  render={<Link href={`/notes/${note.slug}`} />}
                >
                  Read note
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader className="sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Have something scoped?</CardTitle>
              <CardDescription className="mt-1 max-w-md">
                Collaboration, a role, or a research question. No intake form
                behind a vendor — just a mail draft.
              </CardDescription>
            </div>
            <Button className="mt-4 sm:mt-0" render={<Link href="/contact" />}>
              Contact
            </Button>
          </CardHeader>
        </Card>
      </PageShell>
    </div>
  );
}
