import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { WorkCard } from "@/components/work-card";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected public projects from Henry Hilf.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel index="SYS" label="Selected systems" />
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Public systems
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
        Axiom is recon. Tyraxes is the operator harness. xmcp is agent
        infrastructure. Swap these for whatever should sit on the board first.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {work.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
