import Image from "next/image";
import Button from "./Button";
import type { Project } from "@/lib/data";

type CaseStudyLayoutProps = {
  project: Project;
};

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {project.category} • {project.year}
        </p>
        <h1 className="font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
          {project.name}
        </h1>
        <p className="text-lg leading-8 text-slate-300">{project.summary}</p>
        <Button href={project.cta.href} variant="secondary">
          {project.cta.label}
        </Button>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <section className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl text-slate-100">
              Project overview
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.overview}
            </p>
          </section>
          <section className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl text-slate-100">Problem</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.problem}
            </p>
          </section>
          <section className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl text-slate-100">Solution</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.solution}
            </p>
          </section>
          <section className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl text-slate-100">Outcome</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {project.outcome.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-electric">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Role
            </p>
            <p className="mt-3 text-sm text-slate-200">{project.role}</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-800 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-slate-100">Screenshots</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.screenshots.map((shot) => (
            <div
              key={shot}
              className="overflow-hidden rounded-2xl border border-slate-900/60 bg-slate-950/40"
            >
              <Image
                src={shot}
                alt={`${project.name} screenshot`}
                width={720}
                height={480}
                className="h-52 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-2xl border border-slate-900/70 bg-slate-950/60 p-8 text-center">
        <h2 className="font-display text-2xl text-slate-100">
          Ready to build the next milestone?
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          Let us map the strategy, ship the product, and scale the growth.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/contact">Start a project</Button>
        </div>
      </div>
    </div>
  );
}
