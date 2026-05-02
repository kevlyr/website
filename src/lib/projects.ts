export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  hrefLabel?: string;
  repoUrl?: string;
  liveUrl?: string;
  icon: "sprout" | "pen" | "sparkle";
};

export const projects: Project[] = [
  {
    title: "Curriculum Cross Modal Transfer Learning for Imagined-Speech Reconstruction from sEEG",
    description: "A new approach to imagined speech to text reconstruction.",
    tech: ["pyTorch"],
    href: "/VocalMindPaper.pdf",
    hrefLabel: "View paper",
    repoUrl: "https://github.com/kevlyr/mind2words",
    icon: "sprout"
  },
  {
    title: "TypeFlow",
    description: "A minimal writing app for drafting essays, notes, and tiny scenes across macOS and iPad.",
    tech: ["Swift", "AppKit"],
    href: "https://github.com/kevlyr/TypeFlow",
    hrefLabel: "View project",
    repoUrl: "https://github.com/kevlyr/TypeFlow",
    icon: "pen"
  },
  {
    title: "Website",
    description: "This website.",
    tech: ["Next.js", "Tailwind"],
    href: "https://kevlyr.ink",
    hrefLabel: "Visit site",
    repoUrl: "https://github.com/kevlyr/website",
    icon: "sparkle"
  }
];
