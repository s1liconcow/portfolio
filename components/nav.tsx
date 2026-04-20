"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "Index", n: "I" },
  { href: "/about", label: "About", n: "II" },
  { href: "/consulting", label: "Consulting", n: "III" },
  { href: "/projects", label: "Projects", n: "IV" },
  { href: "/articles", label: "Articles", n: "V" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-paper/70 border-b border-ink-rule/50"
          : "bg-transparent",
      )}
    >
      {/* Folio micro-row */}
      <div className="hidden md:flex edge items-center justify-between pt-3 pb-1 text-[10.5px] font-mono uppercase tracking-[0.18em] text-ink-muted">
        <div className="flex items-center gap-5">
          <span className="tabular">Fol. MMXXVI</span>
          <span className="text-ink-faint">·</span>
          <span>Issue 01</span>
          <span className="text-ink-faint">·</span>
          <span>Systems &amp; Software</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="status-dot animate-pulse-dot" aria-hidden />
          <span>Accepting work — Q3 2026</span>
        </div>
      </div>

      {/* Main nav row */}
      <div className="edge flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display italic text-[26px] md:text-[30px] leading-none tracking-tight">
            D.<span className="text-oxblood">Challoner</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative px-3 py-1.5 text-[13.5px] transition-colors duration-300",
                  active ? "text-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                <span className="font-mono text-[10px] text-ink-faint mr-1.5 tabular">
                  {l.n}
                </span>
                {l.label}
                <span
                  className={cn(
                    "absolute left-3 right-3 bottom-0.5 h-px origin-left bg-oxblood transition-transform duration-500",
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
          <a
            href="mailto:hello@challoner.dev"
            className="ml-4 px-3 py-1.5 text-[13px] font-mono uppercase tracking-[0.14em] border border-ink text-ink hover:bg-ink hover:text-paper-light transition-colors duration-300"
          >
            Get in touch
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center border border-ink-rule"
        >
          <span
            className={cn(
              "absolute w-4 h-px bg-ink transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={cn(
              "absolute w-4 h-px bg-ink transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute w-4 h-px bg-ink transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden edge overflow-hidden transition-all duration-500 ease-out",
          open ? "max-h-[500px] pb-6" : "max-h-0",
        )}
      >
        <div className="rule-soft my-2" />
        <div className="flex flex-col divide-y divide-ink-softrule">
          {LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "py-3 flex items-baseline gap-3",
                  active ? "text-ink" : "text-ink-muted",
                )}
              >
                <span className="font-mono text-[10px] text-ink-faint w-4 tabular">
                  {l.n}
                </span>
                <span className="font-display text-xl">{l.label}</span>
              </Link>
            );
          })}
          <a
            href="mailto:hello@challoner.dev"
            className="py-3 flex items-baseline gap-3 text-oxblood"
          >
            <span className="font-mono text-[10px] text-ink-faint w-4">@</span>
            <span className="font-display italic text-xl">Say hello</span>
          </a>
        </div>
      </div>

      <div className="rule-hair opacity-50" />
    </header>
  );
}
