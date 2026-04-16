import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

type HeroProps = {
  headline: string;
  supporting: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export function Hero({ headline, supporting, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-violet-500/20 bg-[#070b14]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
            Pinellas Park, FL · Grassroots nonprofit
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-100/90">{supporting}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 text-center text-base font-semibold text-white shadow-[0_0_32px_rgba(124,58,237,0.4)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <p className="mt-8 text-sm text-indigo-200/70">
            Volunteer opportunities · Community events · Entrepreneurship support · Local outreach
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.65)]">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-violet-500/40 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="relative flex flex-col items-center text-center">
              <span aria-hidden="true" className="mb-6">
                <Logo showWordmark />
              </span>
              <p className="font-display text-lg font-semibold text-white">
                Five-star community resources—neighbor-built, block-tested.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-indigo-200/85">
                We show up with heart, hustle, and a deep respect for the people who make Pinellas Park
                home.
              </p>
              <div className="mt-8 grid w-full grid-cols-3 gap-3 text-center text-xs font-medium text-indigo-100/90">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-4">
                  <span className="block text-lg font-bold text-white">Events</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-indigo-200/70">
                    Flagship focus
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-4">
                  <span className="block text-lg font-bold text-white">Resources</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-indigo-200/70">
                    Trusted referrals
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-4">
                  <span className="block text-lg font-bold text-white">Local</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-indigo-200/70">
                    Rooted outreach
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 right-6 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-violet-500/40 to-blue-500/30 opacity-90 blur-2xl sm:block"
          />
        </div>
      </div>
    </section>
  );
}
