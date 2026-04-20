"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Project = {
  n: string;
  name: string;
  year: string;
  kind: string;
  tagline: string;
  body: string;
  tech: string[];
  status: "live" | "archived" | "in-progress";
  link?: string;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "Just Auth",
    year: "2026",
    kind: "Startup · Commercial",
    tagline: "AI-powered privileged data access governance.",
    body: "Intercepts and validates privileged data access requests — from humans and AI systems alike — by requiring real-time business justifications before granting access. Sub-200ms validation. Tamper-proof audit logs. Integrates with M365, AWS, GCP, Snowflake, Okta, and the rest of the enterprise stack. Built for regulated industries that can’t afford either false positives or unjustified access.",
    tech: ["AuthZ", "ABAC", "Audit", "SOX · HIPAA"],
    status: "live",
    link: "https://justauth.tech",
  },
  {
    n: "02",
    name: "RepoGauge",
    year: "2026",
    kind: "OSS / Tool",
    tagline: "Benchmark AI coding agents on your actual codebase.",
    body: "A local-first benchmarking tool that mines bugfix commits from your repo’s history, converts them into SWE-bench-style evaluation tasks, and runs coding agents side-by-side with full cost and token tracking. Also trains cost-aware routers to pick the right solver per task. Because “it works on the SWE-bench leaderboard” is not quite “it works on our code”.",
    tech: ["Python", "Docker", "SWE-bench", "LLM Evals"],
    status: "live",
    link: "https://repogauge.org",
  },
  {
    n: "03",
    name: "ClawFS",
    year: "2026",
    kind: "OSS / Infra",
    tagline: "A shared filesystem for AI agents.",
    body: "Persistent, POSIX-compliant, object-backed filesystem for AI-agent and multi-client workloads. No external metadata DB required — metadata is log-structured into the same object store as the data. Passes pjdfstest and the xfstests smoke suite. An answer to a question I kept running into: what does the filesystem look like when most of your callers are agents?",
    tech: ["Rust", "FUSE", "S3 · GCS", "POSIX"],
    status: "live",
    link: "https://clawfs.dev",
  },
  {
    n: "04",
    name: "Access Control Based on Request Path",
    year: "2024",
    kind: "Invention disclosure",
    tagline: "Every device the request crosses, not just the endpoints.",
    body: "A path-aware access-control mechanism: rather than checking source and destination, validate every device a request traverses against regional data controls. Published as TDCommons 6837.",
    tech: ["AuthZ", "Policy", "Data Governance"],
    status: "live",
    link: "https://www.tdcommons.org/dpubs_series/6837/",
  },
  {
    n: "05",
    name: "Securing apps for Googlers using Anthos Service Mesh",
    year: "2022",
    kind: "Writing · Google Cloud",
    tagline: "How Access SRE rolled ASM internally at Google.",
    body: "Co-authored with Anthony Bushong. The reference account of how Google’s Corp Eng teams adopted Anthos Service Mesh to secure Googler access across trust boundaries, across cloud and on-prem, with minimal operational overhead.",
    tech: ["Anthos", "Istio", "Zero Trust"],
    status: "live",
    link: "https://cloud.google.com/blog/topics/developers-practitioners/securing-apps-googlers-using-anthos-service-mesh",
  },
];

const statusStyles: Record<Project["status"], string> = {
  live: "text-oxblood border-oxblood/40",
  archived: "text-ink-faint border-ink-softrule",
  "in-progress": "text-ink border-ink",
};

export function ProjectList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="edge pb-10">
      <div className="border-t border-ink-rule/60">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.n}
            href={p.link || "#"}
            target={p.link?.startsWith("http") ? "_blank" : undefined}
            rel={p.link?.startsWith("http") ? "noreferrer" : undefined}
            onMouseEnter={() => setHovered(p.n)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "group relative grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-ink-softrule transition-colors duration-500",
              hovered && hovered !== p.n ? "opacity-40" : "opacity-100",
              "hover:bg-paper-light/60",
            )}
          >
            <div className="col-span-12 md:col-span-1">
              <p className="font-mono text-[11px] text-ink-faint tabular">
                {p.n}
              </p>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h3 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.95] tracking-tight">
                  {p.name}
                </h3>
                {p.link && (
                  <span className="text-oxblood text-[18px] translate-y-[-4px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                    ↗
                  </span>
                )}
              </div>
              <p className="mt-3 font-display italic text-[20px] md:text-[22px] text-ink-muted leading-[1.3]">
                {p.tagline}
              </p>
              <p className="mt-4 max-w-[60ch] text-[15px] text-ink-muted leading-[1.6]">
                {p.body}
              </p>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-5 flex flex-col md:items-end gap-4">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.16em] border px-2 py-1",
                    statusStyles[p.status],
                  )}
                >
                  {p.status === "live"
                    ? "● live"
                    : p.status === "archived"
                      ? "◌ archived"
                      : "◐ wip"}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint tabular">
                  {p.year} · {p.kind}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted border border-ink-softrule px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
        Code lives on{" "}
        <a
          href="https://github.com/s1liconcow"
          target="_blank"
          rel="noreferrer"
          className="text-ink link-draw"
        >
          github / s1liconcow
        </a>
        .
      </p>
    </section>
  );
}
