import { site } from "../config/site";
import type { Publication, PublicationType } from "../config/types";
import { publicationSlug } from "./slug";

export function isVisible<T extends { visible?: boolean }>(item: T): boolean {
  return item.visible !== false;
}

export function visibleItems<T extends { visible?: boolean }>(items: readonly T[]): T[] {
  return items.filter(isVisible);
}

export function featuredItems<T extends { visible?: boolean; featured?: boolean }>(
  items: readonly T[],
): T[] {
  return visibleItems(items).filter((item) => item.featured);
}

export function primaryEmail(): string {
  const emails = site.person.emails;
  return emails.find((item) => item.primary)?.address ?? emails[0]?.address ?? "";
}

export function visibleEmails() {
  return site.person.emails;
}

export function visiblePhones() {
  return site.person.showPhone ? site.person.phones : [];
}

export function visibleNavigation() {
  return site.navigation.filter((item) => item.visible);
}

export function verifiedProfiles() {
  return site.profiles.filter((item) => item.visible && item.verified && item.url);
}

export function orcidProfile(profiles = verifiedProfiles()) {
  return profiles.find((item) => item.label === "ORCID");
}

export function homepageSectionEnabled(id: string): boolean {
  const section = site.homepage.sections.find((item) => item.id === id);
  if (!section) return true;
  return section.enabled;
}

export function homepageHeading(id: string): string {
  return site.homepage.sections.find((item) => item.id === id)?.heading ?? id;
}

const publicationsByKind: Record<PublicationType, readonly Publication[]> = {
  journal: site.publications.journals,
  conference: site.publications.conferences,
  "book-chapter": site.publications.bookChapters,
};

export function allPublications(): Publication[] {
  return [
    ...publicationsByKind.journal,
    ...publicationsByKind.conference,
    ...publicationsByKind["book-chapter"],
  ].filter(isVisible);
}

export function publicationsByType(type: PublicationType): Publication[] {
  return visibleItems(publicationsByKind[type]);
}

export function sortPublications(items: Publication[]): Publication[] {
  return [...items].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

export function publicationYears(items: Publication[] = allPublications()): number[] {
  return [...new Set(items.map((item) => item.year))].sort((a, b) => b - a);
}

export function groupByYear(items: Publication[]): { year: number; items: Publication[] }[] {
  const grouped = new Map<number, Publication[]>();
  for (const item of sortPublications(items)) {
    const list = grouped.get(item.year) ?? [];
    list.push(item);
    grouped.set(item.year, list);
  }
  return [...grouped.entries()].map(([year, groupedItems]) => ({
    year,
    items: groupedItems,
  }));
}

const { bySlug, byPublication } = (() => {
  const bySlug = new Map<string, Publication>();
  const byPublication = new Map<Publication, string>();
  const used = new Map<string, number>();
  for (const item of allPublications()) {
    const base = publicationSlug(item.title, item.year);
    const count = used.get(base) ?? 0;
    const slug = count > 0 ? `${base}-${count + 1}` : base;
    used.set(base, count + 1);
    bySlug.set(slug, item);
    byPublication.set(item, slug);
  }
  return { bySlug, byPublication };
})();

export function slugFor(publication: Publication): string {
  return byPublication.get(publication) ?? publicationSlug(publication.title, publication.year);
}

export function publicationBySlug(slug: string): Publication | undefined {
  return bySlug.get(slug);
}

export function publicationPaths(): { slug: string; publication: Publication }[] {
  return [...bySlug.entries()].map(([slug, publication]) => ({ slug, publication }));
}

export function featuredPublications(): Publication[] {
  const sorted = sortPublications(allPublications());
  const featured = sorted.filter((item) => item.featured);
  return featured.length > 0 ? featured : sorted.slice(0, 5);
}

export function relatedPublications(publication: Publication, limit = 3): Publication[] {
  return sortPublications(allPublications())
    .filter((item) => item.title !== publication.title)
    .filter((item) => item.type === publication.type || item.year === publication.year)
    .slice(0, limit);
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

export function externalSources(publication: Publication) {
  const links = [...(publication.sources ?? [])].filter((item) => item.url);
  const { doi } = publication;
  if (doi && !links.some((item) => item.url.includes(doi))) {
    links.unshift({ label: site.ui.doi, url: doiUrl(doi), verified: publication.source.verified });
  }
  const seen = new Set<string>();
  return links.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

export function searchText(publication: Publication): string {
  return [publication.title, publication.authors.join(" "), publication.venue, publication.year, publication.doi]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function matchesAuthor(name: string): boolean {
  const normalized = name.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
  return site.person.nameVariants.some((variant) => {
    const value = variant.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
    return normalized === value || normalized.includes(value) || value.includes(normalized);
  });
}

export function bibliographicLine(publication: Publication): string {
  const parts = [publication.venue];
  if (publication.volume) parts.push(`Vol. ${publication.volume}`);
  if (publication.issue) parts.push(`(${publication.issue})`);
  if (publication.pages) parts.push(publication.pages);
  else if (publication.articleNumber) parts.push(publication.articleNumber);
  parts.push(String(publication.year));
  return parts.filter(Boolean).join(", ");
}

export function apaCitation(publication: Publication): string {
  const authors = publication.authors.join(", ");
  const details = bibliographicLine(publication);
  const doi = publication.doi ? ` ${doiUrl(publication.doi)}` : "";
  return `${authors} (${publication.year}). ${publication.title}. ${details}.${doi}`;
}
