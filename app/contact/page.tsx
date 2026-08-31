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
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <SectionLabel index="COM" label="Contact" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Open a channel
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
            Collaboration, a role, research, or a correction. The form opens a
            draft to {site.email} — no backend in the middle.
          </p>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="font-mono text-[11px] text-faint">Direct</dt>
              <dd className="mt-1 text-[14px] text-ink">{site.email}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-faint">Code</dt>
              <dd className="mt-1">
                <a href={site.github} className="text-[14px] text-acid" target="_blank" rel="noreferrer">
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
