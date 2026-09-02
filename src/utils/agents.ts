import { site } from "../config/site";
import type { Publication } from "../config/types";
import {
  allPublications,
  doiUrl,
  featuredPublications,
  orcidProfile,
  primaryEmail,
  publicationsByType,
  slugFor,
  sortPublications,
  verifiedProfiles,
  visibleItems,
} from "./content";
import { personJsonLd } from "./jsonld";
import { absoluteUrl } from "./seo";

const markdownHeaders = { "Content-Type": "text/markdown; charset=utf-8" };
const jsonHeaders = { "Content-Type": "application/json; charset=utf-8" };

function publicationRecord(publication: Publication) {
  return {
    title: publication.title,
    authors: publication.authors,
    venue: publication.venue,
    year: publication.year,
    type: publication.type,
    doi: publication.doi ?? null,
    doiUrl: publication.doi ? doiUrl(publication.doi) : null,
    url: absoluteUrl(`/publications/${slugFor(publication)}`),
  };
}

function publicationLine(publication: Publication) {
  const url = absoluteUrl(`/publications/${slugFor(publication)}`);
  const doi = publication.doi ? ` DOI: ${doiUrl(publication.doi)}` : "";
  return `- ${publication.year}. [${publication.title}](${url}). ${publication.venue}.${doi}`;
}

export function llmsTxt(): string {
  const profiles = verifiedProfiles();
  return [
    `# ${site.person.name}`,
    "",
    `> ${site.person.designation} in the ${site.person.department} at ${site.person.institution}. Research in ${site.research.interests.join(", ")}.`,
    "",
    site.person.bio,
    "",
    `ORCID: ${orcidProfile(profiles)?.identifier ?? "not listed"}. Contact: ${primaryEmail()}. This website is the canonical academic homepage.`,
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
    ...profiles.map(
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
}

export function llmsFullTxt(): string {
  const journals = sortPublications(publicationsByType("journal"));
  const conferences = sortPublications(publicationsByType("conference"));
  const chapters = sortPublications(publicationsByType("book-chapter"));
  const projects = visibleItems(site.projects);
  const patents = visibleItems(site.patents);
  const scholars = visibleItems(site.supervision);
  return [
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
    ...visibleItems(site.research.themes).map(
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
    `## Funded projects (${projects.length})`,
    ...projects.map(
      (item) =>
        `- ${item.title}. ${item.fundingBody}; ${item.duration}; ${item.role}; ${item.status}.`,
    ),
    "",
    `## Patents and designs (${patents.length})`,
    ...patents.map((item) => {
      const number = item.patentNumber ?? item.applicationNumber ?? "";
      return `- ${item.title}. ${item.country}; ${item.status}; ${item.kind}${number ? `; ${number}` : ""}.`;
    }),
    "",
    `## Doctoral supervision (${scholars.length})`,
    ...scholars.map(
      (item) => `- ${item.year}. ${item.scholar}. ${item.thesis}.`,
    ),
    "",
    "## Education",
    ...visibleItems(site.education).map(
      (item) =>
        `- ${item.degree}, ${item.institution} (${item.duration})${item.dissertation ? `. Dissertation: ${item.dissertation}` : ""}`,
    ),
    "",
    "## Academic appointments",
    ...visibleItems(site.academicExperience).map(
      (item) => `- ${item.position}, ${item.institution} (${item.duration})`,
    ),
    "",
  ].join("\n");
}

export function profileJson(): string {
  return `${JSON.stringify(personJsonLd(absoluteUrl("/")), null, 2)}\n`;
}

export function publicationsJson(): string {
  const items = sortPublications(allPublications()).map(publicationRecord);
  return `${JSON.stringify(
    {
      person: site.person.name,
      url: absoluteUrl("/publications"),
      count: items.length,
      items,
    },
    null,
    2,
  )}\n`;
}

export function markdownResponse(body: string) {
  return new Response(body, { headers: markdownHeaders });
}

export function jsonResponse(body: string) {
  return new Response(body, { headers: jsonHeaders });
}
