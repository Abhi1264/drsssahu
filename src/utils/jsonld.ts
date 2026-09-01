import { site } from "../config/site";
import type { Publication } from "../config/types";
import { absoluteUrl } from "./seo";
import { doiUrl, primaryEmail, slugFor, verifiedProfiles } from "./content";

export function personJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/")}#person`,
    name: site.person.name,
    givenName: "Sitanshu Sekhar",
    familyName: "Sahu",
    honorificPrefix: "Dr.",
    jobTitle: site.person.designation,
    email: `mailto:${primaryEmail()}`,
    url: absoluteUrl("/"),
    ...(site.person.showProfileImage ? { image: absoluteUrl(site.person.profileImage) } : {}),
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: site.person.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: site.person.postalCode,
        addressCountry: "IN",
      },
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
    knowsAbout: [...site.research.interests],
    sameAs: verifiedProfiles().map((item) => item.url),
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
    inLanguage: "en",
    publisher: { "@id": `${absoluteUrl("/")}#person` },
  };
}

export function profilePageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: pageUrl,
    name: site.seo.pages.home.title,
    mainEntity: { "@id": `${absoluteUrl("/")}#person` },
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

export function pageJsonLd(path: string, crumbs: { name: string; path: string }[]) {
  return [
    personJsonLd(absoluteUrl(path)),
    breadcrumbJsonLd([{ name: site.ui.homeLabel, path: "/" }, ...crumbs]),
  ];
}

export function scholarlyArticleJsonLd(publication: Publication) {
  const url = publication.doi
    ? doiUrl(publication.doi)
    : absoluteUrl(`/publications/${slugFor(publication)}`);
  return {
    "@context": "https://schema.org",
    "@type": publication.type === "book-chapter" ? "Chapter" : "ScholarlyArticle",
    headline: publication.title,
    name: publication.title,
    author: publication.authors.map((name) => ({ "@type": "Person", name })),
    datePublished: String(publication.year),
    isPartOf: {
      "@type": publication.type === "book-chapter" ? "Book" : "Periodical",
      name: publication.bookTitle ?? publication.venue,
    },
    url,
    ...(publication.doi ? { identifier: doiUrl(publication.doi) } : {}),
    ...(publication.publisher ? { publisher: { "@type": "Organization", name: publication.publisher } } : {}),
  };
}
