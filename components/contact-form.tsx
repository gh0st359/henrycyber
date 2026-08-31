"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Intent = "collab" | "role" | "research" | "other";

const intents: { value: Intent; label: string }[] = [
  { value: "collab", label: "Collaboration" },
  { value: "role", label: "Role / hire" },
  { value: "research", label: "Research" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [intent, setIntent] = useState<Intent>("collab");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`[${site.brand}] ${intent} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel p-6">
        <p className="text-sm font-medium text-acid">Draft opened</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Your mail client should have a message ready for {site.email}. If
          nothing opened, write that address directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel grid gap-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-[11px] text-muted">Name</span>
          <input
            name="name"
            required
            className="h-10 rounded-lg border border-[var(--line-strong)] bg-bg/70 px-3 text-sm text-ink outline-none focus:border-acid/50"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-[11px] text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-10 rounded-lg border border-[var(--line-strong)] bg-bg/70 px-3 text-sm text-ink outline-none focus:border-acid/50"
            placeholder="you@domain.com"
          />
        </label>
      </div>

      <fieldset className="grid gap-2">
        <legend className="font-mono text-[11px] text-muted">Intent</legend>
        <div className="flex flex-wrap gap-2">
          {intents.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setIntent(option.value)}
              className={`h-8 rounded-full px-3 text-[12px] ${
                intent === option.value
                  ? "bg-acid text-[#06110d]"
                  : "border border-[var(--line-strong)] text-muted hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-lg border border-[var(--line-strong)] bg-bg/70 px-3 py-2.5 text-sm leading-6 text-ink outline-none focus:border-acid/50"
          placeholder="What should we talk about?"
        />
      </label>

      <button type="submit" className="btn-primary w-fit">
        Open email draft
      </button>
    </form>
  );
}
