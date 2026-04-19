'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import mePortrait from '@/me.png'

export function Portrait() {
  return (
    <div className="relative aspect-[7/10] w-full">
      <div className="absolute inset-0 -z-20 bg-paper-deep" />
      <div
        aria-hidden
        className="absolute inset-x-[8%] top-4 h-px bg-ink-rule/60 -z-10"
      />
      <div
        aria-hidden
        className="absolute inset-y-[8%] right-4 w-px bg-ink-rule/40 -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-hidden border border-ink-rule bg-paper-light shadow-[10px_10px_0_0_rgba(206,196,172,0.7)]"
      >
        <div className="absolute inset-[14px] overflow-hidden border border-ink-rule/60 bg-paper">
          <Image
            src={mePortrait}
            alt="David Challoner smiling with his child in a black-and-white illustrated portrait"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 100vw"
            className="object-cover object-[54%_44%]"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,236,219,0.05),rgba(236,228,208,0)_18%,rgba(22,19,12,0.02)_100%)]"
          />

          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent calc(50% - .5px), rgba(185,176,154,0.22) calc(50% - .5px), rgba(185,176,154,0.22) calc(50% + .5px), transparent calc(50% + .5px)), linear-gradient(to bottom, transparent calc(50% - .5px), rgba(185,176,154,0.16) calc(50% - .5px), rgba(185,176,154,0.16) calc(50% + .5px), transparent calc(50% + .5px))',
            }}
          />

          <div className="absolute left-4 top-4 border border-ink-rule/70 bg-paper-light/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
            Family Portrait
          </div>
        </div>
      </motion.div>
    </div>
  )
}
