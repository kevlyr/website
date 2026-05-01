import { Sprout } from "lucide-react";
import Link from "next/link";
import { FeaturedCard } from "@/components/featured-card";
import { ProfileAvatar } from "@/components/profile-avatar";
import { ProfileLinks } from "@/components/profile-links";
import { WritingMark } from "@/components/writing-mark";
import { formatDate } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

type FeaturedItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  meta: string;
  tags: string[];
};

export default async function HomePage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const featuredItems: FeaturedItem[] = featuredPosts.flatMap((post, index) => {
    const project = featuredProjects[index];
    const items: FeaturedItem[] = [
      {
        eyebrow: post.category,
        title: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        meta: `${formatDate(post.date)} · ${post.readingTime}`,
        tags: post.tags
      }
    ];

    if (project) {
      items.push({
        eyebrow: "Project",
        title: project.title,
        description: project.description,
        href: "/projects",
        meta: project.tech.join(" · "),
        tags: project.tech
      });
    }

    return items;
  });

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <ProfileAvatar />
          <div className="max-w-2xl space-y-4">
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
              Hi, I’m {siteConfig.name.split(" ")[0]}.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">{siteConfig.bio}</p>
          </div>
          <ProfileLinks />
        </div>

        <WritingMark />
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="flex items-center gap-2 font-serif text-2xl">
            Featured
            <Sprout size={18} strokeWidth={1.4} className="text-accent" aria-hidden />
          </h2>
          <div className="flex gap-4 text-sm">
            <Link className="focus-ring rounded-sm text-muted transition hover:text-accent" href="/blog">
              All writing
            </Link>
            <Link className="focus-ring rounded-sm text-muted transition hover:text-accent" href="/projects">
              All projects
            </Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <FeaturedCard key={`${item.eyebrow}-${item.title}`} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
