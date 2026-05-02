export type FeaturedConfigItem =
  | {
      type: "post";
      slug: string;
    }
  | {
      type: "project";
      title: string;
    };

export const featuredConfig: FeaturedConfigItem[] = [
  { type: "project", title: "Curriculum Cross Modal Transfer Learning for Imagined-Speech Reconstruction from sEEG" },
  { type: "post", slug: "biological-imperative" },
  { type: "project", title: "TypeFlow" },
  { type: "post", slug: "zeus" },
  { type: "project", title: "Website" },
  { type: "post", slug: "tree" }
];
