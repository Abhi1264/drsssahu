import type { APIRoute } from "astro";
import { site } from "../config/site";
import { allPublications, primaryEmail, slugFor, sortPublications, verifiedProfiles, visibleItems } from "../utils/content";

export const GET: APIRoute = () => {
  const publications = sortPublications(allPublications()).slice(0, 12);
  const body = [
    `# ${site.person.name}`,
    "",
    `${site.person.designation}, ${site.person.department}, ${site.person.institution}, ${site.person.location}.`,
    "",
    site.person.shortBio,
    "",
    `Contact: ${primaryEmail()}`,
    "",
    "## Research interests",
    ...site.research.interests.map((item) => `- ${item}`),
    "",
    "## Key pages",
    `- Home: ${site.seo.siteUrl}/`,
    `- About: ${site.seo.siteUrl}/about`,
    `- Research: ${site.seo.siteUrl}/research`,
    `- Publications: ${site.seo.siteUrl}/publications`,
    `- Projects: ${site.seo.siteUrl}/projects`,
    `- Patents: ${site.seo.siteUrl}/patents`,
    `- Supervision: ${site.seo.siteUrl}/supervision`,
    `- Contact: ${site.seo.siteUrl}/contact`,
    "",
    "## Academic profiles",
    ...verifiedProfiles().map((item) => `- ${item.label}: ${item.url}`),
    "",
    `## Counts`,
    `- Journal articles: ${visibleItems(site.publications.journals).length}`,
    `- Conference papers: ${visibleItems(site.publications.conferences).length}`,
    `- Book chapters: ${visibleItems(site.publications.bookChapters).length}`,
    `- Funded projects: ${visibleItems(site.projects).length}`,
    `- Patents and designs: ${visibleItems(site.patents).length}`,
    `- Awarded PhD scholars: ${visibleItems(site.supervision).length}`,
    "",
    "## Recent publications",
    ...publications.map((item) => `- ${item.year}. ${item.title}. ${site.seo.siteUrl}/publications/${slugFor(item)}`),
    "",
    "This file is an experimental machine-readable summary. Canonical content is in the HTML pages listed above.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
