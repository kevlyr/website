import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FeaturedCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  meta: string;
  tags: string[];
};

export function FeaturedCard({ eyebrow, title, description, href, meta, tags }: FeaturedCardProps) {
  return (
    <article className="group h-full rounded-lg border border-border bg-card/78 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft">
      <Link href={href} className="focus-ring flex h-full flex-col rounded-sm">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex w-fit rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            {eyebrow}
          </span>
          <ArrowRight
            size={18}
            aria-hidden
            className="mt-1 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <h3 className="font-serif text-2xl leading-tight">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
          <p className="mt-4 text-xs text-muted">{meta}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/65 px-2.5 py-1 text-xs text-muted"
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
