import Link from "next/link";
import type { WorkItem } from "@/lib/content";

export function WorkRow({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group grid gap-2 border-t border-line py-7 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
    >
      <span className="text-[13px] text-blue">{item.index}</span>
      <div>
        <p className="text-xl tracking-tight group-hover:text-blue sm:text-2xl">
          {item.title}
        </p>
        <p className="mt-2 max-w-xl text-[15px] leading-6 text-mute">{item.blurb}</p>
        <p className="mt-3 text-[13px] text-faint">{item.stack.join("  ·  ")}</p>
      </div>
      <span className="text-[13px] text-mute">
        {item.year}
        <span className="ml-3 text-faint group-hover:text-blue">→</span>
      </span>
    </Link>
  );
}
