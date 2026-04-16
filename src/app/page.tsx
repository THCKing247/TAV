import Link from "next/link";
import { EventCard } from "@/components/cards/EventCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { SocialSection } from "@/components/sections/SocialSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatWeDoGrid } from "@/components/sections/WhatWeDoGrid";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingEvents } from "@/data/events";
import { impactStats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { whatWeDo } from "@/data/what-we-do";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `${siteConfig.name} — Community Events & Resources in Pinellas Park`,
  description: `${siteConfig.shortName} is a nonprofit in Pinellas Park delivering five-star community resources, flagship events, entrepreneurship support, volunteer opportunities, and local outreach across the Tampa Bay area.`,
  path: "/",
});

export default function HomePage() {
  const featured = upcomingEvents.filter((e) => e.featured);
  const showcase = featured.length ? featured : upcomingEvents.slice(0, 1);
  const also = upcomingEvents.filter((e) => !showcase.includes(e)).slice(0, 2);

  return (
    <>
      <Hero
        headline="Empowering Communities Through Events, Resources, and Connection"
        supporting={`${siteConfig.name} (${siteConfig.shortName}) meets neighbors where they are—producing high-energy community events, warm referrals, and entrepreneurship support that keeps opportunity close to home in ${siteConfig.location.city} and beyond.`}
        primaryCta={{ href: "/get-involved", label: "Get Involved" }}
        secondaryCta={{ href: "/donate", label: "Support the Mission" }}
      />

      <SectionShell id="intro">
        <SectionHeading
          eyebrow="Who we are"
          title="Grassroots heart. Five-star standards."
          subtitle={`${siteConfig.shortName} was built on a simple truth: when neighbors organize with care, the whole village rises. We combine bold, urban-community energy with the reliability people deserve—especially when they are navigating resources, launching a business, or looking for a place to belong.`}
        />
        <div className="mt-10 rounded-3xl border border-stone-200/90 bg-gradient-to-br from-white via-stone-50 to-amber-50/30 p-8 shadow-sm sm:p-10">
          <p className="text-lg leading-relaxed text-stone-700">
            From block parties with purpose to tables stacked with actionable information, our work is
            rooted in Pinellas Park while staying open to partnerships across Pinellas County. This is
            nonprofit work that feels human—loud when celebration is due, steady when someone needs a
            guide.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="what-we-do" surface="muted">
        <SectionHeading
          eyebrow="What we do"
          title="Programs shaped by the community, for the community"
          subtitle="Our flagship focus is community events—then we weave in resources, entrepreneurship, and outreach so impact doesn’t end when the music stops."
        />
        <div className="mt-12">
          <WhatWeDoGrid items={whatWeDo} />
        </div>
      </SectionShell>

      <SectionShell id="impact" surface="muted" className="!py-0 sm:!py-0 lg:!py-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/90 bg-gradient-to-br from-white via-stone-50 to-amber-50/25 px-4 py-16 sm:px-8 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-stone-200/50 blur-3xl" />
          </div>
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="Impact"
              title="Numbers tell part of the story—neighbor trust tells the rest"
              subtitle="These figures are placeholders you can update as verified data becomes available. The real measure is in families welcomed, vendors championed, and blocks that feel a little more connected."
            />
            <div className="mt-12">
              <ImpactStats stats={impactStats} />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="featured-events">
        <SectionHeading
          eyebrow="On the calendar"
          title="Featured community events"
          subtitle="Save the dates, bring a friend, and help us fill the room with Pinellas Park pride. Full calendar link coming soon—share your email at Contact if you want direct updates."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {showcase.map((e) => (
            <EventCard key={e.id} event={e} featured />
          ))}
          {also.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-stone-600">
          Official calendar:{" "}
          {siteConfig.links.eventCalendar.startsWith("[") ? (
            <span className="font-medium text-stone-800">[Insert event calendar link]</span>
          ) : (
            <Link
              href={siteConfig.links.eventCalendar}
              className="font-semibold text-stone-800 underline-offset-4 hover:underline"
            >
              View all events
            </Link>
          )}
        </p>
      </SectionShell>

      <SectionShell surface="muted">
        <CtaBanner
          title="Fuel the next neighborhood night to remember"
          body="Donations and sponsorships help us rent tents, feed volunteers, amplify local entrepreneurs, and keep resources free at the door. Every gift is a vote for Pinellas Park—and for people who deserve a win."
          primary={{
            href: siteConfig.links.donation.startsWith("[") ? "/donate" : siteConfig.links.donation,
            label: "Give today",
          }}
          secondary={{ href: "/get-involved", label: "Volunteer" }}
        />
      </SectionShell>

      <SectionShell id="voices">
        <SectionHeading
          eyebrow="Community voices"
          title="What neighbors are saying"
          subtitle="Real quotes will strengthen this section—capture short testimonials after your next flagship event."
        />
        <div className="mt-12">
          <TestimonialsSection items={testimonials} />
        </div>
      </SectionShell>

      <SectionShell id="social" surface="muted">
        <SectionHeading
          eyebrow="Stay connected"
          title="Follow the movement on Instagram"
          subtitle="See the setup, the smiles, and the behind-the-scenes hustle that makes TAV events feel like family reunions with a mission."
        />
        <div className="mt-12">
          <SocialSection />
        </div>
      </SectionShell>
    </>
  );
}
