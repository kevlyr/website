"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 -mx-4 border-b border-border/70 bg-card/88 px-4 py-4 shadow-[0_8px_26px_rgb(75_49_28_/_0.06)] backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
        <Link className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-sm font-serif text-2xl font-semibold leading-none" href="/">
          <Sprout size={24} strokeWidth={1.4} className="text-accent" aria-hidden />
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="flex max-w-[calc(100vw-12rem)] items-center gap-1 overflow-x-auto sm:max-w-none sm:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-5 sm:py-3 sm:text-sm ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-soft"
                      : "text-foreground hover:bg-card hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
