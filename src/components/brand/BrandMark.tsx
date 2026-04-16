type BrandMarkProps = {
  /** Default: header size. Large: hero emphasis */
  size?: "default" | "large";
  className?: string;
};

/**
 * Text-only wordmark — “TAV” as primary brand (no logo image).
 */
export function BrandMark({ size = "default", className = "" }: BrandMarkProps) {
  const sizeClass =
    size === "large"
      ? "text-4xl tracking-[0.2em] sm:text-5xl"
      : "text-2xl tracking-[0.16em] sm:text-[1.75rem]";

  return (
    <span
      className={`font-display font-bold text-stone-900 ${sizeClass} ${className}`.trim()}
    >
      TAV
    </span>
  );
}
