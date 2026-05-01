import Link from "next/link";
import { ArrowRight, Feather, FolderKanban } from "lucide-react";

type FeaturedCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  meta: string;
  tags: string[];
};

export function FeaturedCard({ eyebrow, title, description, href, meta, tags }: FeaturedCardProps) {
  const isProject = eyebrow === "Project";
  const Icon = isProject ? FolderKanban : Feather;

  return (
    <article className="group h-full rounded-lg border border-border bg-card/88 p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/60">
      <Link href={href} className="focus-ring flex h-full flex-col rounded-sm">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon size={15} strokeWidth={1.6} aria-hidden />
            </span>
            <span className={isProject ? "underline decoration-accent/45 underline-offset-4" : ""}>
              {eyebrow}
            </span>
          </span>
          <ArrowRight
            size={20}
            aria-hidden
            className="mt-1 shrink-0 text-foreground transition group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-serif text-2xl font-semibold leading-tight">{title}</h3>
          <p className="mt-3 flex-1 text-base leading-7 text-foreground/82">{description}</p>
          <span className="mt-6 h-px w-40 bg-border" aria-hidden />
          <p className="mt-5 text-sm text-muted">{meta}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
