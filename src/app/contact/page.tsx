import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactFaq } from "@/data/faq";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Contact ${siteConfig.shortName} — Pinellas Park Nonprofit`,
  description: `Contact ${siteConfig.name} for volunteer opportunities, nonprofit partnerships, community events, and local outreach in Pinellas Park and the Tampa Bay area.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone-200/90 bg-[#faf9f7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Let’s build the next community win—together
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Questions about events, partnerships, or resources? Reach out. {siteConfig.shortName} is small
            enough to be human and serious enough to follow through.
          </p>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Send a message"
              title="Tell us what you are hoping for"
              subtitle="We read every note. If you need immediate emergency assistance, please contact local emergency services."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-8">
            <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-100 to-amber-50/40 p-8 text-stone-800 shadow-sm">
              <h2 className="font-display text-lg font-bold text-stone-900">Direct lines</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-stone-600">Email</dt>
                  <dd className="mt-1">
                    {siteConfig.contact.email.startsWith("[") ? (
                      <span>{siteConfig.contact.email}</span>
                    ) : (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="rounded-md text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                      >
                        {siteConfig.contact.email}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-600">Phone</dt>
                  <dd className="mt-1">
                    {siteConfig.contact.phone.startsWith("[") ? (
                      <span>{siteConfig.contact.phone}</span>
                    ) : (
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                        className="rounded-md text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-600">Location</dt>
                  <dd className="mt-1">{siteConfig.location.full}</dd>
                </div>
              </dl>
              <div className="mt-8 border-t border-stone-300/80 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">Social</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a
                    href={siteConfig.social.instagramTav.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md font-medium text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                  >
                    {siteConfig.social.instagramTav.label}
                  </a>
                  <a
                    href={siteConfig.social.instagramJ5.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md font-medium text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
                  >
                    {siteConfig.social.instagramJ5.label}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-stone-900">FAQ snippet</h2>
              <ul className="mt-4 space-y-4">
                {contactFaq.map((f) => (
                  <li key={f.id}>
                    <p className="text-sm font-semibold text-stone-900">{f.question}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{f.answer}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-involved"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-stone-800 underline-offset-4 hover:underline"
              >
                Explore ways to get involved →
              </Link>
            </div>
          </aside>
        </div>
      </SectionShell>
    </>
  );
}
