# srod.ca

Personal site of Sebastian Rodriguez — the Monograph design, built with **Next.js** and **Sanity**.
All copy, links, images and the CV live in Sanity and are edited from the dashboard at **`/studio`**.

## First-time setup (≈10 minutes)

1. **Install**
   ```bash
   npm install
   cp .env.example .env.local
   ```
   The project ID (`lc5grag2`) is already filled in.

2. **Let the site talk to Sanity** — at [sanity.io/manage](https://www.sanity.io/manage) → project `lc5grag2`:
   - **Datasets**: make sure one called `production` exists.
   - **API → CORS origins**: add `http://localhost:3000` and `https://srod.ca`, both with **Allow credentials** ticked.
   - **API → Tokens**: create a **Viewer** token and paste it into `SANITY_API_READ_TOKEN` in `.env.local`
     (used by the live preview to show unpublished drafts).

3. **Load the starter content** (all the copy from the mockups):
   ```bash
   npx sanity login
   npm run seed
   ```
   This only adds documents that don't exist yet, so it never overwrites edits made in the dashboard.

4. **Run it**
   ```bash
   npm run dev
   ```
   Site: http://localhost:3000 · Dashboard: http://localhost:3000/studio

## The dashboard

| Section | What it controls |
| --- | --- |
| **Home / About / Work / Contact** | Each page's copy. Fields are in the order they appear on the page. |
| **Work items** | Every project, paper and course. Write them once, then pick them for Home's “Selected work” and for sections on the Work page (drag to reorder). |
| **Site settings** | Name, accent colour, email, profile links (footer), **CV PDF**, SEO. |
| **Live preview** (top bar) | Edit with the page beside you; click any text on the preview to jump to its field. |

Publishing updates the live site within seconds — no redeploy needed.

## Contact form

Messages are emailed through [Resend](https://resend.com):
1. Create a free account, add and verify the domain `srod.ca` (a few DNS records).
2. Create an API key → `RESEND_API_KEY`.
3. `CONTACT_FROM_EMAIL` must use the verified domain (e.g. `srod.ca <website@srod.ca>`). Replies go straight to the sender.

Until it's configured the form shows a friendly error and points people to email.

## Deploying (Vercel)

1. Push this repo to GitHub and import it at [vercel.com/new](https://vercel.com/new).
2. Add every variable from `.env.local` under **Settings → Environment Variables**.
3. Point `srod.ca` at Vercel (**Settings → Domains**) and make sure `https://srod.ca` (and `https://www.srod.ca`, if you use it) is in Sanity's CORS origins with **Allow credentials** ticked — the live updates and the dashboard need it.
4. Old Gatsby URLs (`/projects/…`, `/research/…`) redirect to the matching section of `/work` (see `next.config.ts`).

Before pushing, `npm run lint && npm run typecheck && npm run build` should all pass.

## Content scripts

One-off content edits live in `scripts/` and run with `npx sanity exec scripts/<name>.ts --with-user-token`.
Most write **drafts** (check the comment at the top of each) — review and press Publish in `/studio`.

## Project layout

```
sanity.config.ts            Studio config (dashboard tools)
src/sanity/schemaTypes/     Content model — the fields you see in the dashboard
src/sanity/structure.ts     Dashboard sidebar
src/sanity/lib/queries.ts   What each page fetches
src/app/(site)/             The four pages + shared header/footer
src/app/studio/             Embedded dashboard at /studio
src/app/api/contact/        Contact form → Resend
seed/                       Starter content (build-seed.py regenerates content.ndjson)
```
