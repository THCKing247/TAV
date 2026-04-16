"use client";

import { useState } from "react";
import {
  btnPrimaryClass,
  fieldInputClass,
  fieldLabelClass,
  fieldTextareaClass,
} from "@/components/ui/form-styles";

const DONATION_TYPES = [
  "Food",
  "Clothes",
  "School supplies",
  "Hygiene products",
  "Toys",
  "Household goods",
  "Volunteer help",
  "Other",
] as const;

export function InKindDonationForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inkind-name" className={fieldLabelClass}>
            Full name
          </label>
          <input
            id="inkind-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldInputClass}
          />
        </div>
        <div>
          <label htmlFor="inkind-email" className={fieldLabelClass}>
            Email
          </label>
          <input
            id="inkind-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldInputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="inkind-phone" className={fieldLabelClass}>
          Phone
        </label>
        <input
          id="inkind-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={fieldInputClass}
        />
      </div>
      <div>
        <label htmlFor="inkind-type" className={fieldLabelClass}>
          Donation type
        </label>
        <select
          id="inkind-type"
          name="donationType"
          required
          defaultValue=""
          className={fieldInputClass}
        >
          <option value="" disabled>
            Select a type
          </option>
          {DONATION_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inkind-desc" className={fieldLabelClass}>
          Describe the items or support you are offering
        </label>
        <textarea
          id="inkind-desc"
          name="description"
          rows={4}
          required
          placeholder="Examples: non-perishable pantry items, gently used coats (sizes), two hours on Saturday for event setup…"
          className={fieldTextareaClass}
        />
      </div>
      <div>
        <label htmlFor="inkind-logistics" className={fieldLabelClass}>
          Preferred drop-off or pickup details
        </label>
        <textarea
          id="inkind-logistics"
          name="logistics"
          rows={3}
          required
          placeholder="Neighborhood, availability windows, or how we can coordinate with you."
          className={fieldTextareaClass}
        />
      </div>
      <button type="submit" className={`${btnPrimaryClass} w-full sm:w-auto`}>
        Submit offer
      </button>
      {status === "sent" ? (
        <p className="text-sm font-medium text-emerald-800" role="status">
          Thank you—we received your message. Connect this form to email or a database to complete the
          workflow.
        </p>
      ) : (
        <p className="text-xs text-stone-500">
          This form is front-end only. Hook it up to your inbox or CRM so the team can follow up safely.
        </p>
      )}
    </form>
  );
}
