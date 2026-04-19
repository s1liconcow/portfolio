'use client'

import { motion } from 'motion/react'

/**
 * Portrait placeholder — swap with a real photo when ready.
 * Replace this entire component body with:
 *
 *   <Image
 *     src="/david.jpg"
 *     alt="David Challoner"
 *     width={800}
 *     height={1000}
 *     className="w-full h-auto grayscale"
 *   />
 *
 * until then, this is a duotone monogram frame that looks intentional.
 */
export function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="absolute inset-0 border border-ink-rule overflow-hidden">
        {/* Duotone base */}
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="duotone" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c8533a" />
              <stop offset="60%" stopColor="#7a2815" />
              <stop offset="100%" stopColor="#1a1610" />
            </linearGradient>
            <filter id="grain2">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
              <feColorMatrix values="0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.07 0 0 0 0.9 0" />
              <feComposite in="SourceGraphic" in2="*" operator="over" />
            </filter>
            <pattern id="halftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.1" fill="#16130c" />
            </pattern>
          </defs>

          <rect width="400" height="500" fill="url(#duotone)" />

          {/* Halftone silhouette — abstract portrait */}
          <g opacity="0.42">
            <ellipse cx="200" cy="200" rx="90" ry="110" fill="url(#halftone)" />
            <path
              d="M80 500 Q200 330 320 500 Z"
              fill="url(#halftone)"
            />
          </g>

          {/* Soft paper vignette */}
          <rect
            width="400"
            height="500"
            fill="url(#grain2)"
            opacity="0.25"
            style={{ mixBlendMode: 'multiply' }}
          />
        </svg>

        {/* Monogram overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-paper-light text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">
              Portrait
            </p>
            <p className="font-display italic text-[140px] leading-none tracking-tight">
              DC
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2">
              v.MMXXVI
            </p>
          </div>
        </motion.div>

        {/* Inner crosshair */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, transparent calc(50% - .5px), rgba(242,236,219,0.15) calc(50% - .5px), rgba(242,236,219,0.15) calc(50% + .5px), transparent calc(50% + .5px)), linear-gradient(to bottom, transparent calc(50% - .5px), rgba(242,236,219,0.15) calc(50% - .5px), rgba(242,236,219,0.15) calc(50% + .5px), transparent calc(50% + .5px))',
          }}
        />
      </div>

      {/* Offset shadow frame */}
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 w-full h-full border border-ink-softrule -z-10"
      />
    </div>
  )
}
