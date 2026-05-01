import { FileText, Github, Linkedin } from "lucide-react";
import { EmailAction } from "@/components/email-action";
import { LinkButton } from "@/components/link-button";
import { siteConfig } from "@/lib/site";

export function ProfileLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <EmailAction variant="primary">Email</EmailAction>
      <LinkButton href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={16} aria-hidden />
        LinkedIn
      </LinkButton>
      <LinkButton href={siteConfig.links.resume} target="_blank" rel="noreferrer">
        <FileText size={16} aria-hidden />
        Resume
      </LinkButton>
      <LinkButton href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Github size={16} aria-hidden />
        GitHub
      </LinkButton>
    </div>
  );
}
