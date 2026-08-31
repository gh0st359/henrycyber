"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const intents = ["Work", "Collab", "Question", "Other"] as const;

export function ContactForm() {
  const [intent, setIntent] = useState<(typeof intents)[number]>("Work");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`[${intent}] ${site.brand} — ${name || "Hello"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@domain.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Intent</Label>
        <div className="flex flex-wrap gap-2">
          {intents.map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={intent === item ? "default" : "outline"}
              onClick={() => setIntent(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What are you working on?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Open email draft</Button>
        <Button variant="outline" render={<a href={`mailto:${site.email}`} />}>
          {site.email}
        </Button>
      </div>

      <p
        className={cn(
          "text-sm text-muted-foreground",
          sent ? "text-primary" : "invisible",
        )}
        aria-live="polite"
      >
        Mail client opened. If nothing happened, write {site.email} directly.
      </p>
    </form>
  );
}
