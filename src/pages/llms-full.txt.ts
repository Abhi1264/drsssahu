import type { APIRoute } from "astro";
import { llmsFullTxt, markdownResponse } from "../utils/agents";

export const GET: APIRoute = () => markdownResponse(llmsFullTxt());
