"use client";

import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

type EmailActionProps = {
  children?: ReactNode;
  variant?: "primary" | "ghost" | "inline";
  showIcon?: boolean;
  className?: string;
};

function getEmailAddress() {
  const at = String.fromCharCode(64);
  return `${siteConfig.email.user}${at}${siteConfig.email.domain}`;
}

export function EmailAction({
  children = "Email",
  variant = "ghost",
  showIcon = true,
  className = ""
}: EmailActionProps) {
  const isInline = variant === "inline";
  const variantClass =
    variant === "primary"
      ? "border-accent bg-accent text-accent-foreground hover:bg-accent/90"
      : "border-border bg-card text-foreground hover:border-accent hover:text-accent";

  function openEmail() {
    window.location.href = `mailto:${getEmailAddress()}`;
  }

  return (
    <button
      type="button"
      onClick={openEmail}
      className={
        isInline
          ? `focus-ring rounded-sm text-left transition hover:text-foreground ${className}`
          : `focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 ${variantClass} ${className}`
      }
      aria-label="Send email"
    >
      {showIcon && !isInline ? <Mail size={16} aria-hidden /> : null}
      {children}
    </button>
  );
}
