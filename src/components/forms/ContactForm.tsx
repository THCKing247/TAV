"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm outline-none ring-0 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-semibold text-slate-800">
          I am reaching out about
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          required
          className="mt-2 w-full min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="events">Community events</option>
          <option value="volunteer">Volunteering</option>
          <option value="partner">Partnership / collaboration</option>
          <option value="sponsor">Sponsorship</option>
          <option value="resources">Resources / referrals</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us how we can connect with you or your organization."
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:w-auto"
      >
        Send message
      </button>
      {status === "sent" ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          Thanks—this demo form captured your intent. Wire this to email or a CRM when you are ready.
        </p>
      ) : (
        <p className="text-xs text-slate-500">
          This form is front-end only. Connect it to your email service or backend to deliver messages
          securely.
        </p>
      )}
    </form>
  );
}
