import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";

type HeroProps = {
  headline: string;
  supporting: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export function Hero({ headline, supporting, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-stone-200/90 bg-gradient-to-b from-amber-50/40 via-[#faf9f7] to-stone-50"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-stone-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
            Pinellas Park, FL · Grassroots nonprofit
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.15rem]"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-700">{supporting}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-stone-800 px-8 py-3 text-center text-base font-semibold text-stone-50 shadow-sm transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-stone-300 bg-white px-8 py-3 text-center text-base font-semibold text-stone-800 shadow-sm transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <p className="mt-8 text-sm text-stone-600">
            Volunteer opportunities · Community events · Entrepreneurship support · Local outreach
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-white p-8 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-100/60 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-stone-200/50 blur-3xl" />
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-5 flex flex-col items-center gap-1">
                <BrandMark size="large" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                  Takes A Village
                </span>
              </div>
              <p className="font-display text-lg font-semibold text-stone-900">
                Five-star community resources—neighbor-built, block-tested.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                We show up with heart, hustle, and a deep respect for the people who make Pinellas Park home.
              </p>
              <div className="mt-8 grid w-full grid-cols-3 gap-3 text-center text-xs font-medium text-stone-700">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 px-2 py-4">
                  <span className="block text-lg font-bold text-stone-900">Events</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-stone-500">
                    Flagship focus
                  </span>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 px-2 py-4">
                  <span className="block text-lg font-bold text-stone-900">Resources</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-stone-500">
                    Trusted referrals
                  </span>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 px-2 py-4">
                  <span className="block text-lg font-bold text-stone-900">Local</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-stone-500">
                    Rooted outreach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
