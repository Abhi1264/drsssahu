import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../config/site";
import { allPublications, slugFor, sortPublications } from "../utils/content";

export function GET(context: APIContext) {
  return rss({
    title: `Publications · ${site.person.name}`,
    description: site.seo.siteDescription,
    site: context.site ?? site.seo.siteUrl,
    items: sortPublications(allPublications()).map((publication) => ({
      title: publication.title,
      pubDate: new Date(`${publication.year}-01-01`),
      link: `/publications/${slugFor(publication)}`,
      description: `${publication.authors.join(", ")}. ${publication.venue}, ${publication.year}.`,
    })),
  });
}
