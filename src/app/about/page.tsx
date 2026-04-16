import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: `About ${siteConfig.shortName} — Mission, Vision & Story`,
  description: `Learn how ${siteConfig.name} serves Pinellas Park with community events, entrepreneurship support, volunteer opportunities, and trusted nonprofit outreach across the Tampa Bay region.`,
  path: "/about",
});

const values = [
  {
    title: "Neighbor-first",
    body: "We listen before we plan—we want solutions that feel obvious to the people who live here.",
  },
  {
    title: "Bold hospitality",
    body: "Community events should feel welcoming, safe, and alive—never stiff, never exclusive.",
  },
  {
    title: "Resource integrity",
    body: "If we point you to a program, it is because we trust the people behind it.",
  },
  {
    title: "Local economic lift",
    body: "Entrepreneurship and small vendors are part of how villages stay strong—so we make room for both.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200/90 bg-gradient-to-b from-amber-50/50 via-[#faf9f7] to-stone-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">About</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Built in Pinellas Park. Powered by people who give a damn.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            {siteConfig.name} ({siteConfig.shortName}) is a grassroots nonprofit that treats community events
            as front doors—places where trust starts, resources become real, and local dreams get daylight.
          </p>
        </div>
      </section>

      <SectionShell id="story">
        <SectionHeading
          eyebrow="Our story"
          title="From conversations on the curb to programs on the calendar"
          subtitle="TAV grew out of everyday frustrations—families unsure where to turn, creatives hustling without a stage, neighbors hungry for something that felt like theirs. We chose to organize: not as outsiders with all the answers, but as residents willing to build tables long enough for everyone."
        />
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">
          <p>
            [Insert founder story] — Share the turning point that sparked formal programming, early wins,
            and the values that still guide decisions today. Keep it honest: people connect to specifics.
          </p>
          <p>
            Today, {siteConfig.shortName} is known for high-energy events with substance—where you can grab a
            meal, meet a mentor, find a resource, and still make it home in time for homework. We are proud to
            call {siteConfig.location.city} home and to collaborate across {siteConfig.serviceArea}.
          </p>
        </div>
      </SectionShell>

      <SectionShell surface="muted" id="mission">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mission"
              title="Why we exist"
              subtitle="[Insert official mission statement] — Replace with your board-approved language when ready."
            />
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Placeholder intent: {siteConfig.shortName} exists to deliver five-star community resources through
              flagship events, entrepreneurship support, and outreach that honors dignity at every step.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-stone-900">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              A Pinellas Park where every household knows where to go for help, celebration, and opportunity—
              and where local entrepreneurs are cheered like hometown heroes.
            </p>
            <p className="mt-4 text-sm text-stone-500">
              Refine this vision statement with your leadership team so it matches long-range goals.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="values">
        <SectionHeading
          eyebrow="Core values"
          title="The non-negotiables behind our work"
          subtitle="Values are not decoration—they are how we decide under pressure."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <li
              key={v.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
            >
              <h3 className="font-display text-xl font-bold text-stone-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{v.body}</p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell surface="muted" id="why">
        <SectionHeading
          eyebrow="Why it matters"
          title="When the village shows up, outcomes shift"
          subtitle="Isolation is expensive—in time, health, and hope. Community infrastructure is not just programming; it is belonging with logistics."
        />
        <div className="mt-10 rounded-3xl border border-stone-200/90 bg-gradient-to-br from-white to-amber-50/40 p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-stone-700">
            In {siteConfig.location.city}, like many Florida cities, families juggle housing costs, childcare,
            transportation, and the everyday hustle. Nonprofits can either add noise—or build clear on-ramps.
            {siteConfig.shortName} chooses on-ramps: events people actually want to attend, resources that respect
            intelligence, and partnerships that keep dollars and dreams local.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Founder & guiding team"
          subtitle="[Insert founder story] — Add names, portraits, and short bios when you are ready. Faces build trust."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50/80 p-8 text-stone-600">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-600">Founder spotlight</p>
            <p className="mt-3 text-base leading-relaxed">
              Photo placeholder — alt text should introduce the founder naturally (name, role, and a warm
              detail). Pair with 2–3 sentences on why they started {siteConfig.shortName}.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-stone-900">Leadership commitments</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-600">
              <li>Transparent communication with neighbors and partners</li>
              <li>Program decisions tested against community feedback</li>
              <li>Year-round stewardship of volunteers, sponsors, and small vendors</li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="muted" id="commitment">
        <SectionHeading
          eyebrow="Community commitment"
          title="We are accountable to the block—not just the grant line"
          subtitle="That means showing up when it is hot, when it is hard, and when the headlines move on."
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-stone-700">
          {siteConfig.shortName} commits to ethical outreach, culturally aware events, and partnerships that share
          power with residents. If we get it wrong, we want to hear about it—then fix it. That is what it means
          to be grassroots in the truest sense.
        </p>
      </SectionShell>
    </>
  );
}
