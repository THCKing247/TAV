/**
 * Central place to update organization details, links, and placeholders.
 * Replace bracketed placeholders when official information is available.
 */

/** Default when not on Netlify and `NEXT_PUBLIC_SITE_URL` is unset (local dev). */
const SITE_URL_FALLBACK = "https://www.takesavillage.org";

function stripTrailingSlash(u: string) {
  return u.replace(/\/$/, "") || u;
}

/**
 * Absolute site URL for metadata, JSON-LD, and OG.
 * On Netlify builds, `URL` is set automatically. Optionally set `NEXT_PUBLIC_SITE_URL`
 * in Netlify → Site configuration → Environment variables to your canonical domain.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return stripTrailingSlash(explicit);
  const netlify = process.env.URL?.trim();
  if (netlify) return stripTrailingSlash(netlify);
  return SITE_URL_FALLBACK;
}

export const siteConfig = {
  name: "Takes A Village",
  shortName: "TAV",
  description:
    "Takes A Village (TAV) delivers five-star community resources, flagship events, and local outreach for Pinellas Park and the greater Tampa Bay area.",
  location: {
    city: "Pinellas Park",
    state: "FL",
    country: "United States",
    full: "Pinellas Park, FL, United States",
  },
  serviceArea:
    "Pinellas County and neighboring communities across the Tampa Bay region.",
  contact: {
    email: "[Insert contact email]",
    phone: "[Insert phone number]",
  },
  links: {
    donation: "[Insert donation link]",
    eventCalendar: "[Insert event calendar link]",
  },
  social: {
    instagramTav: {
      handle: "tavj5llc",
      url: "https://www.instagram.com/tavj5llc/",
      label: "Instagram — @tavj5llc",
    },
    instagramJ5: {
      handle: "j5starse",
      url: "https://www.instagram.com/j5starse/",
      label: "Instagram — @j5starse",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
