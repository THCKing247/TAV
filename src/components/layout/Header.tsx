"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/BrandMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navItems.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 ${
                active
                  ? "bg-stone-200/80 text-stone-900"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-[#faf9f7]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-h-[44px] flex-col justify-center gap-0.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500"
          aria-label="Takes A Village — Home"
        >
          <BrandMark />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 sm:text-[11px]">
            Takes A Village
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <NavLinks className="flex flex-wrap items-center justify-end gap-1" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-involved"
            className="hidden min-h-[44px] items-center rounded-full bg-stone-800 px-4 py-2 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 sm:inline-flex"
          >
            Get Involved
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-300 bg-white p-2 text-stone-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-stone-200 bg-[#faf9f7] px-4 py-4 lg:hidden"
        >
          <NavLinks
            onNavigate={() => setOpen(false)}
            className="flex flex-col gap-1"
          />
          <Link
            href="/get-involved"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-[48px] w-full items-center justify-center rounded-full bg-stone-800 px-4 py-3 text-sm font-semibold text-stone-50"
          >
            Get Involved
          </Link>
        </div>
      ) : null}
    </header>
  );
}
