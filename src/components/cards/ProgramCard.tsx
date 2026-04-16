import Link from "next/link";
import type { Program } from "@/data/programs";
import { linkAccentClass } from "@/components/ui/form-styles";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md">
      <h3 className="font-display text-xl font-bold text-stone-900">{program.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{program.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-stone-600">
        Who it serves
      </p>
      <p className="mt-1 text-sm text-stone-700">{program.audience}</p>
      <Link
        href={program.href}
        className={`mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold ${linkAccentClass} transition group-hover:gap-3`}
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
