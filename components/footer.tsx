import Link from "next/link";
import { RegistrationMarks } from "./registration-marks";

export function Footer() {
  return (
    <footer className="relative mt-40 border-t border-ink-rule/60 bg-paper-light/40">
      <RegistrationMarks />

      <div className="edge pt-16 pb-10">
        <div className="grid grid-cols-12 gap-8 pb-12 border-b border-ink-softrule">
          {/* Big mark */}
          <div className="col-span-12 md:col-span-5">
            <p className="label mb-6">§ Colophon</p>
            <h3 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] tracking-tight">
              Built &amp;
              <br />
              <span className="italic">maintained</span>
              <br />
              with care.
            </h3>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="label mb-4">Directory</p>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/about" className="link-draw">
                  About
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="link-draw">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/projects" className="link-draw">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/articles" className="link-draw">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="label mb-4">Correspondence</p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="mailto:hello@challoner.dev"
                  className="link-draw link-ox font-display italic text-2xl"
                >
                  hello@challoner.dev
                </a>
              </li>
              <li className="flex gap-5 pt-3">
                <a
                  href="https://github.com/s1liconcow"
                  className="text-ink-muted hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/david-challoner-1b002511/"
                  className="text-ink-muted hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://justauth.tech"
                  className="text-ink-muted hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  JustAuth
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8 text-[11px] font-mono uppercase tracking-[0.14em] text-ink-faint">
          <div className="space-y-1.5">
            <p>
              <span className="text-ink-muted">© MMXXVI</span> —{" "}
              D.&nbsp;Challoner. All typography &amp; errors my own.
            </p>
            <p>
              Set in{" "}
              <span className="italic font-display normal-case tracking-normal text-ink">
                Fraunces
              </span>{" "}
              &amp;{" "}
              <span className="font-display normal-case tracking-normal text-ink">
                Geist
              </span>
              . Built with Next.js.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span>v1.0.0</span>
            <span className="text-ink-softrule">|</span>
            <span className="tabular">34°03′N · 118°15′W</span>
            <span className="text-ink-softrule">|</span>
            <span className="flex items-center gap-2">
              <span className="status-dot animate-pulse-dot" />
              online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
