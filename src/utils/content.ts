import { site } from "../config/site";
import type { Publication, PublicationType } from "../config/types";

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function publicationSlug(title: string, year: number): string {
  return `${year}-${slugify(title)}`;
}

export function featuredItems<T extends { featured?: boolean }>(
  items: readonly T[],
): T[] {
  return items.filter((item) => item.featured);
}

export function primaryEmail(): string {
  const emails = site.person.emails;
  return (
    emails.find((item) => item.primary)?.address ?? emails[0]?.address ?? ""
  );
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
  ];
}

export function publicationsByType(type: PublicationType): Publication[] {
  return [...publicationsByKind[type]];
}

export function sortPublications(items: readonly Publication[]): Publication[] {
  return [...items].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

export function publicationYears(
  items: readonly Publication[] = allPublications(),
): number[] {
  return [...new Set(items.map((item) => item.year))].sort((a, b) => b - a);
}

export function groupByYear(
  items: readonly Publication[],
): { year: number; items: Publication[] }[] {
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
  return (
    byPublication.get(publication) ??
    publicationSlug(publication.title, publication.year)
  );
}

export function publicationBySlug(slug: string): Publication | undefined {
  return bySlug.get(slug);
}

export function publicationPaths(): {
  slug: string;
  publication: Publication;
}[] {
  return [...bySlug.entries()].map(([slug, publication]) => ({
    slug,
    publication,
  }));
}

export function featuredPublications(): Publication[] {
  const sorted = sortPublications(allPublications());
  const featured = sorted.filter((item) => item.featured);
  return featured.length > 0 ? featured : sorted.slice(0, 5);
}

export function relatedPublications(
  publication: Publication,
  limit = 3,
): Publication[] {
  return sortPublications(allPublications())
    .filter((item) => item.title !== publication.title)
    .filter(
      (item) =>
        item.type === publication.type || item.year === publication.year,
    )
    .slice(0, limit);
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

export function externalSources(publication: Publication) {
  const links = [...(publication.sources ?? [])].filter((item) => item.url);
  if (
    publication.doi &&
    !links.some((item) => item.url.includes(publication.doi!))
  ) {
    links.unshift({ label: "DOI", url: doiUrl(publication.doi) });
  }
  return links;
}

export function searchText(publication: Publication): string {
  return [
    publication.title,
    publication.authors.join(" "),
    publication.venue,
    publication.year,
    publication.doi,
    publication.abstract,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function matchesAuthor(name: string): boolean {
  const normalized = name
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return site.person.nameVariants.some((variant) => {
    const value = variant
      .replace(/\./g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    return (
      normalized === value ||
      normalized.includes(value) ||
      value.includes(normalized)
    );
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
