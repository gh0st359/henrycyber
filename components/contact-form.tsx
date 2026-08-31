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
      <div className="panel p-6 sm:p-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-acid uppercase">
          Draft opened
        </p>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          Your mail client should have a message ready for {site.email}. If
          nothing opened, write that address directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel grid gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            Name
          </span>
          <input
            name="name"
            required
            className="h-11 border border-[var(--line-strong)] bg-bg/60 px-3 text-sm text-ink outline-none focus:border-acid/50"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            className="h-11 border border-[var(--line-strong)] bg-bg/60 px-3 text-sm text-ink outline-none focus:border-acid/50"
            placeholder="you@domain.com"
          />
        </label>
      </div>

      <fieldset className="grid gap-3">
        <legend className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          Intent
        </legend>
        <div className="flex flex-wrap gap-2">
          {intents.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setIntent(option.value)}
              className={`h-9 px-3 font-mono text-[10px] tracking-[0.16em] uppercase ${
                intent === option.value
                  ? "bg-acid text-bg"
                  : "border border-[var(--line-strong)] text-muted hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="border border-[var(--line-strong)] bg-bg/60 px-3 py-3 text-sm leading-6 text-ink outline-none focus:border-acid/50"
          placeholder="What should we talk about?"
        />
      </label>

      <button
        type="submit"
        className="h-11 w-fit bg-acid px-6 font-mono text-[11px] tracking-[0.18em] text-bg uppercase"
      >
        Open email draft
      </button>
    </form>
  );
}
