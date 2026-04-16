import Link from "next/link";
import type { DonationTier } from "@/data/donation-tiers";
import { siteConfig } from "@/lib/site-config";

type DonationSupportProps = {
  tiers: DonationTier[];
};

export function DonationSupport({ tiers }: DonationSupportProps) {
  const href = siteConfig.links.donation.startsWith("[")
    ? "/contact"
    : siteConfig.links.donation;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">
            {tier.amount} · {tier.title}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{tier.impact}</p>
          <Link
            href={href}
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          >
            {siteConfig.links.donation.startsWith("[") ? "Placeholder — link TAV donation page" : "Give now"}
          </Link>
        </div>
      ))}
    </div>
  );
}
