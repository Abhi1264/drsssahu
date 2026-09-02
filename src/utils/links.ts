import { site } from "../config/site";

const siteOrigin = new URL(site.seo.siteUrl).origin;

export function isExternalHref(href: string): boolean {
  if (!href) return false;
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:")
  ) {
    return false;
  }
  if (href.startsWith("/") && !href.startsWith("//")) return false;

  try {
    const url = new URL(href, site.seo.siteUrl);
    return (url.protocol === "http:" || url.protocol === "https:") && url.origin !== siteOrigin;
  } catch {
    return false;
  }
}

export function externalLinkAttrs(href: string) {
  if (!isExternalHref(href)) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" as const };
}

export function identityLinkAttrs(href: string) {
  const attrs = externalLinkAttrs(href);
  return {
    ...attrs,
    rel: attrs.rel ? `${attrs.rel} me` : "me",
  };
}
