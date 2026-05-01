import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  href?: string;
  cta?: string;
};

export function SectionHeading({ title, href, cta }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-2 font-serif text-2xl">
        {title}
        <Sprout size={18} strokeWidth={1.4} className="text-accent" aria-hidden />
      </h2>
      {href && cta && (
        <Link
          href={href}
          className="focus-ring inline-flex items-center gap-1 rounded-sm text-sm text-muted transition hover:text-accent"
        >
          {cta}
          <ArrowRight size={15} aria-hidden />
        </Link>
      )}
    </div>
  );
}
