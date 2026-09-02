import profilePhoto from "../assets/profile.jpg";
import { site } from "../config/site";
import type { Publication } from "../config/types";
import { absoluteUrl, pageRange } from "./seo";
import { doiUrl, matchesAuthor, orcidProfile, primaryEmail, slugFor, verifiedProfiles } from "./content";

const personId = `${absoluteUrl("/")}#person`;
const siteAddress = {
  "@type": "PostalAddress",
  addressLocality: "Ranchi",
  addressRegion: "Jharkhand",
  postalCode: site.person.postalCode,
  addressCountry: "IN",
};

export function personJsonLd(pageUrl: string) {
  const profiles = verifiedProfiles();
  const orcid = orcidProfile(profiles);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.person.name,
    givenName: "Sitanshu Sekhar",
    familyName: "Sahu",
    honorificPrefix: "Dr.",
    jobTitle: site.person.designation,
    email: `mailto:${primaryEmail()}`,
    url: absoluteUrl("/"),
    ...(site.person.showProfileImage ? { image: absoluteUrl(profilePhoto.src) } : {}),
    address: {
      ...siteAddress,
      streetAddress: site.person.department,
    },
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: site.person.institution,
      address: siteAddress,
    },
    affiliation: {
      "@type": "Organization",
      name: site.person.department,
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: site.person.institution,
      },
    },
    alumniOf: site.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
    knowsAbout: site.research.interests,
    sameAs: profiles.map((item) => item.url),
    ...(orcid?.identifier
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "ORCID",
            value: orcid.identifier,
          },
        }
      : {}),
    description: site.person.shortBio,
    mainEntityOfPage: pageUrl,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: site.seo.siteTitle,
    url: absoluteUrl("/"),
    description: site.seo.siteDescription,
    inLanguage: "en-IN",
    publisher: { "@id": personId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/publications")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function profilePageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: pageUrl,
    name: site.seo.pages.home.title,
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageJsonLd(
  path: string,
  crumbs: { name: string; path: string }[],
  collection?: { name: string; numberOfItems: number },
) {
  const base = [
    personJsonLd(absoluteUrl(path)),
    breadcrumbJsonLd([{ name: site.ui.homeLabel, path: "/" }, ...crumbs]),
  ];
  if (!collection) return base;
  return [
    ...base,
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl(path),
      name: collection.name,
      about: { "@id": personId },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: collection.numberOfItems,
      },
      inLanguage: "en-IN",
    },
  ];
}

export function scholarlyArticleJsonLd(publication: Publication) {
  const pageUrl = absoluteUrl(`/publications/${slugFor(publication)}`);
  const doi = publication.doi ? doiUrl(publication.doi) : undefined;
  const { first, last } = pageRange(publication.pages);
  return {
    "@context": "https://schema.org",
    "@type": publication.type === "book-chapter" ? "Chapter" : "ScholarlyArticle",
    headline: publication.title,
    name: publication.title,
    author: publication.authors.map((name) =>
      matchesAuthor(name)
        ? { "@type": "Person", "@id": personId, name }
        : { "@type": "Person", name },
    ),
    datePublished: String(publication.year),
    isPartOf: {
      "@type": publication.type === "book-chapter" ? "Book" : "Periodical",
      name: publication.bookTitle ?? publication.venue,
      ...(publication.issn ? { issn: publication.issn } : {}),
    },
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    ...(doi ? { sameAs: doi, identifier: { "@type": "PropertyValue", propertyID: "DOI", value: publication.doi } } : {}),
    ...(publication.publisher ? { publisher: { "@type": "Organization", name: publication.publisher } } : {}),
    ...(publication.isbn ? { isbn: publication.isbn } : {}),
    ...(first ? { pageStart: first } : {}),
    ...(last ? { pageEnd: last } : {}),
    ...(publication.volume ? { volumeNumber: publication.volume } : {}),
    ...(publication.issue ? { issueNumber: publication.issue } : {}),
  };
}
