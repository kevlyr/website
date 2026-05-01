import { siteConfig } from "@/lib/site";

export function ProfileAvatar() {
  return (
    <div
      className="relative h-28 w-28 overflow-hidden rounded-full border border-border bg-card shadow-soft sm:h-32 sm:w-32"
      aria-label={siteConfig.profileImageAlt}
    >
      <img
        src={siteConfig.profileImage}
        alt={siteConfig.profileImageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
