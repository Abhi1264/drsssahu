import { site } from "../config/site";

const siteOrigin = new URL(site.seo.siteUrl).origin;

export function externalLinkAttrs(href: string) {
  return /^https?:\/\//i.test(href) && !href.startsWith(siteOrigin)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};
}

export function identityLinkAttrs(href: string) {
  const attrs = externalLinkAttrs(href);
  return { ...attrs, rel: attrs.rel ? `${attrs.rel} me` : "me" };
}
