import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export type PostCategory = "Essay" | "Creative Writing" | "Note";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  excerpt: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

type RawPostData = {
  title?: string;
  date?: string;
  category?: PostCategory;
  excerpt?: string;
  tags?: string[];
};

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function assertPostData(data: RawPostData, slug: string): asserts data is Required<RawPostData> {
  if (!data.title || !data.date || !data.category || !data.excerpt || !Array.isArray(data.tags)) {
    throw new Error(`Missing required front matter in ${slug}`);
  }
}

async function readPostFile(filename: string): Promise<Post> {
  const slug = filename.replace(/\.mdx?$/, "");
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  assertPostData(data as RawPostData, slug);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    tags: data.tags,
    readingTime: estimateReadingTime(content),
    contentHtml: processedContent.toString()
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const filenames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    filenames.filter((filename) => /\.mdx?$/.test(filename)).map(readPostFile)
  );

  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      category: post.category,
      excerpt: post.excerpt,
      tags: post.tags,
      readingTime: post.readingTime
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return readPostFile(`${slug}.md`);
}
