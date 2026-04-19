import Link from 'next/link'

export function HomeFeatured() {
  return (
    <section className="edge pt-20 pb-10">
      <div className="grid grid-cols-12 gap-4 md:gap-8 border-t border-ink-rule/60 pt-10">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            §III
          </p>
          <p className="label-accent label mt-2">From the archive</p>
        </div>

        <blockquote className="col-span-12 md:col-span-9 lg:col-span-10">
          <p className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] tracking-tight">
            <span className="text-oxblood text-[1.6em] leading-none align-[-0.05em] mr-1 font-display-wonk italic">
              “
            </span>
            Toil is the work you do that lacks enduring value. Eliminating it
            isn’t about lazy engineers; it’s about keeping the team’s attention
            on the problems only humans can solve.
            <span className="text-oxblood text-[1.6em] leading-none align-[-0.05em] ml-1 font-display-wonk italic">
              ”
            </span>
          </p>

          <footer className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-ink-softrule pt-6">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-faint mb-2">
                Paraphrased — “Eliminating Toil”
              </p>
              <a
                href="https://sre.google/workbook/eliminating-toil/"
                target="_blank"
                rel="noreferrer"
                className="font-display italic text-[22px] link-draw link-ox"
              >
                The Site Reliability Workbook · Ch. 6
              </a>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint tabular">
              O’Reilly · 2018 · Primary author
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
