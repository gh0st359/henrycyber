import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { WorkCard } from "@/components/work-card";
import { notes, practices, work } from "@/lib/content";
import { site } from "@/lib/site";

const telemetry = [
  ["Station", site.location],
  ["Focus", "Recon · agents · MCP"],
  ["Mode", "Builder"],
  ["Channel", site.domain],
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div>
            <SectionLabel index="OPS" label="Operator profile" />
            <p className="mt-6 text-sm text-muted">Henry Hilf</p>
            <h1 className="mt-2 max-w-xl text-[2.4rem] leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl">
              Local-first security tools. Systems that act.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">
              I build reconnaissance platforms and agent harnesses that keep
              data on your machine and leave an audit trail another operator
              can read.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="btn-primary">
                View systems
              </Link>
              <Link href="/contact" className="btn-ghost">
                Open a channel
              </Link>
            </div>
          </div>

          <aside className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--line-strong)] px-5 py-3">
              <span className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-acid">
                <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                ONLINE
              </span>
            </div>
            <dl>
              {telemetry.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-5 py-3 last:border-b-0"
                >
                  <dt className="font-mono text-[11px] text-faint">{label}</dt>
                  <dd className="text-right text-[13px] text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <SectionLabel index="SYS" label="Selected systems" />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              In the field
            </h2>
          </div>
          <Link href="/work" className="text-[13px] text-acid hover:underline">
            All work <span className="link-arrow">→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {work.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line-strong)] bg-bg-2/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionLabel index="MOD" label="Practice" />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Operating lanes
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => (
              <article key={practice.title} className="panel p-5">
                <p className="font-mono text-[11px] text-acid">{practice.index}</p>
                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{practice.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionLabel index="LOG" label="Notes" />
        <div className="mt-6 panel overflow-hidden">
          {notes.map((note, index) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className={`group flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                index > 0 ? "border-t border-[var(--line)]" : ""
              }`}
            >
              <div>
                <h3 className="text-[15px] font-medium tracking-tight group-hover:text-acid">
                  {note.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{note.dek}</p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-faint">
                {note.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
