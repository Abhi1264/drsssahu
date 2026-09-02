import type { APIRoute } from "astro";
import { jsonResponse, profileJson } from "../utils/agents";

export const GET: APIRoute = () => jsonResponse(profileJson());
