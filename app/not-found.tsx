import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="font-mono text-[11px] text-acid">404 · No signal</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        This path is empty
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted">
        The page is missing or the slug changed. Return to the console.
      </p>
      <Link href="/" className="btn-ghost mt-7 w-fit">
        Return home
      </Link>
    </div>
  );
}
