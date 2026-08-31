import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Henry Hilf — Pittsburgh. Security research, agentic systems, local-first tools.",
};

const facts = [
  ["Name", site.name],
  ["Station", site.location],
  ["Domain", site.domain],
  ["Handle", "gh0st359"],
  ["Mail", site.email],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel index="ID" label="About" />
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Operator first
          </h1>
          <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted">
            <p>
              I am {site.name}, based in {site.location}. I came up through
              freelance software and AI research, then pointed that energy at
              cybersecurity — as a build program, not a slogan.
            </p>
            <p>
              The through-line is simple: collect signal locally, give an
              agent enough structure to be useful, and leave an artifact
              another person can audit. That is Axiom. That is Tyraxes. That
              is why {site.domain} should feel like a console, not a template.
            </p>
            <p>
              Public coursework includes Google&apos;s Foundations of
              Cybersecurity and Assets, Threats, and Vulnerabilities, plus
              introductory ethical hacking study. The more honest credential is
              the work.
            </p>
          </div>
        </div>

        <aside className="panel overflow-hidden">
          <div className="border-b border-[var(--line-strong)] px-5 py-3">
            <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              Identity file
            </p>
          </div>
          <dl>
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-5 py-3 last:border-b-0"
              >
                <dt className="font-mono text-[11px] text-faint">{label}</dt>
                <dd className="text-right text-[13px] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-4 px-5 py-4 text-[13px]">
            <a href={site.github} className="text-acid" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={site.linkedin} className="text-acid" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <SectionLabel index="CFG" label="Make it yours" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          What this preview is for
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Swap the copy", "Edit lib/content.ts and lib/site.ts."],
            ["Add the real work", "Publish only what should be on the board."],
            ["Point the domain", "Attach henrycyber.com in DNS and Vercel."],
          ].map(([title, copy], index) => (
            <li key={title} className="panel p-5">
              <p className="font-mono text-[11px] text-acid">0{index + 1}</p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </li>
          ))}
        </ol>
        <Link href="/contact" className="btn-primary mt-8">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
