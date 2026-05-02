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
  { type: "post", slug: "tree" },
  { type: "post", slug: "road-to-nowhere" },
  { type: "post", slug: "laundry" },
  { type: "project", title: "TypeFlow" },
  { type: "post", slug: "stories-in-music" }
];
