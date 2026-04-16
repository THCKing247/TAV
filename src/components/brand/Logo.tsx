type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  "aria-hidden"?: boolean;
};

/**
 * Symbolic mark inspired by connected community + upward motion (urban, grassroots).
 * Replace with official logo asset when available — keep dimensions for layout stability.
 */
export function Logo({
  className = "",
  showWordmark = true,
  "aria-hidden": ariaHidden,
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-hidden={ariaHidden}
    >
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="Takes A Village logo mark"
        className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
      >
        <defs>
          <linearGradient id="tavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="55%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          width="48"
          height="48"
          rx="14"
          fill="#0b1220"
          className="shadow-[0_0_24px_rgba(124,58,237,0.35)]"
        />
        <path
          d="M24 10l3.2 6.4 7 .8-5.1 5 1.2 6.9L24 25.8l-6.3 3.3 1.2-6.9-5.1-5 7-.8L24 10z"
          fill="url(#tavGrad)"
          filter="url(#glow)"
        />
        <circle cx="24" cy="34" r="3.5" fill="#e0e7ff" opacity="0.9" />
        <path
          d="M14 36c3.5-4 6.8-6 10-6s6.5 2 10 6"
          stroke="url(#tavGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            Takes A Village
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-200/90 sm:text-xs">
            Pinellas Park · Community First
          </span>
        </span>
      ) : null}
    </span>
  );
}
