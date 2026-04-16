"use client";

import { useState } from "react";
import {
  btnPrimaryClass,
  fieldInputClass,
  fieldLabelClass,
} from "@/components/ui/form-styles";
import { siteConfig } from "@/lib/site-config";

const PRESETS = [25, 50, 100, 250] as const;

export function MonetaryDonationForm() {
  const [preset, setPreset] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="donor-name" className={fieldLabelClass}>
            Full name
          </label>
          <input
            id="donor-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldInputClass}
          />
        </div>
        <div>
          <label htmlFor="donor-email" className={fieldLabelClass}>
            Email
          </label>
          <input
            id="donor-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldInputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={fieldLabelClass}>Donation amount</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setPreset(n);
                setCustomAmount("");
              }}
              className={`min-h-[44px] min-w-[4.5rem] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 ${
                preset === n
                  ? "border-stone-700 bg-stone-800 text-white"
                  : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
              }`}
            >
              ${n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPreset("custom")}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 ${
              preset === "custom"
                ? "border-stone-700 bg-stone-800 text-white"
                : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
            }`}
          >
            Custom
          </button>
        </div>
        {preset === "custom" ? (
          <div className="mt-4">
            <label htmlFor="custom-amt" className={fieldLabelClass}>
              Custom amount (USD)
            </label>
            <input
              id="custom-amt"
              name="amountCustom"
              type="number"
              min="1"
              step="1"
              inputMode="decimal"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className={fieldInputClass}
              required={preset === "custom"}
            />
          </div>
        ) : (
          <input type="hidden" name="amount" value={String(preset)} />
        )}
      </fieldset>

      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50/80 p-6">
        <p className="text-sm font-semibold text-stone-800">Card payment</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Connect Stripe, PayPal, Givebutter, or another processor here. This area is a layout placeholder
          for your secure checkout button or embedded form.
        </p>
        <button type="button" className={`${btnPrimaryClass} mt-4 w-full sm:w-auto`} disabled>
          Pay securely (connect processor)
        </button>
      </div>

      {status === "sent" ? (
        <p className="text-sm font-medium text-emerald-800" role="status">
          Thanks—this demo captured your details. Wire the form to your payment provider when ready.
        </p>
      ) : (
        <button type="submit" className={`${btnPrimaryClass} w-full sm:w-auto`}>
          Continue to give
        </button>
      )}

      <p className="text-xs leading-relaxed text-stone-500">
        Prefer to give another way? See{" "}
        <a href="#give-by-check" className="font-medium text-stone-800 underline-offset-2 hover:underline">
          mail a check
        </a>{" "}
        below. Official link:{" "}
        {siteConfig.links.donation.startsWith("[") ? (
          <span className="font-medium text-stone-700">[Insert donation link]</span>
        ) : (
          <a href={siteConfig.links.donation} className="font-medium text-stone-800 underline">
            {siteConfig.links.donation}
          </a>
        )}
        .
      </p>
    </form>
  );
}
