import type { APIRoute } from "astro";
import { personJsonLd } from "../utils/jsonld";
import { absoluteUrl } from "../utils/seo";

export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(personJsonLd(absoluteUrl("/")), null, 2)}\n`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
