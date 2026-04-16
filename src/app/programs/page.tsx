import { ProgramCard } from "@/components/cards/ProgramCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { programs } from "@/data/programs";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `Programs & Services — ${siteConfig.shortName}`,
  description: `Explore ${siteConfig.name} programs: community events, youth and family support, entrepreneurship resources, partnerships, and local outreach in Pinellas Park and the Tampa Bay area.`,
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-stone-200/90 bg-[#faf9f7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">Programs</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Services that meet people with respect—and follow-through
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Each program line below can grow with you: start with clear descriptions today, then layer in
            schedules, eligibility, and partner logos as your nonprofit scales.
          </p>
        </div>
      </section>

      <SectionShell>
        <ul className="grid gap-8 md:grid-cols-2">
          {programs.map((p) => (
            <li key={p.id} id={p.anchorId} className="scroll-mt-28">
              <ProgramCard program={p} />
            </li>
          ))}
        </ul>
      </SectionShell>
    </>
  );
}
