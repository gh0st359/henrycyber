import type { Metadata } from "next";
import { Container } from "@/components/container";
import { WorkRow } from "@/components/work-row";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected public projects from Henry Hilf.",
};

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-24">
      <p className="text-[13px] tracking-wide text-blue uppercase">Work</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
        Public systems
      </h1>
      <p className="mt-4 max-w-xl text-[16px] leading-7 text-mute">
        Axiom is recon. Tyraxes is the operator harness. xmcp is agent
        infrastructure. Three public projects, written so another person can
        follow the constraint.
      </p>
      <div className="mt-12 border-b border-line">
        {work.map((item) => (
          <WorkRow key={item.slug} item={item} />
        ))}
      </div>
    </Container>
  );
}
