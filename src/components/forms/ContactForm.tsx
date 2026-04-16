"use client";

import { useState } from "react";
import { btnPrimaryClass, fieldInputClass, fieldLabelClass, fieldTextareaClass } from "@/components/ui/form-styles";

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
          <label htmlFor="name" className={fieldLabelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldInputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={fieldLabelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldInputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className={fieldLabelClass}>
          I am reaching out about
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          required
          className={fieldInputClass}
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
        <label htmlFor="message" className={fieldLabelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us how we can connect with you or your organization."
          className={fieldTextareaClass}
        />
      </div>
      <button type="submit" className={`${btnPrimaryClass} w-full sm:w-auto`}>
        Send message
      </button>
      {status === "sent" ? (
        <p className="text-sm font-medium text-emerald-800" role="status">
          Thanks—this demo form captured your intent. Wire this to email or a CRM when you are ready.
        </p>
      ) : (
        <p className="text-xs text-stone-500">
          This form is front-end only. Connect it to your email service or backend to deliver messages securely.
        </p>
      )}
    </form>
  );
}
