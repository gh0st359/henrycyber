"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const intents = ["Work", "Collab", "Question", "Other"] as const;

const fieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-[15px] text-fg placeholder:text-faint focus:border-blue focus:ring-0 focus:outline-none";

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
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block text-[13px] text-mute">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] text-mute">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@domain.com"
            className={fieldClass}
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-[13px] text-mute">Intent</legend>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {intents.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setIntent(item)}
              className={
                intent === item
                  ? "text-[13px] text-blue"
                  : "text-[13px] text-mute hover:text-fg"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block text-[13px] text-mute">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What are you working on?"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="bg-blue px-4 py-2 text-[13px] font-medium text-black hover:bg-blue-soft"
        >
          Open email draft
        </button>
        <a href={`mailto:${site.email}`} className="text-[13px] text-mute hover:text-fg">
          {site.email}
        </a>
      </div>

      <p
        className={`text-[13px] ${sent ? "text-blue" : "invisible"}`}
        aria-live="polite"
      >
        Mail client opened. If nothing happened, write {site.email} directly.
      </p>
    </form>
  );
}
