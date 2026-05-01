import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments."
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="flex items-center gap-2 font-serif text-5xl">
          Projects
          <Sprout size={24} strokeWidth={1.4} className="text-accent" aria-hidden />
        </h1>
        <p className="text-muted">Things I’ve built and shipped.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <p className="text-center text-sm text-muted">More projects coming soon.</p>
    </div>
  );
}
