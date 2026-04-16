import Link from "next/link";
import type { CommunityEvent } from "@/data/events";

type EventCardProps = {
  event: CommunityEvent;
  featured?: boolean;
};

export function EventCard({ event, featured }: EventCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] ${
        featured
          ? "border-violet-300 ring-2 ring-violet-200/80"
          : "border-slate-200/90 hover:border-violet-200"
      }`}
    >
      {featured ? (
        <p className="mb-3 inline-flex w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
          Featured
        </p>
      ) : null}
      <h3 className="font-display text-xl font-bold text-slate-900">{event.title}</h3>
      <dl className="mt-4 space-y-2 text-sm text-slate-600">
        <div>
          <dt className="sr-only">Date</dt>
          <dd className="font-medium text-slate-800">{event.date}</dd>
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
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>
      <Link
        href={event.ctaHref}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {event.ctaLabel}
      </Link>
    </article>
  );
}
