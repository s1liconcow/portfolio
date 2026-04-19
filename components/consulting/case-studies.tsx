import { Reveal } from '@/components/reveal'

const cases = [
  {
    client: 'Regulated-industry SaaS',
    problem: 'Zero-trust authorization stalled at scale — policy latency made every request a liability.',
    approach: 'Re-shaped evaluation as path-aware, with attribute inputs resolved at the edge and a tiered cache for device and location signals.',
    result: 'Policy evaluation under 50ms at p99. Audit coverage held. Compliance team stopped blocking launches.',
    tags: ['AuthZ', 'Zero Trust'],
    duration: '6 weeks',
  },
  {
    client: 'Large-enterprise infra org',
    problem: 'Service-mesh rollout stalled, with teams afraid of the blast radius.',
    approach: 'Per-namespace opt-in, explicit circuit-breakers and escape hatches, and a runbook teams could actually follow.',
    result: 'Adoption resumed without a single customer-visible incident. On-call stopped losing sleep.',
    tags: ['Service Mesh', 'SRE'],
    duration: '8 weeks',
  },
  {
    client: 'AI-native startup',
    problem: 'Agentic system worked in demo, drifted in prod; no way to measure the drift.',
    approach: 'Built a repo-grounded eval harness (see RepoGauge), wired evals into CI, and defined the authorization boundaries the agents had to respect.',
    result: 'Regression caught in PR rather than from customers. Agent cost per task down 35%. Trust, slowly, restored.',
    tags: ['AI Eng.', 'Evals'],
    duration: '4 weeks',
  },
]

export function CaseStudies() {
  return (
    <section className="edge pt-24 pb-10">
      <div className="border-t border-ink-rule/60 pt-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-10">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §IV
            </p>
            <p className="label-accent label mt-2">Case notes</p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-display-lg tracking-tight">
              The shape of the <span className="italic">work</span>.
            </h2>
            <p className="mt-5 max-w-[56ch] text-ink-muted text-[17px]">
              A few representative engagements drawn from years on Access
              SRE. Companies anonymised, details adjusted, shape preserved.
            </p>
          </div>
        </div>

        <Reveal>
          <div className="border-t border-ink-softrule">
            {cases.map((c, i) => (
              <article
                key={i}
                className="grid grid-cols-12 gap-4 md:gap-8 py-10 border-b border-ink-softrule"
              >
                <div className="col-span-12 md:col-span-3 lg:col-span-2">
                  <p className="font-mono text-[11px] tabular text-oxblood">
                    Case {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 font-display italic text-[18px] leading-tight">
                    {c.client}
                  </p>
                  <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-faint">
                    {c.duration}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-7 space-y-5">
                  <div>
                    <p className="label mb-1.5">Problem</p>
                    <p className="font-display italic text-[22px] leading-[1.2] tracking-tight">
                      “{c.problem}”
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-ink-softrule">
                    <div>
                      <p className="label mb-1.5">Approach</p>
                      <p className="text-[14.5px] text-ink-muted leading-[1.6]">
                        {c.approach}
                      </p>
                    </div>
                    <div>
                      <p className="label mb-1.5 label-accent">Result</p>
                      <p className="text-[14.5px] text-ink leading-[1.6]">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5 items-start md:justify-end">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border border-ink-softrule px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
