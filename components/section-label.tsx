export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-panel/80 px-2.5 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
      <span className="font-mono text-[10px] tracking-[0.14em] text-faint">
        {index}
      </span>
      <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
