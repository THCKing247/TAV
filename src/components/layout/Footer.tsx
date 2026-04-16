import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
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
    <footer className="border-t border-stone-200/90 bg-[#f3f1ec] text-stone-700">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex flex-col gap-1 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500"
              aria-label="Takes A Village — Home"
            >
              <BrandMark />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Takes A Village
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-600">
              {siteConfig.shortName} brings five-star community resources and flagship events to{" "}
              {siteConfig.location.city}—grounded in trust, neighbor-to-neighbor care, and local action.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-stone-700 underline-offset-4 hover:text-stone-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">
              Connect
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-stone-500">
                  Service area
                </span>
                <span>{siteConfig.serviceArea}</span>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-stone-500">
                  Location
                </span>
                <span>{siteConfig.location.full}</span>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-stone-500">
                  Email
                </span>
                {siteConfig.contact.email.startsWith("[") ? (
                  <span>{siteConfig.contact.email}</span>
                ) : (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="rounded-md text-stone-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                  >
                    {siteConfig.contact.email}
                  </a>
                )}
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-stone-500">
                  Phone
                </span>
                {siteConfig.contact.phone.startsWith("[") ? (
                  <span>{siteConfig.contact.phone}</span>
                ) : (
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                    className="rounded-md text-stone-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
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
                className="inline-flex min-h-[44px] items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-800 transition hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
              >
                @{siteConfig.social.instagramTav.handle}
              </a>
              <a
                href={siteConfig.social.instagramJ5.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-800 transition hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
              >
                @{siteConfig.social.instagramJ5.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-300/80 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built for community, not for
            profit—first.
          </p>
          <p className="max-w-md sm:text-right">
            {siteConfig.name} is a grassroots nonprofit focused on community events, entrepreneurship support,
            and local outreach in {siteConfig.location.city}, Florida.
          </p>
        </div>
      </div>
    </footer>
  );
}
