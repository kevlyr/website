import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, PenLine, Sparkles, Sprout } from "lucide-react";
import type { Project } from "@/lib/projects";

const iconMap = {
  sprout: Sprout,
  pen: PenLine,
  sparkle: Sparkles
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];
  const isExternal = /^https?:\/\//.test(project.href);
  const primaryLabel = project.hrefLabel ?? "Open project";

  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft">
      {isExternal ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute inset-0 z-0 rounded-lg"
          aria-label={`${primaryLabel}: ${project.title}`}
        />
      ) : (
        <Link
          href={project.href}
          className="focus-ring absolute inset-0 z-0 rounded-lg"
          aria-label={`${primaryLabel}: ${project.title}`}
        />
      )}
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/20 via-background to-muted/20">
        <Icon
          size={48}
          strokeWidth={1.4}
          className="text-accent transition group-hover:scale-105"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none relative z-10 space-y-4 p-5">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-serif text-2xl">{project.title}</h2>
            <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent opacity-80 transition group-hover:opacity-100">
              {primaryLabel}
              <ArrowUpRight size={14} aria-hidden />
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
        </div>
        {project.tech.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background/65 px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
        {project.repoUrl || project.liveUrl ? (
          <div className="pointer-events-auto relative z-20 flex items-center gap-3 pt-1">
            {project.repoUrl ? (
              <Link
                className="focus-ring rounded-full text-muted transition hover:text-accent"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
              >
                <Github size={18} aria-hidden />
              </Link>
            ) : null}
            {project.liveUrl ? (
              <Link
                className="focus-ring rounded-full text-muted transition hover:text-accent"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
              >
                <ExternalLink size={18} aria-hidden />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
