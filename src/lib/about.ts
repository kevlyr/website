import fs from "node:fs/promises";
import path from "node:path";

const aboutFile = path.join(process.cwd(), "content", "about.md");

export async function getAboutParagraphs() {
  const content = await fs.readFile(aboutFile, "utf8");

  return content
    .trim()
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}
