// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site";
import { absoluteUrl } from "./src/utils/seo";

export default defineConfig({
  site: site.seo.siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      customPages: [
        absoluteUrl("/rss.xml"),
        absoluteUrl("/llms.txt"),
        absoluteUrl("/llms-full.txt"),
        absoluteUrl("/profile.json"),
        absoluteUrl("/publications.json"),
      ],
    }),
  ],
});
