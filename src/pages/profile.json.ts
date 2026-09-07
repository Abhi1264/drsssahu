import type { APIRoute } from "astro";
import { profileJson } from "../utils/agents";

export const GET: APIRoute = () =>
  new Response(profileJson(), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
