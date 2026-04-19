'use client'

import { motion } from 'motion/react'

type Article = {
  n: string
  date: string
  readTime: string
  category: string
  title: string
  excerpt: string
  link: string
  external?: boolean
}

const ARTICLES: Article[] = [
  {
    n: '05',
    date: 'Mar 2026',
    readTime: 'LinkedIn',
    category: 'AI Eng.',
    title: 'Climbing the Agentic Coding Ladder.',
    excerpt:
      'A working field guide to autonomous coding: which rungs are reliable today, which are still theatre, and how to tell from your own codebase rather than a curated leaderboard.',
    link: 'https://www.linkedin.com/in/david-challoner-1b002511/recent-activity/articles/',
    external: true,
  },
  {
    n: '04',
    date: 'Apr 2024',
    readTime: 'TDCommons',
    category: 'AuthZ',
    title: 'Access Control Based on Entire Request Path.',
    excerpt:
      'Invention disclosure. Rather than authorizing only source and destination, validate every device a request traverses — so regulated data can’t drift outside permitted regions on the way.',
    link: 'https://www.tdcommons.org/dpubs_series/6837/',
    external: true,
  },
  {
    n: '03',
    date: 'Aug 2022',
    readTime: 'Google Cloud',
    category: 'Service Mesh',
    title: 'Securing apps for Googlers using Anthos Service Mesh.',
    excerpt:
      'Co-authored with Anthony Bushong. How Access SRE and Corp Eng adopted Anthos Service Mesh to mediate Googler access across trust boundaries, across cloud and on-prem, with consistent policy and minimal ops overhead.',
    link: 'https://cloud.google.com/blog/topics/developers-practitioners/securing-apps-googlers-using-anthos-service-mesh',
    external: true,
  },
  {
    n: '02',
    date: '2020',
    readTime: 'Book — Google',
    category: 'Security',
    title: 'Building Secure and Reliable Systems.',
    excerpt:
      'Contributing author. Google’s companion volume to the SRE Book, bringing reliability and security into a single coherent discipline.',
    link: 'https://static.googleusercontent.com/media/sre.google/en//static/pdf/building_secure_and_reliable_systems.pdf',
    external: true,
  },
  {
    n: '01',
    date: '2018',
    readTime: 'Book — Ch. 6',
    category: 'SRE',
    title: 'The Site Reliability Workbook — Eliminating Toil.',
    excerpt:
      'Primary author of Chapter 6. A practitioner’s guide to identifying, measuring, and reducing the repetitive operational work that erodes SRE team capacity — and what to do with the capacity you get back.',
    link: 'https://sre.google/workbook/eliminating-toil/',
    external: true,
  },
]

const categoryColor: Record<string, string> = {
  'AI Eng.': 'text-oxblood',
  AuthZ: 'text-oxblood',
  'Service Mesh': 'text-ink',
  Security: 'text-ink',
  SRE: 'text-ink',
}

export function ArticleList() {
  return (
    <section className="edge pt-14">
      <div className="border-t border-ink-rule/60">
        <div className="flex items-baseline justify-between py-5 border-b border-ink-softrule">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            § Selected writing &amp; publications
          </p>
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-faint">
            <span>Most recent ↓</span>
          </div>
        </div>

        {ARTICLES.map((a, i) => (
          <motion.div
            key={a.n}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={a.link}
              target={a.external ? '_blank' : undefined}
              rel={a.external ? 'noreferrer' : undefined}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 border-b border-ink-softrule hover:bg-paper-light/60 transition-colors duration-400"
            >
              <div className="col-span-12 md:col-span-2 flex md:flex-col gap-3 md:gap-1 justify-between md:justify-start">
                <p className="font-mono text-[10.5px] tabular uppercase tracking-[0.14em] text-ink-faint">
                  № {a.n}
                </p>
                <p className="font-mono text-[10.5px] tabular uppercase tracking-[0.14em] text-ink-muted">
                  {a.date}
                </p>
                <p className="font-mono text-[10.5px] tabular uppercase tracking-[0.14em] text-ink-faint">
                  {a.readTime}
                </p>
              </div>

              <div className="col-span-12 md:col-span-8">
                <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-tight">
                  <span className="inline">{a.title}</span>
                  <span className="inline-block ml-1 text-oxblood translate-x-[-6px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                    →
                  </span>
                </h3>
                <p className="mt-3 max-w-[62ch] text-[15px] text-ink-muted leading-[1.6]">
                  {a.excerpt}
                </p>
              </div>

              <div className="col-span-12 md:col-span-2 md:text-right">
                <span
                  className={`font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                    categoryColor[a.category] || 'text-ink-muted'
                  }`}
                >
                  {a.category}
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
        More writing lives on{' '}
        <a
          href="https://www.linkedin.com/in/david-challoner-1b002511/recent-activity/articles/"
          target="_blank"
          rel="noreferrer"
          className="text-ink link-draw"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  )
}
