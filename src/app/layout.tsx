import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { defaultMetadata } from "@/lib/metadata";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(getSiteUrl()),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: getSiteUrl(),
  description: siteConfig.description,
  areaServed: {
    "@type": "City",
    name: siteConfig.location.city,
    containedInPlace: {
      "@type": "State",
      name: "Florida",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: siteConfig.location.country,
  },
  sameAs: [
    siteConfig.social.instagramTav.url,
    siteConfig.social.instagramJ5.url,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[#faf9f7] text-stone-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
