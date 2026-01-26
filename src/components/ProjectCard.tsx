import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-900/70 bg-slate-950/40 transition hover:border-slate-600">
      <Link href={`/portfolio/${project.slug}`} className="block overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.name} cover`}
          width={640}
          height={420}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-semibold text-slate-100">
          <Link href={`/portfolio/${project.slug}`} className="hover:text-white">
            {project.name}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-800 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        {(project.links?.live || project.links?.github) && (
          <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-300">
            {project.links?.live && (
              <a
                href={project.links.live}
                className="inline-flex items-center gap-2 hover:text-slate-100"
                target={project.links.live.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.links.live.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span aria-hidden="true">↗</span>
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                className="inline-flex items-center gap-2 hover:text-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">⌘</span>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
