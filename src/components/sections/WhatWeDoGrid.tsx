import type { WhatWeDoItem } from "@/data/what-we-do";

function Icon({ type }: { type: WhatWeDoItem["icon"] }) {
  const common = "h-8 w-8 text-white";
  switch (type) {
    case "events":
      return (
        <svg viewBox="0 0 32 32" className={common} aria-hidden>
          <circle cx="16" cy="11" r="4" fill="currentColor" opacity="0.9" />
          <path
            fill="currentColor"
            opacity="0.85"
            d="M6 26c2-5 6.5-8 10-8s8 3 10 8"
          />
        </svg>
      );
    case "entrepreneurship":
      return (
        <svg viewBox="0 0 32 32" className={common} aria-hidden>
          <path
            fill="currentColor"
            d="M8 22V12l8-4 8 4v10l-8 4-8-4zm8-11.2L11.5 13 16 15.2 20.5 13 16 10.8z"
          />
        </svg>
      );
    case "resources":
      return (
        <svg viewBox="0 0 32 32" className={common} aria-hidden>
          <path
            fill="currentColor"
            d="M9 8h14v3H9V8zm0 6h10v3H9v-3zm0 6h14v3H9v-3z"
            opacity="0.9"
          />
        </svg>
      );
    case "outreach":
      return (
        <svg viewBox="0 0 32 32" className={common} aria-hidden>
          <path
            fill="currentColor"
            d="M16 6l10 6v10H6V12l10-6zm0 2.2L9.5 13 16 16.5 22.5 13 16 8.2z"
            opacity="0.92"
          />
        </svg>
      );
    default:
      return null;
  }
}

type WhatWeDoGridProps = {
  items: WhatWeDoItem[];
};

export function WhatWeDoGrid({ items }: WhatWeDoGridProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.id}>
          <div className="group flex h-full gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition group-hover:scale-105">
              <Icon type={item.icon} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
