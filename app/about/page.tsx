import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Portrait } from '@/components/about/portrait'
import { CV } from '@/components/about/cv'

export const metadata = {
  title: 'About — David Challoner',
}

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="About"
        number="II"
        title={
          <>
            A short account of <span className="italic">the person</span> on
            the other end of the email.
          </>
        }
        subtitle={
          <>
            Engineer, manager, dad, builder. Spent the last stretch a Staff Engineer and Uber Tech
            Lead at Google.  Chapter author of The Site Reliability Workbook and Building Secure and Reliable Systems.
            Now independent and exploring how to make autonmous agentic engineering reliable.
          </>
        }
        meta={[
          { label: 'Based in', value: 'Los Angeles' },
          { label: 'Status', value: 'Independent · 2026' },
          { label: 'From', value: 'Google - 2017' },
          { label: 'Focus', value: 'AuthZ · AI · SRE' },
        ]}
      />

      {/* Portrait + bio */}
      <section className="edge pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start border-t border-ink-rule/60 pt-12">
          <Reveal className="col-span-12 md:col-span-5 lg:col-span-5 relative">
            <Portrait />
            <p className="caption mt-4 flex items-baseline justify-between">
              <span>Fig. 1 — The author, off the clock</span>
              <span>© DC</span>
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-7 prose-editorial"
          >
            <p className="dropcap text-[18px] leading-[1.65]">
              For the last five years I was an “Uber” Tech Lead at Google.
              My team ran the authorization and data-governance systems
              that enable GCP’s Regulated Cloud and mediate how Googlers
              reach internal applications — zero-trust infrastructure at a
              scale that leaves no room for vibes, and plenty of room for
              interesting problems. I stepped out in March 2026 to build
              independently.
            </p>
            <p className="text-[16.5px] leading-[1.65]">
              Along the way I co-wrote the Anthos Service Mesh adoption
              story for Google Corp Eng, was the primary author of
              “Eliminating Toil” in{' '}
              <em>The Site Reliability Workbook</em> (O’Reilly, 2018), and
              contributed to{' '}
              <em>Building Secure and Reliable Systems</em> (Google, 2020).
              I’ve filed a handful of patent disclosures on path-aware
              access control.
            </p>
            <p className="text-[16.5px] leading-[1.65]">
              Now that I’ve left, I’m building a few things in the open:{' '}
              <a
                href="https://justauth.tech"
                target="_blank"
                rel="noreferrer"
                className="link-draw link-ox"
              >
                JustAuth
              </a>
              ,{' '}
              <a
                href="https://repogauge.org"
                target="_blank"
                rel="noreferrer"
                className="link-draw link-ox"
              >
                RepoGauge
              </a>
              , and{' '}
              <a
                href="https://clawfs.dev"
                target="_blank"
                rel="noreferrer"
                className="link-draw link-ox"
              >
                ClawFS
              </a>
              . Each of them is me poking at a different edge of the
              question: what does infrastructure look like when the primary
              user is an agent, not a human?
            </p>
            <p className="text-[16.5px] leading-[1.65]">
              Off the keyboard I’m a dad, archer, hiker, a long-time tinkerer, and the
              proud maintainer of several half-finished side projects.
            </p>

            <div className="mt-8 pt-6 border-t border-ink-softrule grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <p className="label mb-1.5">Specialties</p>
                <p className="text-ink-muted leading-[1.6]">
                  Authorization · Data Governance · Zero-Trust · Service
                  Mesh · SRE · Agentic Systems.
                </p>
              </div>
              <div>
                <p className="label mb-1.5">Also</p>
                <p className="text-ink-muted leading-[1.6]">
                  Rust · Python · Go · TypeScript. Writer, occasional
                  speaker, patient debugger.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CV />

      {/* Values / principles */}
      <section className="edge pt-20">
        <div className="border-t border-ink-rule/60 pt-10">
          <div className="grid grid-cols-12 gap-4 md:gap-8 mb-10">
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                §III
              </p>
              <p className="label-accent label mt-2">Principles</p>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-10">
              <h2 className="font-display text-display-lg tracking-tight">
                How I think about the work.
              </h2>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-softrule border border-ink-softrule">
            {[
              [
                'Boring is a feature.',
                'The best infrastructure is the kind you can forget about. I reach for proven tools and earn the right to novelty.',
              ],
              [
                'Reliability is a lens.',
                'SLOs before launches. Error budgets as real constraints. If you can’t measure it, you can’t protect it.',
              ],
              [
                'Small surface area.',
                'Interfaces should be narrow, durable, and easy to reason about. Remove weight on the airframe.',
              ],
              [
                'Write things down.',
                'Design docs, post-mortems, READMEs. The org’s memory outlives its people; the artifacts should be worth inheriting.',
              ],
              [
                'Technology agnostic.',
                'I’ve seen pretty bad code in every language. Velocity and confidently shipping without regressions matters more than frameworks and languages.',
              ],
              [
                'Respect the on-call.',
                'Be deliberate about what surfaces as a ticket vs a page. Waking people up kills them slowly.',
              ],
            ].map(([title, body], i) => (
              <li
                key={i}
                className="bg-paper-light p-8 md:p-10 relative"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-[11px] tabular text-oxblood">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 rule-soft" />
                </div>
                <h3 className="font-display italic text-[26px] leading-[1.1] tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-muted leading-[1.6] max-w-[46ch]">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
