import Link from "next/link";
import { Container } from "@/components/container";
import { WorkRow } from "@/components/work-row";
import { notes, practices, work } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-[13px] text-blue">
          {site.name} · {site.location}
        </p>
        <h1 className="mt-5 max-w-3xl text-[2.6rem] leading-[1.08] font-medium tracking-tight sm:text-6xl">
          Local-first security tools.
          <br />
          Systems that act.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-7 text-mute">
          I build reconnaissance platforms and agent harnesses that keep data
          on your machine and leave an audit trail another person can read.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-[14px]">
          <Link href="/work" className="text-blue hover:text-blue-soft">
            View work →
          </Link>
          <Link href="/contact" className="text-mute hover:text-fg">
            Get in touch
          </Link>
        </div>
      </Container>

      <Container className="pb-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[13px] tracking-wide text-blue uppercase">
            Selected work
          </h2>
          <Link href="/work" className="text-[13px] text-mute hover:text-fg">
            All systems
          </Link>
        </div>
        <div className="mt-4 border-b border-line">
          {work.map((item) => (
            <WorkRow key={item.slug} item={item} />
          ))}
        </div>
      </Container>

      <section className="border-y border-line">
        <Container className="py-16 sm:py-20">
          <h2 className="text-[13px] tracking-wide text-blue uppercase">
            Practice
          </h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {practices.map((practice) => (
              <div key={practice.title}>
                <p className="text-[13px] text-blue">{practice.index}</p>
                <h3 className="mt-2 text-lg tracking-tight">{practice.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-mute">
                  {practice.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <h2 className="text-[13px] tracking-wide text-blue uppercase">Notes</h2>
        <div className="mt-4 border-b border-line">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group grid gap-2 border-t border-line py-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-baseline"
            >
              <span className="text-[13px] text-mute">{note.date}</span>
              <div>
                <p className="text-lg tracking-tight group-hover:text-blue">
                  {note.title}
                </p>
                <p className="mt-2 text-[15px] leading-6 text-mute">{note.dek}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
