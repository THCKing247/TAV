import { siteConfig } from "@/lib/site-config";

export function SocialSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {[siteConfig.social.instagramTav, siteConfig.social.instagramJ5].map((ig) => (
        <div
          key={ig.handle}
          className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50/40 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                Instagram
              </p>
              <p className="mt-1 font-display text-lg font-bold text-slate-900">@{ig.handle}</p>
              <p className="mt-2 text-sm text-slate-600">
                Event flyers, behind-the-scenes setup, and community voices from the {siteConfig.shortName}{" "}
                family.
              </p>
            </div>
            <div
              aria-hidden
              className="hidden h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 opacity-90 shadow-lg sm:block"
            />
          </div>
          <div className="mt-6 grid flex-1 place-items-center rounded-xl border border-dashed border-slate-300 bg-white/70 px-4 py-10 text-center text-sm text-slate-500">
            <p>
              <span className="font-medium text-slate-700">[Instagram feed placeholder]</span>
              <br />
              Embed the official feed or drop in curated highlight images when ready. Alt text and captions
              should describe real community moments.
            </p>
          </div>
          <a
            href={ig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
}
