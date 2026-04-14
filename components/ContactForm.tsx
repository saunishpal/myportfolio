"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: string;
    error: string;
  }>({
    loading: false,
    success: "",
    error: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        loading: false,
        success: "Message sent successfully. I’ll get back to you soon.",
        error: "",
      });

      setForm({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b1020]/60 p-6">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
        Project Inquiry
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
          required
        />

        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
          required
        />

        <select
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400/30"
          required
        >
          <option value="" className="bg-[#0b1020]">
            Select project type
          </option>
          <option value="Portfolio Website" className="bg-[#0b1020]">
            Portfolio Website
          </option>
          <option value="Business Website" className="bg-[#0b1020]">
            Business Website
          </option>
          <option value="Landing Page" className="bg-[#0b1020]">
            Landing Page
          </option>
          <option value="AI MVP" className="bg-[#0b1020]">
            AI MVP
          </option>
        </select>

        <textarea
          rows={5}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/30"
          required
        />

        <button
          type="submit"
          disabled={status.loading}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.loading ? "Sending..." : "Send Inquiry"}
        </button>

        {status.success ? (
          <p className="text-sm text-green-400">{status.success}</p>
        ) : null}

        {status.error ? (
          <p className="text-sm text-red-400">{status.error}</p>
        ) : null}
      </form>
    </div>
  );
}