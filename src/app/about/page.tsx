import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { ConnectPanel } from "@/components/connect-panel";
import { ProfileLinks } from "@/components/profile-links";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}.`
};

export default function AboutPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
      <section className="space-y-6">
        <h1 className="flex items-center gap-2 font-serif text-5xl">
          About Me
          <Sprout size={24} strokeWidth={1.4} className="text-accent" aria-hidden />
        </h1>
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>{siteConfig.longBio}</p>
          <p>
            When I’m not coding or writing, you’ll probably find me reading, watching a good drama,
            or on a walk with music. I like calm interfaces, small rituals, and tools that make
            people feel more capable.
          </p>
          <p>
            This site is a home for essays, creative writing, notes, and the projects I’m slowly
            shaping into useful things.
          </p>
        </div>
        <ProfileLinks />
      </section>

      <ConnectPanel />
    </div>
  );
}
