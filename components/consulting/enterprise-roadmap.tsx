"use client";

import { motion } from "motion/react";

type Tier = {
  n: string;
  name: string;
  unlocks: string;
  controls: string[];
  note?: string;
};

const tiers: Tier[] = [
  {
    n: "00",
    name: "Foundations",
    unlocks:
      "Mid-market & large commercial — most procurement reviews clear here.",
    controls: [
      "SOC 2 Type II",
      "ISO 27001",
      "Evidence automation",
      "VPAT / accessibility",
    ],
    note: "Table stakes. The goal is not to pass — it’s to pass cheaply and never again.",
  },
  {
    n: "01",
    name: "Commercial federal",
    unlocks: "Civilian agencies, state & local, heavily regulated commercial.",
    controls: [
      "FedRAMP Moderate",
      "StateRAMP",
      "CJIS where relevant",
      "Customer-held encryption (BYOK/HYOK)",
      "US-only residency",
    ],
    note: "The first step that actually changes the product. Expect 12–18 months and a dedicated program lead.",
  },
  {
    n: "02",
    name: "DoD-adjacent",
    unlocks:
      "DoD mission owners, intelligence community primes, defence industrial base.",
    controls: [
      "FedRAMP High",
      "DoD IL4 · IL5",
      "CMMC 2.0 L2 / L3",
      "GovCloud isolation",
      "Hardware root of trust",
    ],
    note: "Architecture starts to fork. Worth it if your deal sizes justify a second SKU.",
  },
  {
    n: "03",
    name: "Export-controlled",
    unlocks: "Primes, defence R&D, regulated research, the top of the pyramid.",
    controls: [
      "ITAR boundary",
      "EAR / dual-use controls",
      "Nationality-aware access",
      "Regional data residency (EU, UK, AUKUS)",
      "Air-gapped / sovereign options",
    ],
    note: "Path-aware access control — not just endpoint checks — is the quiet load-bearing requirement here.",
  },
];

const insiderControls = [
  {
    title: "Privileged access, justified in real time",
    body: "Every privileged action — human or agent — gates on a business justification evaluated in under 200ms. Justification and decision are sealed into the audit record.",
  },
  {
    title: "Path-aware authorization",
    body: "Validate every device a request traverses, not just source and destination. The class of control regulators are increasingly asking for, and what my 2024 patent disclosure addresses.",
  },
  {
    title: "Agent identity, audited like human identity",
    body: "Treat AI agents as first-class principals: their own identity, their own scoped permissions, their own attributable audit trail. Not a shared service account.",
  },
  {
    title: "Break-glass without the glass shattering",
    body: "Emergency access that is fast, heavily-audited, time-boxed, and reviewed. A pattern that survives a P0 *and* a post-incident GRC sit-down.",
  },
  {
    title: "Access reviews that aren’t theatre",
    body: "Quarterly attestations that actually remove privileges — structured so reviewers can say yes or no without reading a thousand rows.",
  },
];

export function EnterpriseRoadmap() {
  return (
    <section className="edge pt-24 pb-10">
      <div className="border-t border-ink-rule/60 pt-10">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §II
            </p>
            <p className="label-accent label mt-2">Enterprise roadmap</p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-display-lg tracking-tight">
              Selling into <span className="italic">Big Enterprise</span>?
              <br />
              Here’s the roadmap.
            </h2>
            <p className="mt-6 max-w-[62ch] text-ink-muted text-[17px] leading-[1.6]">
              Most startups find the regulated-enterprise and federal markets
              opaque — a wall of acronyms sitting between them and ten-figure
              deal sizes. It isn’t opaque. It’s a staged climb with well-known
              rungs, and each rung is tractable if you plan for it. Here’s the
              ladder I help teams map against — and the insider-risk controls
              that live across every stage.
            </p>
          </div>
        </div>

        {/* Roadmap ladder */}
        <div className="relative grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-7 relative">
            {/* Vertical rail */}
            <div
              aria-hidden
              className="absolute left-[18px] md:left-[26px] top-2 bottom-2 w-px bg-ink-softrule"
            />

            <ol className="space-y-8">
              {tiers.map((t, i) => (
                <motion.li
                  key={t.n}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-[48px] md:pl-[64px] group"
                >
                  {/* Rung marker */}
                  <div className="absolute left-0 top-0 flex items-center gap-3">
                    <span
                      className={
                        i === tiers.length - 1
                          ? "relative z-10 flex items-center justify-center w-9 h-9 bg-oxblood text-paper-light font-mono text-[11px] tabular"
                          : "relative z-10 flex items-center justify-center w-9 h-9 bg-paper-light border border-ink font-mono text-[11px] tabular"
                      }
                    >
                      {t.n}
                    </span>
                  </div>

                  <div className="border-b border-ink-softrule pb-7">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-tight">
                        {t.name}
                      </h3>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint tabular">
                        Stage {t.n}
                      </span>
                    </div>

                    <p className="mt-3 font-display italic text-[18px] text-ink-muted leading-[1.4] max-w-[56ch]">
                      Unlocks — {t.unlocks}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {t.controls.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink border border-ink-softrule px-2.5 py-1.5 bg-paper-light"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {t.note && (
                      <p className="mt-5 text-[14.5px] text-ink-muted leading-[1.6] max-w-[58ch] border-l border-oxblood pl-4">
                        {t.note}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Insider risk sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start"
          >
            <div className="relative bg-ink text-paper-light p-8 md:p-10 border border-ink overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-48 h-48 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent 0, transparent 6px, #f2ecdb 6px, #f2ecdb 7px)",
                }}
              />

              <div className="relative">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal">
                  Cross-cutting
                </p>
                <h3 className="mt-3 font-display text-[32px] leading-[1] tracking-tight">
                  Insider risk &amp;
                  <br />
                  <span className="italic text-oxblood-light">
                    privileged access
                  </span>
                </h3>
                <p className="mt-5 text-[14.5px] text-paper/80 leading-[1.65]">
                  The same set of controls keeps reappearing at every stage —
                  and it’s the set procurement and internal audit teams
                  scrutinise most. Get these right once and the climb is
                  dramatically cheaper.
                </p>

                <ol className="mt-7 space-y-5">
                  {insiderControls.map((c, i) => (
                    <li
                      key={c.title}
                      className="pt-5 border-t border-signal/20 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10.5px] tabular text-oxblood-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-display italic text-[18px] leading-[1.2] text-paper-light">
                          {c.title}
                        </h4>
                      </div>
                      <p className="mt-2 pl-[28px] text-[13.5px] text-paper/75 leading-[1.6]">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-signal/20 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.16em]">
                  <span className="text-signal">Reference</span>
                  <a
                    href="https://justauth.tech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-oxblood-light hover:text-paper-light transition-colors"
                  >
                    justauth.tech ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
