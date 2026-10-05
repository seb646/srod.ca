"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm({ topics, successMessage }: { topics: string[]; successMessage: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <p className="form__status" role="status">
        {successMessage}
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required maxLength={200} />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required maxLength={320} />
        </label>
      </div>
      <label>
        Organization
        <input name="organization" type="text" autoComplete="organization" maxLength={200} />
      </label>
      {topics.length > 0 && (
        <label>
          What’s this about?
          <select name="topic" defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      )}
      <label>
        Message
        <textarea name="message" rows={6} required maxLength={5000} />
      </label>
      {/* Spam trap: humans never see or fill this */}
      <label className="form__hp" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      {status.kind === "error" && (
        <p className="form__status form__status--error" role="alert">
          {status.message} You can also email me directly.
        </p>
      )}
      <button type="submit" className="btn btn--solid btn--lg" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
