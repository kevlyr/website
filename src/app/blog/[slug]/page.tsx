import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CategoryPill } from "@/components/category-pill";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt
    };
  } catch {
    return {
      title: "Post not found"
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="focus-ring mb-10 inline-flex items-center gap-2 rounded-sm text-sm text-muted transition hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden />
        Back to all posts
      </Link>

      <header className="mb-10 space-y-5 text-center">
        <div className="flex justify-center">
          <CategoryPill category={post.category} />
        </div>
        <div className="space-y-4">
          <h1 className="font-serif text-5xl leading-tight">{post.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">{post.excerpt}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
