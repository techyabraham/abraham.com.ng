import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { styles } from "@/lib/styles";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`${styles.card} group overflow-hidden rounded-2xl border border-slate-900/70 bg-slate-950/40 transition hover:border-slate-600`}
    >
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
          <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-slate-300">
            {project.links?.live && (
              <a
                href={project.links.live}
                className={styles.tag}
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
                className={styles.tag}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.66-.33 2.51-.33.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.47C19.13 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10Z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
