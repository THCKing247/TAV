import Link from "next/link";

type CtaBannerProps = {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBanner({ title, body, primary, secondary }: CtaBannerProps) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-violet-200/60 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-8 shadow-[0_24px_60px_rgba(79,70,229,0.35)] sm:p-10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-indigo-100/95">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primary.href}
            className="inline-flex min-h-[48px] min-w-[12rem] items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-indigo-900 shadow-lg transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
