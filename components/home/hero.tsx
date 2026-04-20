"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative edge pt-10 md:pt-16 pb-24 md:pb-36 overflow-hidden"
    >
      {/* Decorative crosshair grid */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent calc(50% - .5px), var(--softrule) calc(50% - .5px), var(--softrule) calc(50% + .5px), transparent calc(50% + .5px))",
        }}
      />

      {/* Top running line */}
      <div className="relative flex items-center justify-between pb-10 md:pb-16 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-faint">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="flex items-center gap-2 tabular"
        >
          <span className="w-6 h-px bg-ink-faint" />
          No. 01 — MMXXVI
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="hidden sm:flex items-center gap-3"
        >
          <span className="status-dot animate-pulse-dot" />
          <span>Open to consulting — Q3 2026</span>
        </motion.span>
      </div>

      <motion.div style={{ y, opacity }} className="relative">
        {/* Big name — stacked, editorial */}
        <div className="relative grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
              className="label-accent label"
            >
              Portfolio
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-10 lg:col-span-11 relative">
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 1.1, delay: 0.25, ease: easeOut }}
              className="font-display leading-[0.82] tracking-[-0.045em] text-[clamp(4.5rem,16vw,16rem)]"
            >
              <span className="block">David</span>
              <span className="block italic pl-[0.2em]">
                Chall<span className="text-oxblood">o</span>ner
                <span className="inline-block w-2 h-2 bg-oxblood rounded-full ml-2 align-middle" />
              </span>
            </motion.h1>

            {/* Tagline & meta */}
            <div className="grid grid-cols-12 gap-4 md:gap-8 mt-10 md:mt-16">
              <div className="col-span-12 md:col-span-7">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
                  className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.2] tracking-tight text-ink max-w-[22ch]"
                >
                  Building at the edges of <em className="italic">AuthZ</em>,{" "}
                  <em className="italic">Reliability</em>, and{" "}
                  <em className="italic">Agentic AI</em>.
                </motion.p>
              </div>

              <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.0 }}
                >
                  <p className="label mb-2">Most recently</p>
                  <p className="font-display text-[22px] italic">
                    Uber Tech Lead · Regulated Cloud, Google
                  </p>
                  <p className="text-ink-muted text-[14px] mt-1">
                    Authorization · Data Governance · Service Mesh
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.15 }}
                  className="flex items-center gap-3 pt-2"
                >
                  <Link
                    href="/consulting"
                    className="group relative inline-flex items-center gap-2 bg-ink text-paper-light px-5 py-3 text-[13px] font-mono uppercase tracking-[0.14em] overflow-hidden transition-colors duration-300 hover:bg-oxblood"
                  >
                    <span className="relative z-10">Hire me</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-[13px] font-mono uppercase tracking-[0.14em] text-ink link-draw"
                  >
                    Read the dossier
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative mt-20 md:mt-28 flex items-end justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-ink-faint"
      >
        <div className="flex items-center gap-3">
          <span className="block w-px h-10 bg-ink-faint relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-4 bg-ink animate-[slideDown_2.2s_ease-in-out_infinite]" />
          </span>
          <span>Scroll for the rest</span>
        </div>
        <div className="hidden sm:block tabular">
          34°03′N · 118°15′W — Los Angeles
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(250%);
          }
        }
      `}</style>
    </section>
  );
}
