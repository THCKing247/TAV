import Link from "next/link";
import { GiveByCheckCard } from "@/components/donate/GiveByCheckCard";
import { InKindDonationForm } from "@/components/forms/InKindDonationForm";
import { MonetaryDonationForm } from "@/components/forms/MonetaryDonationForm";
import { DonationSupport } from "@/components/sections/DonationSupport";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { donationTiers } from "@/data/donation-tiers";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Donate & Support — ${siteConfig.name}`,
  description: `Support ${siteConfig.name} in Pinellas Park with financial gifts, mailed checks, or in-kind donations. Every contribution helps our nonprofit serve the community.`,
  path: "/donate",
});

export default function DonatePage() {
  const donationHref = siteConfig.links.donation.startsWith("[")
    ? null
    : siteConfig.links.donation;

  return (
    <>
      <section className="border-b border-stone-200/80 bg-gradient-to-b from-amber-50/50 via-stone-50 to-stone-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">Donate & support</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Every gift helps us show up for neighbors
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Every donation makes a difference. Whether you give financially, donate needed items, or offer
            other support, your generosity helps us serve the community. Financial gifts, supplies, and your
            time are all deeply appreciated—there is no single &ldquo;right&rdquo; way to give.
          </p>
        </div>
      </section>

      <SectionShell id="appreciation">
        <div className="mx-auto max-w-3xl rounded-2xl border border-stone-200/90 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-lg leading-relaxed text-stone-700">
            {siteConfig.shortName} runs on trust and teamwork. Whether you can give today or next month,
            whether your gift is cash, canned goods, or a few hours on a Saturday—{" "}
            <strong className="font-semibold text-stone-900">all of it matters</strong>. Every contribution
            helps us host events, connect families to resources, and keep outreach respectful and reliable in{" "}
            {siteConfig.location.city} and beyond.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            Thank you for believing in a stronger village. Use the sections below in whatever order fits you
            best.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="financial" surface="muted">
        <SectionHeading
          eyebrow="Give financially"
          title="Credit, debit, or check—we are grateful"
          subtitle="Online giving is fast; mailed checks work great too. Choose the option that feels right for you."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-stone-900">Credit or debit card</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Use the form below to share your details and amount. Connect your real payment processor when
              you are ready—this layout keeps the flow clear for donors.
            </p>
            <div className="mt-8">
              <MonetaryDonationForm />
            </div>
          </div>
          <GiveByCheckCard />
        </div>
        <p className="mt-10 text-center text-sm text-stone-600">
          Online processor link (optional):{" "}
          {donationHref ? (
            <Link href={donationHref} className="font-semibold text-stone-800 underline">
              {donationHref}
            </Link>
          ) : (
            <span className="font-medium text-stone-800">[Insert donation link]</span>
          )}
        </p>
      </SectionShell>

      <SectionShell id="in-kind">
        <SectionHeading
          eyebrow="Goods & volunteer support"
          title="Food, supplies, time, and more"
          subtitle="Tell us what you would like to share. We will follow up to coordinate drop-off, pickup, or volunteer roles."
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <InKindDonationForm />
        </div>
      </SectionShell>

      <SectionShell id="tiers" surface="muted">
        <SectionHeading
          eyebrow="Suggested levels"
          title="If you are giving financially, here are some reference points"
          subtitle="Amounts are examples only—give at the level that fits your budget. Impact copy can be tuned to match your programs."
        />
        <div className="mt-12">
          <DonationSupport tiers={donationTiers} />
        </div>
      </SectionShell>

      <SectionShell id="supporters">
        <SectionHeading
          eyebrow="Community supporters"
          title="Partners who help multiply the mission"
          subtitle="Room for sponsor logos or names once agreements are in place."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Local business ally", "Faith partner", "School champion", "Family donor circle"].map((x) => (
            <div
              key={x}
              className="flex min-h-[120px] items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/80 p-6 text-center text-sm font-medium text-stone-500"
            >
              Logo placeholder — {x}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
