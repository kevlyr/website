"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/post-card";
import type { PostCategory, PostMeta } from "@/lib/posts";

type BlogFilter = "All" | PostCategory;

const categories: BlogFilter[] = ["All", "Essay", "Creative Writing", "Note"];

export function BlogFilterList({ posts }: { posts: PostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogFilter>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" aria-label="Filter writing by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition hover:-translate-y-0.5 ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted hover:border-accent hover:text-accent"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="space-y-5" aria-live="polite">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
