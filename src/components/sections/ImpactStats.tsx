import type { ImpactStat } from "@/data/stats";

type ImpactStatsProps = {
  stats: ImpactStat[];
};

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-violet-300/40"
        >
          <p className="font-display text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm font-semibold text-indigo-100">{s.label}</p>
          {s.note ? <p className="mt-2 text-xs leading-relaxed text-indigo-200/75">{s.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
