/**
 * Small copy tidy-ups from the October 2026 design review.
 *
 * - trims stray trailing spaces from every text field
 * - "Procurment" → "Procurement" in the city-government course outline
 * - year ranges use an en dash (2024–2025), like everywhere else on the site
 * - straight apostrophes → curly ones (it's → it’s), like the rest of the copy
 *
 * Like the copyedit script, this writes DRAFTS — review and Publish in /studio.
 *
 * Run:  npx sanity exec scripts/tidy-2026-10.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

const TYPES = ["workItem", "homePage", "aboutPage", "workPage", "contactPage", "siteSettings"];
const SKIP = new Set(["_id", "_type", "_ref", "_key", "_rev", "href", "url", "current", "accent", "email"]);

function tidy(value: unknown, key = ""): unknown {
  if (typeof value === "string") {
    if (SKIP.has(key)) return value;
    let s = value.replace(/[ \t]+$/g, "").replace(/^[ \t]+/g, "");
    if (key === "text") s = value; // rich-text spans: spacing between spans matters
    s = s.replace(/Procurment/g, "Procurement");
    if (key === "years") s = s.replace(/(\d{4})\s*-\s*(\d{4}|present)/g, "$1–$2");
    s = s.replace(/(\w)'(\w)/g, "$1’$2");
    return s;
  }
  if (Array.isArray(value)) return value.map((v) => tidy(v, key));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, tidy(v, k)]));
  }
  return value;
}

async function run() {
  const ids: string[] = await client.fetch(`*[_type in $types && !(_id in path("drafts.**"))]._id`, { types: TYPES });
  let changed = 0;
  for (const id of ids) {
    const draftId = `drafts.${id}`;
    const base = (await client.getDocument(draftId)) ?? (await client.getDocument(id));
    if (!base) continue;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _rev, _updatedAt, _createdAt, ...rest } = base;
    const next = tidy(rest) as typeof rest;
    if (JSON.stringify(next) === JSON.stringify(rest)) continue;
    await client.createOrReplace({ ...next, _id: draftId, _type: base._type });
    console.log(`✓ ${id}`);
    changed++;
  }
  console.log(changed ? `\n${changed} draft(s) written — review and Publish in /studio.` : "Nothing to tidy.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
