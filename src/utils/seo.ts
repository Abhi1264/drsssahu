import { site } from "../config/site";
import type { PageSeo } from "../config/types";

export function absoluteUrl(path = "/"): string {
  const base = site.seo.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo(key: keyof typeof site.seo.pages, titleOverride?: string): PageSeo {
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
