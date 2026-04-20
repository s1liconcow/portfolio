import { Reveal } from "@/components/reveal";

const activities = [
  {
    icon: "▲",
    label: "Building",
    title: "Just Auth — AI-powered access governance",
    detail:
      "Intercepting privileged data access — human and agent — with real-time business justifications and tamper-proof audit.",
  },
  {
    icon: "●",
    label: "Building",
    title: "RepoGauge — evaluating AI coding agents",
    detail:
      "Mines your repo’s bugfix history into SWE-bench-style tasks and benchmarks coding agents on the code you actually ship.",
  },
  {
    icon: "◆",
    label: "Building",
    title: "ClawFS — a filesystem for AI agents",
    detail:
      "POSIX-compliant, shared, object-backed. Written in Rust for multi-client agent workloads without the metadata DB overhead.",
  },
  {
    icon: "◐",
    label: "Writing",
    title: "“Climbing the Agentic Coding Ladder”",
    detail:
      "A field essay on where autonomous coding agents earn their keep — and the rungs that aren’t yet stable.",
  },
];

export function HomeCurrently() {
  return (
    <section className="edge pt-28 pb-10">
      <div className="grid grid-cols-12 gap-4 md:gap-8 mb-10">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint tabular">
            §I
          </p>
          <p className="label-accent label mt-2">Currently</p>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <h2 className="font-display text-display-lg tracking-tight">
            A short ledger of <span className="italic">present work</span>.
          </h2>
          <p className="mt-5 max-w-[54ch] text-ink-muted text-[17px]">
            What’s on the bench this season. Some of it will become articles;
            some of it will quietly fail and teach me something.
          </p>
        </div>
      </div>

      <Reveal>
        <div className="border-t border-ink-rule/60">
          {activities.map((a, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-7 border-b border-ink-softrule hover:bg-paper-light/60 transition-colors duration-300"
            >
              <div className="col-span-12 md:col-span-3 lg:col-span-2 flex items-baseline gap-3">
                <span className="text-oxblood text-[18px] leading-none">
                  {a.icon}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint tabular">
                  {a.label}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-7">
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] tracking-tight">
                  {a.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-3 text-[14px] text-ink-muted leading-[1.5]">
                {a.detail}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
