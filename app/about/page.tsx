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
  ["Public handle", "gh0st359"],
  ["Mail", site.email],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionLabel index="05" label="About" />
      <div className="mt-6 grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <h1 className="font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
            Operator, not a template
          </h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-muted">
            <p>
              I am {site.name}, based in {site.location}. I came up through
              freelance software and AI research, then pointed that energy at
              cybersecurity — not as a career-change slogan, as a build
              program.
            </p>
            <p>
              The through-line is simple: collect signal locally, give an
              agent enough structure to be useful, and leave an artifact another
              person can audit. That is Axiom. That is Tyraxes. That is why a
              site called {site.domain} should feel like a briefing, not a
              résumé theme.
            </p>
            <p>
              Public coursework includes Google&apos;s Foundations of
              Cybersecurity and Assets, Threats, and Vulnerabilities, plus
              introductory ethical hacking study. The more honest credential is
              the work: tools that run on your machine and get sharper over
              versions.
            </p>
          </div>
        </div>

        <aside className="panel p-6 sm:p-7">
          <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
            File
          </p>
          <dl className="mt-5 divide-y divide-[var(--line-strong)]">
            {facts.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  {label}
                </dt>
                <dd className="text-right text-sm text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex gap-4 font-mono text-[11px] tracking-[0.16em] uppercase">
            <a href={site.github} className="text-acid" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={site.linkedin} className="text-acid" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-20 border-t border-[var(--line-strong)] pt-14">
        <SectionLabel index="06" label="Make it yours" />
        <h2 className="mt-5 font-serif text-3xl tracking-[-0.02em] sm:text-4xl">
          What this preview is for
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            [
              "Swap the copy",
              "Edit lib/content.ts and lib/site.ts. Titles, case studies, and notes all live there.",
            ],
            [
              "Add the real work",
              "Drop private projects you actually want public. Hide anything that should stay in the lab.",
            ],
            [
              "Point the domain",
              "When the tone is right, attach henrycyber.com in your DNS and Vercel project settings.",
            ],
          ].map(([title, copy], index) => (
            <li key={title} className="panel p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] text-acid">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/contact"
          className="mt-10 inline-flex h-11 items-center bg-acid px-5 font-mono text-[11px] tracking-[0.16em] text-bg uppercase"
        >
          Get in touch <span className="link-arrow ml-2">→</span>
        </Link>
      </section>
    </div>
  );
}
