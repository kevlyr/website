import Link from "next/link";
import { ExternalLink, Github, PenLine, Sparkles, Sprout } from "lucide-react";
import type { Project } from "@/lib/projects";

const iconMap = {
  sprout: Sprout,
  pen: PenLine,
  sparkle: Sparkles
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/20 via-background to-muted/20">
        <Icon size={48} strokeWidth={1.4} className="text-accent" aria-hidden />
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h2 className="font-serif text-2xl">{project.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
        </div>
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
        <div className="flex items-center gap-3 pt-1">
          <Link
            className="focus-ring rounded-full text-muted transition hover:text-accent"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
          >
            <Github size={18} aria-hidden />
          </Link>
          <Link
            className="focus-ring rounded-full text-muted transition hover:text-accent"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
