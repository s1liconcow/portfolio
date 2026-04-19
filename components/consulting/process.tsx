'use client'

import { motion } from 'motion/react'

const steps = [
  {
    n: 'I',
    title: 'Listen',
    duration: '30 min',
    body: 'A free call. You describe the problem; I ask a lot of questions. We both leave with a clearer picture of whether I’m useful.',
  },
  {
    n: 'II',
    title: 'Scope',
    duration: '1 week',
    body: 'A short written proposal: the problem as I understand it, the proposed engagement shape, deliverables, and a fixed price.',
  },
  {
    n: 'III',
    title: 'Dive',
    duration: '2–6 weeks',
    body: 'I work alongside your team — reading code, instrumenting systems, joining standups, writing design docs, shipping fixes.',
  },
  {
    n: 'IV',
    title: 'Hand-off',
    duration: '1 week',
    body: 'A durable artifact: a memo, a working system, a hiring brief, a playbook. The goal is that you don’t need me after I leave.',
  },
]

export function Process() {
  return (
    <section className="edge pt-24 pb-10">
      <div className="border-t border-ink-rule/60 pt-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §III
            </p>
            <p className="label-accent label mt-2">Process</p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-display-lg tracking-tight">
              How an engagement <span className="italic">unfolds</span>.
            </h2>
            <p className="mt-5 max-w-[56ch] text-ink-muted text-[17px]">
              Every engagement starts with a conversation and ends with
              something you keep. What happens in between is shaped to the
              problem.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[46px] hidden md:block"
          >
            <div className="h-px bg-ink-softrule" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-px md:bg-ink-softrule">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-paper md:bg-paper-light p-0 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex items-center justify-center w-9 h-9 border border-ink bg-paper-light">
                    <span className="font-mono text-[11px] tabular">
                      {s.n}
                    </span>
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint tabular">
                    {s.duration}
                  </span>
                </div>
                <h3 className="font-display italic text-[32px] leading-[1] tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] text-ink-muted leading-[1.6] max-w-[38ch]">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
