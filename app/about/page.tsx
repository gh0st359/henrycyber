import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { practices, skills } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Henry Hilf — Pittsburgh. Security research, agentic systems, local-first tools.",
};

const facts = [
  { label: "Name", value: site.name },
  { label: "Station", value: site.location },
  { label: "Domain", value: site.domain },
  { label: "Handle", value: site.handle },
  { label: "Mail", value: site.email },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <PageIntro
            eyebrow="About"
            title="Builder first"
            description={`I am ${site.name}, based in ${site.location}. Freelance software and AI research, then pointed at cybersecurity as a build program — not a slogan.`}
          />
          <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted-foreground">
            <p>
              The through-line is simple: collect signal locally, give an
              agent enough structure to be useful, and leave an artifact
              another person can audit. That is Axiom. That is Tyraxes. That
              is why the site stays quiet on purpose.
            </p>
            <p>
              Public coursework includes Google&apos;s Foundations of
              Cybersecurity and Assets, Threats, and Vulnerabilities, plus
              introductory ethical hacking study. The more honest credential is
              the work.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/contact" />}>Get in touch</Button>
            <Button variant="outline" render={<a href={site.github} target="_blank" rel="noreferrer" />}>
              GitHub
            </Button>
            <Button variant="outline" render={<a href={site.linkedin} target="_blank" rel="noreferrer" />}>
              LinkedIn
            </Button>
          </div>
        </div>

        <Card className="h-fit">
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
            {facts.map((fact, index) => (
              <div key={fact.label}>
                {index > 0 ? <Separator className="mb-3" /> : null}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">{fact.label}</span>
                  <span className="text-right">{fact.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <section className="mt-16">
        <p className="text-sm font-medium text-primary">Practice</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight">
          How I usually start
        </h2>
        <Accordion className="mt-6" defaultValue={["01"]}>
          {practices.map((practice) => (
            <AccordionItem key={practice.title} value={practice.index}>
              <AccordionTrigger>
                <span className="mr-2 text-muted-foreground">{practice.index}</span>
                {practice.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {practice.copy}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageShell>
  );
}
