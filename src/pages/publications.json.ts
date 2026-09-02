import type { APIRoute } from "astro";
import { jsonResponse, publicationsJson } from "../utils/agents";

export const GET: APIRoute = () => jsonResponse(publicationsJson());
