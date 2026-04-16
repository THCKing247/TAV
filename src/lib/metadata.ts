import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const keywords = [
  "nonprofit in Pinellas Park",
  "Takes A Village",
  "TAV",
  "community resources",
  "community events",
  "entrepreneurship support",
  "volunteer opportunities",
  "local outreach",
  "Pinellas County",
  "Tampa Bay",
] as const;

type BuildMetaArgs = {
  title: string;
  description: string;
  path?: string;
  /** Path under `public/` or absolute URL; omit to use `opengraph-image` when present */
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: BuildMetaArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = buildPageMetadata({
  title: `${siteConfig.name} — 5-Star Community Resources & Events`,
  description: siteConfig.description,
  path: "/",
});
