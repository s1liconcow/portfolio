'use client'

import { motion } from 'motion/react'

const shapes = [
  {
    name: 'Office hours',
    duration: 'Weekly · ongoing',
    price: 'From $2.5k / mo',
    body: 'Two hours of my week, on tap. A standing call plus async Slack/email. The right shape for teams that need a thoughtful outside eye, not a deliverable.',
    features: [
      'Architecture review on demand',
      'Hiring & rubric guidance',
      'Code & design-doc reads',
    ],
    accent: false,
  },
  {
    name: 'Focused engagement',
    duration: '2–8 weeks',
    price: 'Fixed-price',
    body: 'Most common. A defined problem with a defined outcome — a reliability rollout, an AI pipeline hardening, a platform blueprint. Scoped together before we start.',
    features: [
      'Named deliverable(s)',
      'Code contributions where useful',
      'Written artifact you keep',
    ],
    accent: true,
  },
  {
    name: 'Advisory',
    duration: 'Quarterly',
    price: 'Cash or equity',
    body: 'For founders in the early innings. A few hours a month at your side as you make the architectural decisions that are hard to unmake later.',
    features: [
      'Strategic technical direction',
      'Interview loops & senior hires',
      'Early-stage partnership',
    ],
    accent: false,
  },
]

export function Engagements() {
  return (
    <section className="edge pt-24 pb-10">
      <div className="border-t border-ink-rule/60 pt-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §V
            </p>
            <p className="label-accent label mt-2">Engagement</p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-display-lg tracking-tight">
              Three shapes of <span className="italic">working together</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {shapes.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={
                s.accent
                  ? 'relative bg-ink text-paper-light p-8 md:p-10 border border-ink'
                  : 'relative bg-paper-light p-8 md:p-10 border border-ink-softrule'
              }
            >
              {s.accent && (
                <span className="absolute -top-3 left-8 bg-oxblood text-paper-light font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1">
                  Most chosen
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[32px] italic leading-none tracking-tight">
                  {s.name}
                </h3>
                <span
                  className={
                    s.accent
                      ? 'font-mono text-[10px] uppercase tracking-[0.16em] text-signal'
                      : 'font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint'
                  }
                >
                  0{i + 1}
                </span>
              </div>

              <p
                className={
                  s.accent
                    ? 'mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood-light'
                    : 'mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood'
                }
              >
                {s.duration}
                <span className={s.accent ? 'text-signal mx-2' : 'text-ink-faint mx-2'}>
                  ·
                </span>
                {s.price}
              </p>

              <p
                className={
                  s.accent
                    ? 'mt-5 text-[15px] text-paper/85 leading-[1.6]'
                    : 'mt-5 text-[15px] text-ink-muted leading-[1.6]'
                }
              >
                {s.body}
              </p>

              <ul
                className={
                  s.accent
                    ? 'mt-6 pt-5 border-t border-signal/30 space-y-2.5'
                    : 'mt-6 pt-5 border-t border-ink-softrule space-y-2.5'
                }
              >
                {s.features.map((f) => (
                  <li
                    key={f}
                    className={
                      s.accent
                        ? 'flex gap-2.5 text-[13.5px]'
                        : 'flex gap-2.5 text-[13.5px] text-ink'
                    }
                  >
                    <span
                      className={
                        s.accent
                          ? 'text-oxblood-light flex-none'
                          : 'text-oxblood flex-none'
                      }
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
