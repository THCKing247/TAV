import Link from "next/link";
import { DonationSupport } from "@/components/sections/DonationSupport";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { donationTiers } from "@/data/donation-tiers";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Donate & Support — ${siteConfig.name}`,
  description: `Support ${siteConfig.name}, a nonprofit in Pinellas Park. Your gifts fund community events, entrepreneurship programs, volunteer opportunities, and trusted local outreach.`,
  path: "/donate",
});

export default function DonatePage() {
  const donationHref = siteConfig.links.donation.startsWith("[")
    ? null
    : siteConfig.links.donation;

  return (
    <>
      <section className="border-b border-violet-100 bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-100/90">Donate</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Give like you live here—because you do
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-50/95">
            Credible giving starts with transparency: {siteConfig.shortName} uses donations to keep community
            events accessible, resources well-staffed, and outreach respectful. You are not funding noise—you
            are funding neighbors helping neighbors with structure.
          </p>
        </div>
      </section>

      <SectionShell id="appeal">
        <SectionHeading
          eyebrow="Why give"
          title="Your support turns parking lots into platforms"
          subtitle="When families can access resources without humiliation, when vendors get a fair crowd, and when youth see adults cheering loudly—communities get measurably warmer. That warmth shows up in attendance, retention, and pride."
        />
        <div className="mt-10 rounded-3xl border border-violet-100 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-lg leading-relaxed text-slate-700">
            We are a nonprofit in {siteConfig.location.city} with a grassroots backbone and five-star standards.
            Donations help cover permits, safety, translation, childcare-friendly setups, and the small details
            that tell people: <em>you matter here</em>.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="tiers" surface="muted">
        <SectionHeading
          eyebrow="Suggested tiers"
          title="Pick a lane—every amount builds"
          subtitle="Adjust tiers to match your fundraising platform. The copy below is intentionally practical so donors understand the ‘why’ behind each bracket."
        />
        <div className="mt-12">
          <DonationSupport tiers={donationTiers} />
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">
          Official donation processor:{" "}
          {donationHref ? (
            <Link href={donationHref} className="font-semibold text-indigo-700 underline">
              {donationHref}
            </Link>
          ) : (
            <span className="font-medium text-slate-800">[Insert donation link]</span>
          )}
        </p>
      </SectionShell>

      <SectionShell id="recurring">
        <SectionHeading
          eyebrow="Ways to give"
          title="One-time spark or recurring rhythm"
          subtitle="Monthly supporters help us plan seasons responsibly—so events are not thrown together at the last minute."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">One-time donation</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Placeholder checkout UI—connect Stripe, PayPal, Givebutter, or your preferred nonprofit processor.
              Add suggested amounts and impact blurbs beside each button.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white opacity-80"
              disabled
            >
              One-time (connect processor)
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">Recurring donation</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Placeholder subscription UI—ideal for neighbors who want to fuel programming year-round. Offer
              quarterly options if monthly feels steep.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 opacity-80"
              disabled
            >
              Monthly (connect processor)
            </button>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="supporters" surface="muted">
        <SectionHeading
          eyebrow="Community supporters"
          title="Sponsors and neighbors who amplify the mission"
          subtitle="Swap this grid for real logos with signed agreements. Until then, leave room for the partners who make five-star community care possible."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Local business ally", "Faith partner", "School champion", "Family donor circle"].map((x) => (
            <div
              key={x}
              className="flex min-h-[120px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm font-medium text-slate-500"
            >
              Logo placeholder — {x}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
