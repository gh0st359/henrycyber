import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { SignalClock } from "@/components/signal-clock";
import { notes, practices, work } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            Preview build · {site.location}
          </span>
          <SignalClock />
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div>
            <SectionLabel index="01" label="Identity" />
            <h1 className="mt-6 font-serif text-[clamp(3.4rem,10vw,7.2rem)] leading-[0.88] tracking-[-0.03em] text-ink">
              Henry
              <br />
              Hilf
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              I build local-first security tools and agentic systems that turn
              raw infrastructure into something you can act on.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex h-11 items-center bg-acid px-5 font-mono text-[11px] tracking-[0.16em] text-bg uppercase"
              >
                Selected work
                <span className="link-arrow ml-2">→</span>
              </Link>
              <Link
                href="/notes"
                className="inline-flex h-11 items-center border border-[var(--line-strong)] px-5 font-mono text-[11px] tracking-[0.16em] text-ink uppercase hover:border-acid/40"
              >
                Field notes
              </Link>
            </div>
          </div>

          <aside className="panel p-6 sm:p-7">
            <p className="font-mono text-[10px] tracking-[0.22em] text-copper uppercase">
              Current brief
            </p>
            <dl className="mt-5 grid gap-5">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  Focus
                </dt>
                <dd className="mt-1 text-sm leading-6 text-ink">
                  Recon platforms, operator harnesses, MCP tooling
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  Based
                </dt>
                <dd className="mt-1 text-sm leading-6 text-ink">{site.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  Public line
                </dt>
                <dd className="mt-1 text-sm leading-6 text-ink">
                  AI research × cybersecurity. Builder first.
                </dd>
              </div>
            </dl>
            <div className="rule mt-6" />
            <p className="mt-5 font-mono text-[11px] leading-5 tracking-[0.08em] text-muted">
              This is a test site for {site.domain}. Click around. Replace
              anything that does not sound like you.
            </p>
          </aside>
        </div>
      </section>

      <div className="rule" />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel index="02" label="Selected work" />
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
              Things that already exist
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden font-mono text-[11px] tracking-[0.16em] text-acid uppercase sm:inline-flex"
          >
            All work <span className="link-arrow ml-2">→</span>
          </Link>
        </div>

        <div className="mt-10 divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
          {work.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group grid gap-4 py-8 sm:grid-cols-[72px_minmax(0,1fr)_160px] sm:items-start"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-acid">
                {item.index}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-3xl tracking-[-0.02em] group-hover:text-acid">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-copper uppercase">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  {item.summary}
                </p>
              </div>
              <span className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase sm:text-right">
                {item.year}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line-strong)] bg-bg-2/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionLabel index="03" label="Practice" />
          <h2 className="mt-5 max-w-xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Four lanes I keep coming back to
          </h2>
          <div className="mt-12 grid gap-px bg-[var(--line-strong)] sm:grid-cols-2">
            {practices.map((practice) => (
              <article key={practice.title} className="bg-bg p-6 sm:p-8">
                <p className="font-mono text-[11px] tracking-[0.18em] text-acid">
                  {practice.index}
                </p>
                <h3 className="mt-4 font-serif text-2xl">{practice.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{practice.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionLabel index="04" label="Notes" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="panel group p-6 transition-colors hover:border-acid/30 sm:p-8"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {note.date} · {note.reading}
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-[-0.02em] group-hover:text-acid">
                {note.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{note.dek}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
