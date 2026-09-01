# Academic website of Dr. Sitanshu Sekhar Sahu

Personal research website for Dr. Sitanshu Sekhar Sahu, Associate Professor in the Department of Electronics and Communication Engineering, Birla Institute of Technology Mesra.

Website content is managed from `src/config/site.ts`.

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Requires Node.js 22.12 or later and pnpm 12.

## Deploy (Cloudflare)

The site is static HTML. Cloudflare serves `dist/` as Workers static assets. There is no Cloudflare adapter and no server runtime.

```sh
pnpm deploy
```

That builds the site and uploads it with Wrangler. First-time setup: Cloudflare account, `pnpm wrangler login`, then the command above. Connect the GitHub repo in the Cloudflare dashboard for automatic deploys on push to `main`. Attach a custom domain after the first deploy, then set `seo.siteUrl` in `src/config/site.ts` to that URL.

## Editing content

Open `src/config/site.ts` and save. Pages are generated from that file.

- Add a publication: append an object to `publications.journals`, `publications.conferences`, or `publications.bookChapters`.
- Add a project: append an object to `projects`.
- Update contact details: edit `person.emails`, `person.phones`, and `person.addressLines`.
- Update profile links: edit `profiles`.
- Hide a homepage section: set `homepage.sections[].enabled` to `false`.
- Feature an item on the homepage: set `featured: true`.
- Hide an item without deleting it: set `visible: false`.
- Change the public site URL: edit `seo.siteUrl`.

## Optional checks

```sh
pnpm check
pnpm validate:links
```
