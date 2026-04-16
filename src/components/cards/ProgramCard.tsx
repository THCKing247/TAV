import Link from "next/link";
import type { Program } from "@/data/programs";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      <h3 className="font-display text-xl font-bold text-slate-900">{program.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{program.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-violet-700/90">
        Who it serves
      </p>
      <p className="mt-1 text-sm text-slate-700">{program.audience}</p>
      <Link
        href={program.href}
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-indigo-700 underline-offset-4 transition group-hover:gap-3 hover:text-indigo-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
