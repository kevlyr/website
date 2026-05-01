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
    <article className="overflow-hidden rounded-lg border border-border bg-card/88 shadow-soft transition hover:-translate-y-1 hover:border-accent/60">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/20 via-card to-background">
        <Icon size={54} strokeWidth={1.35} className="text-accent drop-shadow-[0_12px_22px_rgb(75_49_28_/_0.12)]" aria-hidden />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h2 className="font-serif text-2xl font-semibold">{project.title}</h2>
          <p className="mt-3 text-base leading-7 text-foreground/82">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1">
          <Link
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
          >
            <Github size={18} aria-hidden />
          </Link>
          <Link
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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
