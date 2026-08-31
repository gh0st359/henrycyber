import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell className="flex min-h-[60vh] flex-col justify-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        This path is empty
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        The page is missing or the slug changed. Head back to the start.
      </p>
      <Button className="mt-7 w-fit" render={<Link href="/" />}>
        Return home
      </Button>
    </PageShell>
  );
}
