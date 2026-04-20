"use client";

import Link from "next/link";
import { motion } from "motion/react";

const sections = [
  {
    n: "II",
    title: "About",
    kicker: "The dossier",
    desc: "Where I came from, what I care about, and a picture that will date.",
    href: "/about",
    glyph: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="28" r="14" stroke="currentColor" fill="none" />
        <path
          d="M14 70 Q40 46 66 70"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    n: "III",
    title: "Consulting",
    kicker: "Work with me",
    desc: "Reliability reviews, platform architecture, and AI systems that hold up under traffic.",
    href: "/consulting",
    glyph: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          stroke="currentColor"
          fill="none"
        />
        <path d="M10 40 H70 M40 10 V70" stroke="currentColor" />
        <circle cx="40" cy="40" r="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "IV",
    title: "Projects",
    kicker: "What I’ve built",
    desc: "Personal infrastructure, tools for teams, and a handful of experiments that escaped.",
    href: "/projects",
    glyph: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path
          d="M40 10 L70 28 L70 52 L40 70 L10 52 L10 28 Z"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M40 10 V70 M10 28 L70 52 M10 52 L70 28"
          stroke="currentColor"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    n: "V",
    title: "Articles",
    kicker: "Thinking aloud",
    desc: "Essays on distributed systems, reliability, and the occasional misadventure.",
    href: "/articles",
    glyph: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path
          d="M16 16 H64 V64 H16 Z M16 28 H64 M16 40 H52 M16 52 H56"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
];

export function HomeSectionCards() {
  return (
    <section className="edge pt-20 pb-16">
      <div className="flex items-baseline justify-between border-t border-ink-rule/60 pt-6 pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          §II — Inside this issue
        </p>
        <p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint tabular">
          4 Chapters
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-softrule border border-ink-softrule">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={s.href}
              className="group relative block h-full bg-paper-light hover:bg-signal-soft transition-colors duration-500 p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint tabular">
                  Ch.&nbsp;{s.n}
                </span>
                <span className="w-12 h-12 text-ink-muted group-hover:text-oxblood transition-colors duration-500">
                  {s.glyph}
                </span>
              </div>

              <p className="label-accent label mt-8">{s.kicker}</p>
              <h3 className="mt-2 font-display text-[clamp(2.25rem,4vw,3.5rem)] tracking-tight leading-[0.95]">
                <span className="inline-block">{s.title}</span>
                <span className="inline-block ml-2 text-oxblood opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  →
                </span>
              </h3>

              <p className="mt-5 max-w-[40ch] text-[15px] text-ink-muted leading-[1.55]">
                {s.desc}
              </p>

              <div className="mt-10 flex items-center justify-between pt-5 border-t border-ink-softrule">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
                  Continue reading
                </span>
                <span className="font-display italic text-[15px] text-ink-muted">
                  pp.&nbsp;{(i + 1) * 12 + 4}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
