// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site";

export default defineConfig({
  site: site.seo.siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
