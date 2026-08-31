import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write Henry Hilf about collaboration, roles, or research.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-[13px] tracking-wide text-blue uppercase">Contact</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-sm text-[16px] leading-7 text-mute">
            Collaboration, a role, research, or a correction. The form opens a
            draft to {site.email} — no backend in the middle.
          </p>
          <dl className="mt-10 space-y-4 text-[14px]">
            <div>
              <dt className="text-faint">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-blue">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-faint">GitHub</dt>
              <dd className="mt-1">
                <a href={site.github} className="hover:text-blue" target="_blank" rel="noreferrer">
                  github.com/{site.handle}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
