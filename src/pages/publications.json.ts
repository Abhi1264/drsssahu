import type { APIRoute } from "astro";
import { publicationsJson } from "../utils/agents";

export const GET: APIRoute = () =>
  new Response(publicationsJson(), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
