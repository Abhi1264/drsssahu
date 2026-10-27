import type { APIRoute } from "astro";
import { site } from "../config/site";
import { allPublications, doiUrl, slugFor, sortPublications } from "../utils/content";
import { absoluteUrl } from "../utils/seo";

export const GET: APIRoute = () => {
  const items = sortPublications(allPublications()).map((p) => ({
    title: p.title,
    authors: p.authors,
    venue: p.venue,
    year: p.year,
    type: p.type,
    doi: p.doi ?? null,
    doiUrl: p.doi ? doiUrl(p.doi) : null,
    url: absoluteUrl(`/publications/${slugFor(p)}`),
  }));
  return new Response(
    `${JSON.stringify({ person: site.person.name, url: absoluteUrl("/publications"), count: items.length, items }, null, 2)}\n`,
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
};
