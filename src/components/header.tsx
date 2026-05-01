"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 py-4 backdrop-blur">
      <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
        <Link className="focus-ring rounded-sm font-semibold" href="/">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center rounded-full border border-border bg-card/70 p-1 shadow-sm">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted hover:text-foreground"
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
