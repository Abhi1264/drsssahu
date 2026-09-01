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
