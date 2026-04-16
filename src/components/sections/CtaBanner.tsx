import Link from "next/link";

type CtaBannerProps = {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBanner({ title, body, primary, secondary }: CtaBannerProps) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-gradient-to-br from-stone-100 via-amber-50/50 to-stone-100 p-8 shadow-sm sm:p-10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-100/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-stone-200/40 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-stone-700">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primary.href}
            className="inline-flex min-h-[48px] min-w-[12rem] items-center justify-center rounded-full bg-stone-800 px-6 py-3 text-center text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 shadow-sm transition hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
