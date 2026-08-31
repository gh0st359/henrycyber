export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
      <span className="text-acid">{index}</span>
      <span className="h-px w-8 bg-acid/40" />
      <span>{label}</span>
    </div>
  );
}
