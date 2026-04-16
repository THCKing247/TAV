/**
 * Central place to update organization details, links, and placeholders.
 * Replace bracketed placeholders when official information is available.
 */
export const siteConfig = {
  name: "Takes A Village",
  shortName: "TAV",
  description:
    "Takes A Village (TAV) delivers five-star community resources, flagship events, and local outreach for Pinellas Park and the greater Tampa Bay area.",
  url: "https://www.takesavillage.org",
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
