"use client";

import { useState } from "react";

const FIELDS = [
  { name: "schoolName", label: "School Name", type: "text", required: true },
  { name: "contactPerson", label: "Your Name", type: "text", required: true },
  { name: "city", label: "City", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
] as const;

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setMessage("");

    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => {
      if (k !== "website") data[k] = String(v);
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error?.message ?? "Something went wrong");
      setState("success");
      setMessage("Thanks! We'll reach out within 1–2 school days.");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-5 sm:p-8 md:p-10">
      {FIELDS.map((f) => (
        <div key={f.name} className="mb-4">
          <label htmlFor={f.name} className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            required={f.required}
            autoComplete="on"
            className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-neon-400 focus:bg-white/[0.06]"
          />
        </div>
      ))}

      <div className="mb-4 hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your school, grades, and existing lab setup…"
          className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-neon-400 focus:bg-white/[0.06]"
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-xl bg-gradient-to-r from-neon-400 to-grape-500 py-4 font-bold text-white shadow-lg shadow-grape-600/30 transition hover:scale-[1.02] disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Book a Free Demo →"}
      </button>

      {message && (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
            state === "success"
              ? "bg-emerald-500/10 text-emerald-300"
              : "bg-rose-500/10 text-rose-300"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
