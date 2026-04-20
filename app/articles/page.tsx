import { PageHero } from "@/components/page-hero";
import { ArticleList } from "@/components/articles/list";
import { ArticleFeatured } from "@/components/articles/featured";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Articles — David Challoner",
};

export default function ArticlesPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Articles"
        number="V"
        title={
          <>
            Writing about the
            <br />
            <span className="italic">stubborn craft</span> of engineering.
          </>
        }
        subtitle={
          <>
            Essays on distributed systems, reliability, AI infrastructure, and
            the slower-moving ideas that I come back to again and again. A new
            piece every two or three weeks — occasionally faster, never on a
            schedule.
          </>
        }
        meta={[
          { label: "Books", value: "2 · contributor" },
          { label: "Essays", value: "Ad hoc" },
          { label: "Patents", value: "1 disclosure" },
          { label: "Feed", value: "LinkedIn · Email" },
        ]}
      />

      <Reveal>
        <ArticleFeatured />
      </Reveal>

      <ArticleList />

      {/* Newsletter */}
      <section className="edge pt-24">
        <Reveal>
          <div className="border border-ink-rule p-10 md:p-14 bg-paper-light relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.06] hatch"
            />
            <div className="grid grid-cols-12 gap-4 md:gap-8 relative">
              <div className="col-span-12 md:col-span-5">
                <p className="label-accent label mb-5">The dispatch</p>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-tight">
                  One careful letter,
                  <br />
                  <span className="italic">every other Sunday</span>.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[16px] text-ink-muted leading-[1.65]">
                  New essays in your inbox, lightly annotated with whatever I
                  happened to be reading that week. No tracking, no upsells, no
                  drip sequences. Unsubscribe with a thought.
                </p>
                <form className="mt-8 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="you@somewhere.com"
                    className="flex-1 bg-transparent border-b border-ink px-0 py-3 font-display text-[20px] italic focus:outline-none placeholder:text-ink-faint"
                  />
                  <button
                    type="submit"
                    className="self-start group inline-flex items-center gap-2 bg-ink text-paper-light px-6 py-3 text-[13px] font-mono uppercase tracking-[0.14em] hover:bg-oxblood transition-colors duration-300"
                  >
                    Subscribe
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </form>
                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
                  Occasional, careful, never algorithmic.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
