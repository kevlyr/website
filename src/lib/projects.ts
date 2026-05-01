export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl: string;
  icon: "sprout" | "pen" | "sparkle";
};

export const projects: Project[] = [
  {
    title: "seeg",
    description: "A gentle iOS app for tracking daily habits and progress without turning self-improvement into homework.",
    tech: ["Swift", "SwiftUI"],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    icon: "sprout"
  },
  {
    title: "TabAnywhere",
    description: "A minimal writing app for drafting essays, notes, and tiny scenes across macOS and iPad.",
    tech: ["Swift", "AppKit"],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    icon: "pen"
  },
  {
    title: "Promptopia",
    description: "An AI prompt manager for saving, tagging, and iterating on creative and technical prompts.",
    tech: ["Next.js", "Tailwind"],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    icon: "sparkle"
  }
];
