import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";
import { CategoryPill } from "@/components/category-pill";

type PostCardProps = {
  post: PostMeta;
  compact?: boolean;
};

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <article className="group rounded-lg border border-border bg-card/78 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft">
      <Link href={`/blog/${post.slug}`} className="focus-ring block rounded-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <CategoryPill category={post.category} />
            <div>
              <h2 className="font-serif text-2xl leading-tight text-foreground">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            {!compact && (
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/65 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {!compact && (
            <ArrowRight
              size={18}
              aria-hidden
              className="mt-2 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent"
            />
          )}
        </div>
      </Link>
    </article>
  );
}
