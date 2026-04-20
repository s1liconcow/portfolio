import { Reveal } from "@/components/reveal";

type Entry = {
  range: string;
  role: string;
  org: string;
  detail: string;
  tags?: string[];
};

const experience: Entry[] = [
  {
    range: "2026 —",
    role: "Independent",
    org: "Building & advising",
    detail:
      "Building JustAuth, RepoGauge, and ClawFS in the open. Taking on a small number of consulting engagements per quarter on authorization, reliability, service mesh, and agentic AI infrastructure.",
    tags: ["AuthZ", "AI Eng.", "SRE"],
  },
  {
    range: "— March 2026",
    role: "Uber Tech lead",
    org: "Google — Regulated Cloud SRE",
    detail:
      "Ran the authorization and data-governance systems that mediate how Googlers reach internal applications. Led the adoption of Anthos Service Mesh across Corp Eng to enforce consistent security policies over services deployed across cloud, corp data centers, and edge locations.",
    tags: ["AuthZ", "Zero Trust", "Anthos", "Istio"],
  },
  {
    range: "Earlier at Google",
    role: "Senior Site Reliability Engineer",
    org: "Google",
    detail:
      "A long tour across SRE teams. Primary author of “Eliminating Toil” in The Site Reliability Workbook (O’Reilly, 2018) and contributing author to Building Secure and Reliable Systems (Google, 2020).",
    tags: ["SRE", "Reliability", "Platform"],
  },
  {
    range: "Before Google",
    role: "Software Engineer",
    org: "Startups & infrastructure",
    detail:
      "Early-career engineering in distributed systems and infrastructure. Learned what “good” operations looks like largely by not having them yet.",
    tags: ["Distributed", "Infra"],
  },
];

const education: Entry[] = [
  {
    range: "2004 — 2008",
    role: "Computer Science + Political Science",
    org: "University of California, Santa Cruz",
    detail:
      "Data structures and algorithims, storage systems (Ceph!), distributed systems.  Also studied international trade, how democracies work, and which policies seem to promote the most prosperity.",
  },
];

const publications: Entry[] = [
  {
    range: "2018",
    role: "The Site Reliability Workbook — Ch. 6",
    org: "O’Reilly · Primary author",
    detail:
      "“Eliminating Toil” — the chapter on identifying and reducing the repetitive, predictable work that erodes SRE team capacity. Co-authored with John Looney, Vivek Rau, and others.",
    tags: ["Book", "SRE"],
  },
  {
    range: "2020",
    role: "Building Secure and Reliable Systems",
    org: "Google · Contributing author",
    detail:
      "Google’s follow-up to the SRE Book, bringing the disciplines of reliability and security into one volume.",
    tags: ["Book", "Security"],
  },
  {
    range: "2022",
    role: "Securing apps for Googlers using Anthos Service Mesh",
    org: "Google Cloud Blog · Co-author",
    detail:
      "With Anthony Bushong. How Corp Eng and Access SRE adopted Anthos Service Mesh to mediate Googler access across trust boundaries with minimal operational overhead.",
    tags: ["Service Mesh", "Zero Trust"],
  },
  {
    range: "2024",
    role: "Access Control Based on Entire Request Path",
    org: "Invention disclosure · TDCommons 6837",
    detail:
      "A path-aware access-control mechanism: validates every device a request traverses, not just endpoints — preventing regulated data from leaving permissible regions.",
    tags: ["Patent", "AuthZ"],
  },
  {
    range: "2026",
    role: "Climbing the Agentic Coding Ladder",
    org: "LinkedIn · Essay",
    detail:
      "A working field guide to autonomous coding agents: which rungs are solid, which are aspirational, and how to tell in practice.",
    tags: ["AI Eng."],
  },
];

function Group({
  label,
  chapter,
  title,
  entries,
}: {
  label: string;
  chapter: string;
  title: React.ReactNode;
  entries: Entry[];
}) {
  return (
    <section className="edge pt-20">
      <div className="border-t border-ink-rule/60 pt-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-10">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              §{chapter}
            </p>
            <p className="label-accent label mt-2">{label}</p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h2 className="font-display text-display-lg tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        <Reveal>
          <ol>
            {entries.map((e, i) => (
              <li
                key={i}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 border-t border-ink-softrule first:border-t-0"
              >
                <div className="col-span-12 md:col-span-3 lg:col-span-2">
                  <p className="font-mono text-[12px] text-ink-muted tabular uppercase tracking-[0.12em]">
                    {e.range}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-7">
                  <h3 className="font-display text-[26px] md:text-[30px] leading-[1.1] tracking-tight">
                    <span className="italic">{e.role}</span>
                    <span className="text-ink-faint"> · </span>
                    <span>{e.org}</span>
                  </h3>
                  <p className="mt-2.5 text-[15px] text-ink-muted leading-[1.6] max-w-[62ch]">
                    {e.detail}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5 items-start md:justify-end">
                  {e.tags?.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border border-ink-softrule px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function CV() {
  return (
    <>
      <Group
        label="Experience"
        chapter="II"
        title={
          <>
            A record of <span className="italic">where the time went</span>.
          </>
        }
        entries={experience}
      />
      <Group
        label="Publications"
        chapter="II.ii"
        title={
          <>
            Written, co-written, and{" "}
            <span className="italic">quoted elsewhere</span>.
          </>
        }
        entries={publications}
      />
      <Group
        label="Education"
        chapter="II.iii"
        title="Somewhat formal training."
        entries={education}
      />
    </>
  );
}
