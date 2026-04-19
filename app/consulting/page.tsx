import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Pillars } from '@/components/consulting/pillars'
import { EnterpriseRoadmap } from '@/components/consulting/enterprise-roadmap'
import { Process } from '@/components/consulting/process'
import { Engagements } from '@/components/consulting/engagements'
import { CaseStudies } from '@/components/consulting/case-studies'
import Link from 'next/link'

export const metadata = {
  title: 'Consulting — David Challoner',
}

export default function ConsultingPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Consulting"
        number="III"
        title={
          <>
            Hard problems,
            <br />
            <span className="italic">patiently</span> solved.
          </>
        }
        subtitle={
          <>
            I work with a small number of teams each quarter on the
            infrastructure problems that matter most — reliability, scale,
            platform design, and increasingly, the engineering behind
            serious AI systems.
          </>
        }
        meta={[
          { label: 'Availability', value: 'Q3 · Q4 2026' },
          { label: 'Engagement', value: '2–8 weeks' },
          { label: 'Remote', value: 'EU · US hours' },
          { label: 'Equity', value: 'Considered' },
        ]}
      />

      <Pillars />
      <EnterpriseRoadmap />
      <Process />
      <CaseStudies />
      <Engagements />

      {/* Closing CTA */}
      <section className="edge pt-24">
        <Reveal>
          <div className="relative border-y border-ink py-16 md:py-24 text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-x-0 -top-16 h-16 hatch opacity-40"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 -bottom-16 h-16 hatch opacity-40"
            />
            <p className="label-accent label mb-6">To begin</p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
              Tell me what’s <span className="italic text-oxblood">on fire</span>.
            </h2>
            <p className="mt-6 max-w-[52ch] mx-auto text-[17px] text-ink-muted">
              A single, honest paragraph is all it takes to start. I read
              every message, and reply to most within two business days.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@challoner.dev"
                className="group inline-flex items-center gap-3 bg-ink text-paper-light px-7 py-4 text-[13px] font-mono uppercase tracking-[0.14em] hover:bg-oxblood transition-colors duration-300"
              >
                hello@challoner.dev
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <Link
                href="/projects"
                className="text-[13px] font-mono uppercase tracking-[0.14em] link-draw"
              >
                See past work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
