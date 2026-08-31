import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write Henry Hilf about collaboration, roles, or research.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionLabel index="07" label="Contact" />
          <h1 className="mt-6 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
            Send a signal
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-muted">
            Collaboration, a role, a research thread, or a correction to this
            preview. The form opens a draft to {site.email} — no backend, no
            inbox middleman.
          </p>
          <dl className="mt-10 space-y-4 font-mono text-[12px] tracking-[0.08em]">
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-faint uppercase">
                Direct
              </dt>
              <dd className="mt-1 text-ink">{site.email}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-faint uppercase">
                Code
              </dt>
              <dd className="mt-1">
                <a href={site.github} className="text-acid" target="_blank" rel="noreferrer">
                  github.com/gh0st359
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
