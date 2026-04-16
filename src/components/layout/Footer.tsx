import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/about", label: "Our story" },
  { href: "/programs", label: "Programs & services" },
  { href: "/events", label: "Events calendar" },
  { href: "/donate", label: "Ways to give" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b14] text-indigo-100/90">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
              aria-label="Takes A Village — Home"
            >
              <span aria-hidden="true">
                <Logo />
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-indigo-200/80">
              {siteConfig.shortName} brings five-star community resources and flagship events to{" "}
              {siteConfig.location.city}—grounded in trust, neighbor-to-neighbor care, and bold local
              action.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-indigo-100/85 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Connect
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-indigo-300/80">
                  Service area
                </span>
                <span>{siteConfig.serviceArea}</span>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-indigo-300/80">
                  Location
                </span>
                <span>{siteConfig.location.full}</span>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-indigo-300/80">
                  Email
                </span>
                {siteConfig.contact.email.startsWith("[") ? (
                  <span>{siteConfig.contact.email}</span>
                ) : (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="rounded-md underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {siteConfig.contact.email}
                  </a>
                )}
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-indigo-300/80">
                  Phone
                </span>
                {siteConfig.contact.phone.startsWith("[") ? (
                  <span>{siteConfig.contact.phone}</span>
                ) : (
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                    className="rounded-md underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {siteConfig.contact.phone}
                  </a>
                )}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.instagramTav.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                @{siteConfig.social.instagramTav.handle}
              </a>
              <a
                href={siteConfig.social.instagramJ5.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                @{siteConfig.social.instagramJ5.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-indigo-300/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built for community,
            not for profit—first.
          </p>
          <p className="max-w-md sm:text-right">
            {siteConfig.name} is a grassroots nonprofit focused on community events, entrepreneurship
            support, and local outreach in {siteConfig.location.city}, Florida.
          </p>
        </div>
      </div>
    </footer>
  );
}
