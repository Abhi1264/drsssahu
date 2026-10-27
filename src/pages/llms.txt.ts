import type { APIRoute } from "astro";
import { site } from "../config/site";
import type { Publication } from "../config/types";
import { doiUrl, featuredPublications, primaryEmail, slugFor } from "../utils/content";
import { absoluteUrl } from "../utils/seo";

export function publicationLine(publication: Publication) {
  const url = absoluteUrl(`/publications/${slugFor(publication)}`);
  const doi = publication.doi ? ` DOI: ${doiUrl(publication.doi)}` : "";
  return `- ${publication.year}. [${publication.title}](${url}). ${publication.venue}.${doi}`;
}

export const GET: APIRoute = () => {
  const orcid = site.profiles.find((item) => item.label === "ORCID");
  const body = [
    `# ${site.person.name}`,
    "",
    `> ${site.person.designation} in the ${site.person.department} at ${site.person.institution}. Research in ${site.research.interests.join(", ")}.`,
    "",
    site.person.bio,
    "",
    `ORCID: ${orcid?.identifier ?? "not listed"}. Contact: ${primaryEmail()}. This website is the canonical academic homepage.`,
    "",
    "The Machine-readable section below lists the complete markdown record, Person JSON, publication JSON, and RSS feed.",
    "",
    "## Pages",
    `- [Home](${absoluteUrl("/")}): Overview, research interests, and featured work.`,
    `- [About](${absoluteUrl("/about")}): Biography, appointments, and academic profiles.`,
    `- [Research](${absoluteUrl("/research")}): Research interests and themes.`,
    `- [Publications](${absoluteUrl("/publications")}): Journal articles, conference papers, and book chapters.`,
    `- [Projects](${absoluteUrl("/projects")}): Funded research projects as principal investigator.`,
    `- [Patents](${absoluteUrl("/patents")}): Patents and design registrations.`,
    `- [Supervision](${absoluteUrl("/supervision")}): Awarded doctoral scholars.`,
    `- [Contact](${absoluteUrl("/contact")}): Email, address, and research profile links.`,
    "",
    "## Featured publications",
    ...featuredPublications().map(publicationLine),
    "",
    "## Academic profiles",
    ...site.profiles.map(
      (item) =>
        `- [${item.label}](${item.url}): ${item.identifier ?? item.type}`,
    ),
    "",
    "## Machine-readable",
    `- [Complete record](${absoluteUrl("/llms-full.txt")}): Full markdown of publications, projects, patents, and supervision.`,
    `- [Person JSON](${absoluteUrl("/profile.json")}): Schema.org Person record.`,
    `- [Publications JSON](${absoluteUrl("/publications.json")}): Structured publication list with DOIs and page URLs.`,
    `- [Publications RSS](${absoluteUrl("/rss.xml")}): RSS feed of publications.`,
    "",
    "## Optional",
    `- [Journal articles](${absoluteUrl("/publications/journals")}): Journal-only list.`,
    `- [Conference papers](${absoluteUrl("/publications/conferences")}): Conference-only list.`,
    `- [Book chapters](${absoluteUrl("/publications/books")}): Book-chapter list.`,
    `- [Activities](${absoluteUrl("/activities")}): Awards, fellowships, service, and workshops.`,
    `- [Experience](${absoluteUrl("/experience")}): Academic appointments.`,
    `- [Education](${absoluteUrl("/education")}): Degrees and dissertation.`,
    `- [Curriculum vitae](${absoluteUrl(site.resume.file)}): PDF CV.`,
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
