import type { PostCategory } from "@/lib/posts";

export function CategoryPill({ category }: { category: PostCategory }) {
  return (
    <span className="inline-flex w-fit rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
      {category}
    </span>
  );
}
