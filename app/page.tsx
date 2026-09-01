import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

const destinations = [
  {
    href: "/work",
    label: "Work",
    copy: "Public systems — recon, agent harnesses, and MCP infrastructure.",
  },
  {
    href: "/notes",
    label: "Notes",
    copy: "Short writing on agents, reconnaissance, and local-first tooling.",
  },
  {
    href: "/about",
    label: "About",
    copy: "Background, location, and how I usually start.",
  },
  {
    href: "/contact",
    label: "Contact",
    copy: "A role, a collab, or a correction — opens a mail draft.",
  },
] as const;

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-24">
      <p className="text-[13px] text-blue">
        {site.name} · {site.location}
      </p>
      <h1 className="mt-5 max-w-3xl text-[2.4rem] leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Local-first security tools.
        <br />
        Systems that act.
      </h1>
      <p className="mt-6 max-w-xl text-[16px] leading-7 text-mute">
        I build reconnaissance platforms and agent harnesses that keep data on
        your machine and leave an audit trail another person can read.
      </p>

      <div className="mt-16 border-b border-line">
        {destinations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group grid gap-1 border-t border-line py-6 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
          >
            <span className="text-[14px] text-blue">{item.label}</span>
            <span className="text-[15px] leading-6 text-mute group-hover:text-fg">
              {item.copy}
            </span>
            <span className="hidden text-[13px] text-faint group-hover:text-blue sm:block">
              →
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
