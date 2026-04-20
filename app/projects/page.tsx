import { PageHero } from "@/components/page-hero";
import { ProjectList } from "@/components/projects/list";

export const metadata = {
  title: "Projects — David Challoner",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Projects"
        number="IV"
        title={
          <>
            Things I have
            <br />
            <span className="italic">quietly</span> built.
          </>
        }
        subtitle={
          <>
            A selection of personal and commercial work, ranging from the
            modestly useful to the ambitiously unfinished. Dates are honest;
            completeness isn’t.
          </>
        }
        meta={[
          { label: "Current", value: "3 shipping" },
          { label: "Languages", value: "Rust · Python · TS" },
          { label: "Home", value: "github / s1liconcow" },
          { label: "Year", value: "MMXXVI" },
        ]}
      />

      <ProjectList />
    </div>
  );
}
