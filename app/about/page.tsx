import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { practices, skills } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Henry Hilf — Pittsburgh. Security research, agentic systems, local-first tools.",
};

const facts = [
  { label: "Name", value: site.name },
  { label: "Location", value: site.location },
  { label: "Domain", value: site.domain },
  { label: "Handle", value: site.handle },
  { label: "Email", value: site.email },
] as const;

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <p className="text-[13px] tracking-wide text-blue uppercase">About</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-2 text-[15px] text-mute">{site.role}</p>

      <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
        <div className="space-y-5 text-[16px] leading-7 text-mute">
          <p>
            I am based in {site.location}. Freelance software and AI research,
            then pointed at cybersecurity as a build program — not a slogan.
          </p>
          <p>
            The through-line is simple: collect signal locally, give an agent
            enough structure to be useful, and leave an artifact another person
            can audit. That is Axiom. That is Tyraxes.
          </p>
          <p>
            Public coursework includes Google&apos;s Foundations of
            Cybersecurity and Assets, Threats, and Vulnerabilities, plus
            introductory ethical hacking study. The more honest credential is
            the work.
          </p>
          <p className="text-[13px] leading-6 text-faint">{skills.join("  ·  ")}</p>
          <div className="flex flex-wrap gap-5 pt-2 text-[14px]">
            <Link href="/contact" className="text-blue hover:text-blue-soft">
              Get in touch →
            </Link>
            <a href={site.github} className="text-mute hover:text-fg" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} className="text-mute hover:text-fg" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <dl className="space-y-4 border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between gap-4 text-[14px]">
              <dt className="text-faint">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="text-[13px] tracking-wide text-blue uppercase">
          How I usually start
        </h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {practices.map((practice) => (
            <div key={practice.title}>
              <p className="text-[13px] text-blue">{practice.index}</p>
              <h3 className="mt-2 text-lg tracking-tight">{practice.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-mute">{practice.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
