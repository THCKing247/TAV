import { siteConfig } from "@/lib/site-config";

export function SocialSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {[siteConfig.social.instagramTav, siteConfig.social.instagramJ5].map((ig) => (
        <div
          key={ig.handle}
          className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-100/80 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">
                Instagram
              </p>
              <p className="mt-1 font-display text-lg font-bold text-stone-900">@{ig.handle}</p>
              <p className="mt-2 text-sm text-stone-600">
                Event flyers, behind-the-scenes setup, and community voices from the {siteConfig.shortName}{" "}
                family.
              </p>
            </div>
            <div
              aria-hidden
              className="hidden h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-stone-200 to-amber-100/80 shadow-inner sm:block"
            />
          </div>
          <div className="mt-6 grid flex-1 place-items-center rounded-xl border border-dashed border-stone-300 bg-stone-50/80 px-4 py-10 text-center text-sm text-stone-500">
            <p>
              <span className="font-medium text-stone-700">[Instagram feed placeholder]</span>
              <br />
              Embed the official feed or drop in curated highlight images when ready. Alt text and captions
              should describe real community moments.
            </p>
          </div>
          <a
            href={ig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          >
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
}
