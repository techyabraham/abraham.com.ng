import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio | Abraham Akomolafe",
  description: "Case studies and product systems built by Abraham Akomolafe.",
};

export default function PortfolioPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Strategic products built for growth."
      description="Explore selected case studies across mobility, health, commerce, and platform systems."
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-900/70 bg-slate-950/60 px-5 py-4 text-sm text-slate-400">
        <span>Filter ready: All projects</span>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Categories: Mobility, Health, Commerce
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
