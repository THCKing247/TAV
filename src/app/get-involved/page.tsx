import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionShell } from "@/components/ui/SectionShell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Get Involved — Volunteer & Partner with ${siteConfig.shortName}`,
  description: `Volunteer opportunities, nonprofit partnerships, and event sponsorships with ${siteConfig.name} in Pinellas Park. Help build community events, entrepreneurship support, and local outreach.`,
  path: "/get-involved",
});

const blocks = [
  {
    id: "volunteer",
    title: "Volunteer opportunities",
    body: "Setup crews, welcome tables, translation support, vendor check-in, youth activity hosts—we match your skills with real needs. Weeknight and weekend shifts available.",
    cta: { href: "/contact", label: "Raise your hand" },
  },
  {
    id: "partner",
    title: "Partner with us",
    body: "Schools, faith communities, clinics, and civic groups: let’s co-design activations that respect your capacity and amplify resident voices.",
    cta: { href: "/contact", label: "Start a conversation" },
  },
  {
    id: "sponsor",
    title: "Sponsor an event",
    body: "From hydration stations to youth zones, sponsors make the five-star difference. We offer recognition that feels community-grade, not corporate-cold.",
    cta: { href: "/donate", label: "Explore sponsorship" },
  },
  {
    id: "collaborate",
    title: "Community collaboration inquiry",
    body: "Have an idea for a pop-up, listening session, or entrepreneur spotlight? Bring the concept—we’ll help ground it in logistics and trust.",
    cta: { href: "/contact", label: "Share your idea" },
  },
] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <section className="border-b border-stone-200/90 bg-[#faf9f7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">Get involved</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The village gets stronger when you step in
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Whether you can give an afternoon, a skill, or a sponsorship that keeps tables free at the door—
            there is a lane for you at {siteConfig.shortName}.
          </p>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-2">
          {blocks.map((b) => (
            <section
              key={b.id}
              id={b.id}
              className="scroll-mt-28 rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-amber-50/30 p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
            >
              <h2 className="font-display text-2xl font-bold text-stone-900">{b.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{b.body}</p>
              <Link
                href={b.cta.href}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
              >
                {b.cta.label}
              </Link>
            </section>
          ))}
        </div>
      </SectionShell>

      <SectionShell surface="muted">
        <CtaBanner
          title={`Talk with ${siteConfig.shortName} directly`}
          body="Tell us your availability, your organization, or your wildest community idea—we answer messages from real humans who work in Pinellas Park."
          primary={{ href: "/contact", label: "Contact TAV" }}
          secondary={{ href: "/events", label: "See upcoming events" }}
        />
      </SectionShell>
    </>
  );
}
