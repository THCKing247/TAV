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
          className="rounded-2xl border border-stone-200/90 bg-white p-6 text-center shadow-sm transition hover:border-stone-300 hover:shadow-md"
        >
          <p className="font-display text-4xl font-bold text-stone-900 sm:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm font-semibold text-stone-800">{s.label}</p>
          {s.note ? <p className="mt-2 text-xs leading-relaxed text-stone-600">{s.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
