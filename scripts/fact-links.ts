/**
 * Moves the home page "At a glance" lines into the new linkable Lines field,
 * adding links for metaLAB, the AI Pedagogy Project and the Data Nutrition Project.
 * Only touches columns that still use the old plain-text lines.
 *
 * Run:  npx sanity exec scripts/fact-links.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

const LINKS: [RegExp, string][] = [
  [/metalab/i, "https://metalab.harvard.edu"],
  [/ai pedagogy/i, "https://aipedagogy.org"],
  [/data nutrition/i, "https://datanutrition.org"],
];

type Column = { _key: string; heading?: string; lines?: string[]; items?: unknown[] };

async function run() {
  for (const id of ["homePage", "drafts.homePage"]) {
    const doc = await client.getDocument<{ facts?: Column[] }>(id);
    if (!doc?.facts) continue;
    let changed = 0;
    const facts = doc.facts.map((col) => {
      if (col.items?.length || !col.lines?.length) return col;
      changed++;
      const items = col.lines.map((text, i) => {
        const href = LINKS.find(([re]) => re.test(text))?.[1];
        return { _type: "factLine", _key: `${col._key}l${i}`, text, ...(href ? { href } : {}) };
      });
      const { lines: _old, ...rest } = col;
      void _old;
      return { ...rest, items };
    });
    if (!changed) {
      console.log(`${id}: nothing to move`);
      continue;
    }
    await client.patch(id).set({ facts }).commit();
    console.log(`${id}: moved ${changed} column(s)`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
