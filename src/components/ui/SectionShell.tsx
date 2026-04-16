import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: "white" | "muted" | "dark";
};

export function SectionShell({
  id,
  children,
  className = "",
  surface = "white",
}: SectionShellProps) {
  const bg =
    surface === "muted"
      ? "bg-slate-50"
      : surface === "dark"
        ? "bg-[#0b1220] text-indigo-50"
        : "bg-white";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">{children}</div>
    </section>
  );
}
