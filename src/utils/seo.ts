import { site } from "../config/site";
import type { PageSeo, Publication } from "../config/types";
import { slugFor } from "./content";

export type MetaTag = { name: string; content: string };

export function absoluteUrl(path = "/"): string {
  const base = site.seo.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo(
  key: keyof typeof site.seo.pages,
  titleOverride?: string,
): PageSeo {
  const page = site.seo.pages[key];
  return {
    title: titleOverride ?? page.title,
    description: page.description,
  };
}

export function publicationSeo(title: string, year: number): PageSeo {
  return {
    title: `${title} | ${site.person.name}`,
    description: `${title} (${year}). Publication by ${site.person.name}, ${site.person.designation}, ${site.person.institutionShort}.`,
  };
}

export function pageRange(pages?: string): { first?: string; last?: string } {
  if (!pages) return {};
  const range = pages.match(/^(\d+)\s*[-–—]\s*(\d+)$/);
  if (range) return { first: range[1], last: range[2] };
  if (/^\d+$/.test(pages)) return { first: pages };
  return {};
}

export function publicationCitationTags(publication: Publication): MetaTag[] {
  const pageUrl = absoluteUrl(`/publications/${slugFor(publication)}`);
  const tags: MetaTag[] = [
    { name: "citation_title", content: publication.title },
    ...publication.authors.map((author) => ({
      name: "citation_author",
      content: author,
    })),
    { name: "citation_publication_date", content: String(publication.year) },
    { name: "citation_fulltext_html_url", content: pageUrl },
  ];

  if (publication.type === "journal") {
    tags.push({ name: "citation_journal_title", content: publication.venue });
  } else if (publication.type === "conference") {
    tags.push({
      name: "citation_conference_title",
      content: publication.venue,
    });
  } else {
    tags.push({
      name: "citation_inbook_title",
      content: publication.bookTitle ?? publication.venue,
    });
  }

  if (publication.publisher)
    tags.push({ name: "citation_publisher", content: publication.publisher });
  if (publication.volume)
    tags.push({ name: "citation_volume", content: publication.volume });
  if (publication.issue)
    tags.push({ name: "citation_issue", content: publication.issue });
  if (publication.issn)
    tags.push({ name: "citation_issn", content: publication.issn });
  if (publication.isbn)
    tags.push({ name: "citation_isbn", content: publication.isbn });
  if (publication.doi) {
    tags.push({ name: "citation_doi", content: publication.doi });
  }

  const { first, last } = pageRange(publication.pages);
  if (first) tags.push({ name: "citation_firstpage", content: first });
  else if (publication.articleNumber)
    tags.push({
      name: "citation_firstpage",
      content: publication.articleNumber,
    });
  if (last) tags.push({ name: "citation_lastpage", content: last });

  return tags;
}
