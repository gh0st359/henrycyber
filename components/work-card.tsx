import Link from "next/link";
import type { WorkItem } from "@/lib/content";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="panel group flex flex-col p-5 transition-colors hover:border-acid/30"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{item.status}</span>
        <span className="font-mono text-[11px] text-faint">{item.year}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink group-hover:text-acid">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.blurb}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.slice(0, 3).map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
