import { Sprout } from "lucide-react";
import { EmailAction } from "@/components/email-action";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-8 text-sm text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with care.</p>
        <div className="flex items-center gap-2">
          <span className="h-px w-12 bg-border" aria-hidden />
          <Sprout size={16} aria-hidden />
          <EmailAction variant="inline" showIcon={false}>
            {siteConfig.email.display}
          </EmailAction>
        </div>
      </div>
    </footer>
  );
}
