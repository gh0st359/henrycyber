import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
