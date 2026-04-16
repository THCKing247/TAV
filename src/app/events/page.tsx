import Link from "next/link";
import { EventCard } from "@/components/cards/EventCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { flagshipEvent, upcomingEvents } from "@/data/events";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Community Events — ${siteConfig.shortName} in Pinellas Park`,
  description: `Discover upcoming ${siteConfig.name} community events, flagship gatherings, and local outreach activities. Nonprofit events, entrepreneurship showcases, and family-friendly programming in Pinellas Park, FL.`,
  path: "/events",
});

export default function EventsPage() {
  const rest = upcomingEvents.filter((e) => e.id !== flagshipEvent.id);

  return (
    <>
      <section className="border-b border-violet-100 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200/80">Events</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The calendar is where the village shows up
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100/90">
            Flagship community events are our front door: high-trust, high-energy, and built to connect people
            with resources that outlast a single night.
          </p>
        </div>
      </section>

      <SectionShell id="flagship">
        <SectionHeading
          eyebrow="Flagship focus"
          title={flagshipEvent.title}
          subtitle="Our signature gatherings combine celebration with substance—so you leave with full hands and fuller contacts."
        />
        <div className="mt-10 max-w-3xl">
          <EventCard event={flagshipEvent} featured />
        </div>
        <p className="mt-8 text-sm text-slate-600">
          Add ticketing, RSVP, or volunteer roles here when workflows are finalized. Calendar link:{" "}
          {siteConfig.links.eventCalendar.startsWith("[") ? (
            <span className="font-medium text-slate-800">[Insert event calendar link]</span>
          ) : (
            <Link href={siteConfig.links.eventCalendar} className="font-semibold text-indigo-700 underline">
              View calendar
            </Link>
          )}
        </p>
      </SectionShell>

      <SectionShell id="upcoming" surface="muted">
        <SectionHeading
          eyebrow="Upcoming"
          title="More dates to watch"
          subtitle="Bring neighbors, wear comfortable shoes, and plan to stay a while—these nights work best when the room looks like Pinellas Park."
        />
        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {rest.map((e) => (
            <li key={e.id}>
              <EventCard event={e} />
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="past">
        <SectionHeading
          eyebrow="Past highlights"
          title="Gallery placeholder"
          subtitle="Drop in photo strips or a masonry gallery after your next event—people should see themselves represented."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="flex aspect-[4/3] items-end rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-100 to-indigo-50 p-4 text-sm text-slate-500"
            >
              <span>
                Image placeholder {n} — alt text: describe the moment, faces, and setting when you replace
                this block.
              </span>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
