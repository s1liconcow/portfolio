'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type PageHeroProps = {
  eyebrow: string
  number: string
  title: ReactNode
  subtitle?: ReactNode
  meta?: { label: string; value: string }[]
  className?: string
}

export function PageHero({
  eyebrow,
  number,
  title,
  subtitle,
  meta,
  className,
}: PageHeroProps) {
  return (
    <section className={cn('relative edge pt-14 md:pt-20 pb-20', className)}>
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3 lg:col-span-2 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint tabular"
          >
            § Chapter {number}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="label-accent label"
          >
            {eyebrow}
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-display-xl tracking-tighter"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[56ch] text-[19px] leading-[1.5] text-ink-muted"
            >
              {subtitle}
            </motion.div>
          )}

          {meta && meta.length > 0 && (
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-ink-softrule pt-6"
            >
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-1.5">
                    {m.label}
                  </dt>
                  <dd className="font-display text-[20px] italic text-ink leading-tight">
                    {m.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </div>
    </section>
  )
}
