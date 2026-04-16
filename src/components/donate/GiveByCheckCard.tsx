import { siteConfig } from "@/lib/site-config";

export function GiveByCheckCard() {
  const { mailingAddressLines, checksPayableTo } = siteConfig.donations;

  return (
    <div
      id="give-by-check"
      className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm ring-1 ring-stone-100"
    >
      <h3 className="font-display text-xl font-bold text-stone-900">Give by mail (check)</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        Prefer to donate by check? We are grateful for every gift. Please use the mailing address below and
        make checks payable exactly as shown—update these placeholders in{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-800">site-config.ts</code> when
        your details are final.
      </p>
      <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/80 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">
          Make checks payable to
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-stone-900">{checksPayableTo}</p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-stone-600">Mail to</p>
        <address className="mt-2 not-italic text-sm leading-relaxed text-stone-800">
          {mailingAddressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>
    </div>
  );
}
