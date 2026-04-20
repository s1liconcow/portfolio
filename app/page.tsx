import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { HomeHero } from "@/components/home/hero";
import { HomeCurrently } from "@/components/home/currently";
import { HomeSectionCards } from "@/components/home/section-cards";
import { HomeFeatured } from "@/components/home/featured";
import { HomeCTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <div className="pb-24">
      <HomeHero />

      <Marquee
        items={[
          "Distributed Systems",
          "Service Mesh",
          "Kubernetes",
          "Site Reliability",
          "Platform Engineering",
          "AI Infrastructure",
          "Observability",
          "Developer Tools",
        ]}
      />

      <HomeCurrently />

      <HomeSectionCards />

      <Reveal>
        <HomeFeatured />
      </Reveal>

      <HomeCTA />
    </div>
  );
}
