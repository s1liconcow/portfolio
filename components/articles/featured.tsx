export function ArticleFeatured() {
  return (
    <section className="edge pb-8">
      <a
        href="https://www.linkedin.com/in/david-challoner-1b002511/recent-activity/articles/"
        target="_blank"
        rel="noreferrer"
        className="group block border-t border-ink-rule/60 pt-12 pb-6 hover:bg-paper-light/40 transition-colors duration-500 -mx-[var(--page-x)] px-[var(--page-x)]"
      >
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              § Featured
            </p>
            <p className="label-accent label mt-2">Essay · March 2026</p>
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint tabular mb-4">
              Latest — On LinkedIn
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
              Climbing the{' '}
              <span className="italic text-oxblood">Agentic Coding</span>{' '}
              Ladder.
            </h2>
            <p className="mt-8 max-w-[64ch] text-[18px] text-ink-muted leading-[1.6]">
              A working field guide to the rungs of autonomous coding: what
              agents can do reliably today, what they can fake, and where
              the real boundary lives. Drawn from running the benchmarks on
              my own code — not a curated leaderboard.
            </p>

            <div className="mt-10 flex items-center justify-between pt-6 border-t border-ink-softrule">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint tabular">
                Read on LinkedIn →
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint tabular">
                MMXXVI
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  )
}
