"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="flex size-6 items-center justify-center rounded-md bg-primary/15 text-[11px] text-primary"
          >
            H
          </span>
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                render={<Link href={item.href} />}
                className={cn(
                  "text-muted-foreground",
                  active && "bg-secondary text-foreground",
                )}
              >
                {item.label}
              </Button>
            );
          })}
          <Button size="sm" className="ml-2" render={<Link href="/contact" />}>
            Contact
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{site.brand}</SheetTitle>
              <SheetDescription>{site.location}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="justify-start"
                  render={<Link href={item.href} onClick={() => setOpen(false)} />}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
