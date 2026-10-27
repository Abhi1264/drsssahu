import type { APIRoute } from "astro";
import { site } from "../config/site";
import { primaryEmail, publicationsByType, sortPublications } from "../utils/content";
import { absoluteUrl } from "../utils/seo";
import { publicationLine } from "./llms.txt";

export const GET: APIRoute = () => {
  const journals = sortPublications(publicationsByType("journal"));
  const conferences = sortPublications(publicationsByType("conference"));
  const chapters = sortPublications(publicationsByType("book-chapter"));
  const body = [
    `# ${site.person.name}`,
    "",
    `> ${site.person.designation}, ${site.person.department}, ${site.person.institution}, ${site.person.location}.`,
    "",
    site.person.bio,
    "",
    `Contact: ${primaryEmail()}`,
    `Homepage: ${absoluteUrl("/")}`,
    "",
    "## Research interests",
    ...site.research.interests.map((item) => `- ${item}`),
    "",
    "## Research themes",
    ...site.research.themes.map(
      (item) => `- **${item.title}.** ${item.description}`,
    ),
    "",
    `## Journal articles (${journals.length})`,
    ...journals.map(publicationLine),
    "",
    `## Conference papers (${conferences.length})`,
    ...conferences.map(publicationLine),
    "",
    `## Book chapters (${chapters.length})`,
    ...chapters.map(publicationLine),
    "",
    `## Funded projects (${site.projects.length})`,
    ...site.projects.map(
      (item) =>
        `- ${item.title}. ${item.fundingBody}; ${item.duration}; ${item.role}; ${item.status}.`,
    ),
    "",
    `## Patents and designs (${site.patents.length})`,
    ...site.patents.map((item) => {
      const number = item.patentNumber ?? item.applicationNumber ?? "";
      return `- ${item.title}. ${item.country}; ${item.status}; ${item.kind}${number ? `; ${number}` : ""}.`;
    }),
    "",
    `## Doctoral supervision (${site.supervision.length})`,
    ...site.supervision.map(
      (item) => `- ${item.year}. ${item.scholar}. ${item.thesis}.`,
    ),
    "",
    "## Education",
    ...site.education.map(
      (item) =>
        `- ${item.degree}, ${item.institution} (${item.duration})${item.dissertation ? `. Dissertation: ${item.dissertation}` : ""}`,
    ),
    "",
    "## Academic appointments",
    ...site.academicExperience.map(
      (item) => `- ${item.position}, ${item.institution} (${item.duration})`,
    ),
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
