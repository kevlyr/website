import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { ConnectPanel } from "@/components/connect-panel";
import { ProfileLinks } from "@/components/profile-links";
import { getAboutParagraphs } from "@/lib/about";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}.`
};

export default async function AboutPage() {
  const paragraphs = await getAboutParagraphs();

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
      <section className="space-y-6">
        <h1 className="flex items-center gap-2 font-serif text-5xl">
          About Me
          <Sprout size={24} strokeWidth={1.4} className="text-accent" aria-hidden />
        </h1>
        <div className="space-y-5 text-base leading-8 text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ProfileLinks />
      </section>

      <ConnectPanel />
    </div>
  );
}
