import Link from "next/link";
import type { CommunityEvent } from "@/data/events";

type EventCardProps = {
  event: CommunityEvent;
  featured?: boolean;
};

export function EventCard({ event, featured }: EventCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        featured
          ? "border-amber-200/90 ring-1 ring-amber-100/80"
          : "border-stone-200/90 hover:border-stone-300"
      }`}
    >
      {featured ? (
        <p className="mb-3 inline-flex w-fit rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-800">
          Featured
        </p>
      ) : null}
      <h3 className="font-display text-xl font-bold text-stone-900">{event.title}</h3>
      <dl className="mt-4 space-y-2 text-sm text-stone-600">
        <div>
          <dt className="sr-only">Date</dt>
          <dd className="font-medium text-stone-800">{event.date}</dd>
        </div>
        <div>
          <dt className="sr-only">Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt className="sr-only">Location</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">{event.description}</p>
      <Link
        href={event.ctaHref}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
      >
        {event.ctaLabel}
      </Link>
    </article>
  );
}
