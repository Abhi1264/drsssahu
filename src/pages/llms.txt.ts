import type { APIRoute } from "astro";
import { llmsTxt, markdownResponse } from "../utils/agents";

export const GET: APIRoute = () => markdownResponse(llmsTxt());
