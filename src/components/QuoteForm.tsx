"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong on our end.");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line/70 p-12 text-center">
        <CheckCircle2 size={32} className="mx-auto text-cactus" />
        <h2 className="mt-6 font-display text-3xl text-ink">
          Got it. We&rsquo;ll be in touch.
        </h2>
        <p className="mt-4 text-smoke">
          We typically respond within one business day. For anything urgent,
          give us a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-smoke hover:text-ink"
        >
          Send another
          <ArrowUpRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Section label="01 - Who are you?">
        <Field label="Name" name="name" required />
        <Field label="Company / Production" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </Section>

      <Section label="02 - When and where?">
        <Field
          label="Event date(s)"
          name="eventDates"
          placeholder="e.g. June 8–12, 2026"
        />
        <Field
          label="Location"
          name="location"
          placeholder="e.g. Empire Polo Club, Indio"
        />
      </Section>

      <Section label="03 - What do you need?">
        <TextArea
          label="Gear & scope"
          name="gearNeeded"
          rows={4}
          placeholder="Audio package, generators, distro, on-site power tech, anything else..."
        />
        <TextArea
          label="Notes (anything else we should know)"
          name="message"
          rows={3}
        />
      </Section>

      <div className="flex flex-col items-start gap-4 border-t border-line/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-dust">
          We&rsquo;ll get back to you within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Request"}
          <ArrowUpRight size={16} />
        </button>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="border border-clay/40 bg-clay/5 px-4 py-3 text-sm text-clay"
        >
          {error || "Something went wrong. Try again, or email us directly."}
        </p>
      )}
    </form>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid gap-6 sm:grid-cols-2">
      <legend className="col-span-full mb-2 font-mono text-xs uppercase tracking-widest text-clay">
        {label}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-body text-xs uppercase tracking-widest text-smoke">
        {label}
        {required && <span className="ml-1 text-clay">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink placeholder:text-dust focus:border-ink focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  rows = 3,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="col-span-full block">
      <span className="block font-body text-xs uppercase tracking-widest text-smoke">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full resize-none border-0 border-b border-line bg-transparent py-2 text-ink placeholder:text-dust focus:border-ink focus:outline-none focus:ring-0"
      />
    </label>
  );
}
