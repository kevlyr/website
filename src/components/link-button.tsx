import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function LinkButton({ children, className = "", variant = "ghost", ...props }: LinkButtonProps) {
  const variantClass =
    variant === "primary"
      ? "border-accent bg-accent text-accent-foreground hover:bg-accent/90"
      : "border-border bg-card/88 text-foreground hover:border-accent hover:text-accent";

  return (
    <Link
      className={`focus-ring inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
