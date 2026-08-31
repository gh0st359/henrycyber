import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { WorkCard } from "@/components/work-card";
import { Badge } from "@/components/ui/badge";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected public projects from Henry Hilf.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Work"
        title="Public systems"
        description="Axiom is recon. Tyraxes is the operator harness. xmcp is agent infrastructure. Three public projects, written so another person can follow the constraint."
      />
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge variant="secondary">{work.length} projects</Badge>
        <Badge variant="outline">Local-first</Badge>
        <Badge variant="outline">Authorized-use only</Badge>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {work.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </div>
    </PageShell>
  );
}
