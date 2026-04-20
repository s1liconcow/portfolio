"use client";

import { motion } from "motion/react";

type Pillar = {
  n: string;
  title: string;
  tagline: string;
  body: string;
  outcomes: string[];
  glyph: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    n: "01",
    title: "Authorization & Data Governance",
    tagline: "Who can do what, where, and why — answered well.",
    body: "My home turf. I help teams design authorization that capture the whole story and hold up in regulated environments.  Technical enforcemennt of personnel or device-attribute-based access control, resource-aware policies, business justification validation, tamper-proof audit, and human-and-agent approval flows. Drawn from a decade of running access systems at Google scale.",
    outcomes: [
      "AuthZ architecture that minimizes friction and survives audits",
      "Policy-as-code with strict SLOs and reliable continuous iteration of policy",
      "Immutable audit trails that actually answer questions",
      "A path for agents, not just humans, to use safely",
    ],
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect
          x="30"
          y="40"
          width="40"
          height="38"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M38 40 V28 a12 12 0 0 1 24 0 V40"
          stroke="currentColor"
          fill="none"
        />
        <circle cx="50" cy="58" r="5" fill="currentColor" />
        <path d="M50 58 V68" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Site Reliability Engineering",
    tagline: "SLOs, error budgets, and grown-up on-call.",
    body: "I wrote the chapter on this. Literally — “Eliminating Toil” in The Site Reliability Workbook. I help teams make reliability a first-class concern: SLOs that map to user journeys, error-budget culture that keeps launches honest, and on-call you can actually sustain.",
    outcomes: [
      "Service-level objectives tied to business value and real user journeys",
      "Observability that answers the 2am question",
      "On-call rotations engineers don’t dread",
      "Post-mortems that ask 5-whys, capture root-cause, and change behaviour",
    ],
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M10 70 L30 50 L50 60 L70 30 L90 45"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
        />
        <circle cx="70" cy="30" r="4" fill="currentColor" />
        <path d="M10 90 H90 M10 10 V90" stroke="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Service Mesh & Zero Trust",
    tagline: "Connectivity without the chaos.",
    body: "Istio, Envoy, Anthos — I co-wrote the reference account of how Google’s Corp Eng rolled ASM internally. I help teams pick the mesh shape that fits their traffic, their org, and their on-call load, and the migration path that doesn’t break them in the process.",
    outcomes: [
      "A mesh architecture matched to your actual needs",
      "Zero-trust mTLS done without breaking everything",
      "Progressive delivery engineers trust",
      "A migration plan with graceful rollbacks",
    ],
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="currentColor"
          fill="none"
          opacity="0.5"
        />
        <circle cx="50" cy="15" r="4" fill="currentColor" />
        <circle cx="85" cy="50" r="4" fill="currentColor" />
        <circle cx="50" cy="85" r="4" fill="currentColor" />
        <circle cx="15" cy="50" r="4" fill="currentColor" />
        <circle cx="50" cy="50" r="6" stroke="currentColor" fill="none" />
        <path
          d="M50 15 L50 85 M15 50 L85 50"
          stroke="currentColor"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Distributed Systems & Platform",
    tagline: "Consensus, coordination, and correctness.",
    body: "The problems that don’t appear in a single-node test suite. Consistency models, partition behaviour, leader election, back-pressure, idempotency. Plus the platform engineering around them: golden paths, cluster topology, and blast-radius control.",
    outcomes: [
      "Architecture reviews that find the real risks",
      "Correctness properties stated plainly and tested",
      "Replay, reconciliation, and recovery paths",
      "A platform team charter worth keeping",
    ],
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="30" r="12" stroke="currentColor" fill="none" />
        <circle cx="75" cy="30" r="12" stroke="currentColor" fill="none" />
        <circle cx="50" cy="75" r="12" stroke="currentColor" fill="none" />
        <path
          d="M30 40 L45 65 M70 40 L55 65 M37 30 L63 30"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    n: "05",
    title: "AI & Agentic Engineering",
    tagline: "From demo to durable — when the user is an agent.",
    body: "A working prototype is not a product — especially when the product talks back. I help teams build serious agentic systems: evals that correlate with user value, observability for non-deterministic systems, and the infrastructure question we’re all still answering: what do filesystems, identity, and access look like when the caller is an agent?",
    outcomes: [
      "Evals that correlate with user value",
      "Observability for non-deterministic systems",
      "Authorization and audit for agent callers",
      "Cost & latency budgets that hold under growth",
    ],
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 15 Q30 30 30 55 Q30 75 50 85 Q70 75 70 55 Q70 30 50 15"
          stroke="currentColor"
          fill="none"
        />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
        <path
          d="M50 15 V50 M30 55 H70 M35 75 L65 35 M35 35 L65 75"
          stroke="currentColor"
          opacity="0.3"
        />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section className="edge pt-10 pb-10">
      <div className="border-t border-ink-rule/60 pt-10 pb-12">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §I — Practice
            </p>
            <h2 className="mt-3 font-display text-display-lg tracking-tight">
              Five pillars, one point of view.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint tabular">
            05 / 05
          </p>
        </div>
      </div>

      <div className="divide-y divide-ink-softrule border-y border-ink-rule/60">
        {pillars.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-12 gap-4 md:gap-8 py-14 group hover:bg-paper-light/50 transition-colors duration-500"
          >
            <div className="col-span-12 md:col-span-2 relative">
              <p className="font-mono text-[11px] text-ink-faint tabular">
                {p.n}
              </p>
              <div className="mt-6 w-14 h-14 text-ink-muted group-hover:text-oxblood transition-colors duration-500">
                {p.glyph}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 font-display italic text-[20px] text-oxblood">
                {p.tagline}
              </p>
              <p className="mt-5 max-w-[56ch] text-[16px] text-ink-muted leading-[1.65]">
                {p.body}
              </p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <p className="label mb-4">Typical outcomes</p>
              <ul className="space-y-2.5">
                {p.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex gap-3 text-[14px] text-ink leading-[1.5]"
                  >
                    <span className="text-oxblood flex-none mt-1.5">—</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
