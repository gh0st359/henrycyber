import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.2em] text-acid uppercase">
        404 · No signal
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em]">
        This path is empty
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The page is missing or the slug changed. Head back to the brief.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit font-mono text-[11px] tracking-[0.16em] text-acid uppercase"
      >
        ← Return home
      </Link>
    </div>
  );
}
