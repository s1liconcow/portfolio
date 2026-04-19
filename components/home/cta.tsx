import Link from 'next/link'

export function HomeCTA() {
  return (
    <section className="edge pt-24">
      <div className="relative border border-ink bg-ink text-paper-light p-10 md:p-16 overflow-hidden">
        {/* Diagonal hatch corner */}
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-60 h-60 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent 0, transparent 6px, #f2ecdb 6px, #f2ecdb 7px)',
          }}
        />

        <div className="relative grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
              §IV
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood-light mt-2">
              To close
            </p>
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
              Have a hard problem?
              <br />
              <span className="italic text-oxblood-light">Let’s talk.</span>
            </h2>

            <p className="mt-6 max-w-[54ch] text-[17px] text-paper/80">
              I take on a small number of engagements each quarter — usually
              two to six weeks — with teams who are serious about shipping
              and honest about where they’re stuck.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@challoner.dev"
                className="group inline-flex items-center gap-3 bg-paper-light text-ink px-6 py-3.5 text-[13px] font-mono uppercase tracking-[0.14em] hover:bg-oxblood hover:text-paper-light transition-colors duration-300"
              >
                <span>hello@challoner.dev</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <Link
                href="/consulting"
                className="text-[13px] font-mono uppercase tracking-[0.14em] text-signal hover:text-paper-light link-draw"
              >
                See what I offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
