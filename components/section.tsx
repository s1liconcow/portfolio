import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  label?: string;
  number?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
};

export function SectionHeader({
  label,
  number,
  title,
  lede,
  className,
  id,
}: Omit<SectionProps, "children">) {
  return (
    <div id={id} className={cn("edge", className)}>
      <div className="grid grid-cols-12 gap-4 md:gap-8 pt-16 pb-10 border-t border-ink-rule/60">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          {number && (
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint tabular">
              §{number}
            </p>
          )}
          {label && <p className="label-accent label mt-2">{label}</p>}
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <h2 className="font-display text-display-lg tracking-tight">
            {title}
          </h2>
          {lede && (
            <div className="mt-5 max-w-[52ch] text-ink-muted text-[17px] leading-[1.55]">
              {lede}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Section({
  label,
  number,
  title,
  lede,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <SectionHeader label={label} number={number} title={title} lede={lede} />
      <div className="edge">{children}</div>
    </section>
  );
}
