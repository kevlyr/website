import type { Metadata } from "next";
import { BlogFilterList } from "@/components/blog-filter-list";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, creative writing, and notes."
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-serif text-5xl">Writing</h1>
        <p className="text-muted">Essays, stories, and notes.</p>
      </header>

      <BlogFilterList posts={posts} />
    </div>
  );
}
