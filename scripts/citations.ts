/**
 * Moves publication citations into the new rich-text Citation field (italics + links).
 * Only fills empty Citation fields, and never touches your other edits.
 *
 * Run:  npx sanity exec scripts/citations.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

let n = 0;
const key = () => `cit${(n++).toString(36)}`;
type Part = string | { text: string; em?: boolean; href?: string };

function block(...parts: Part[]) {
  const markDefs: { _type: "link"; _key: string; href: string }[] = [];
  const children = parts.map((p) => {
    if (typeof p === "string") return { _type: "span", _key: key(), text: p, marks: [] as string[] };
    const marks: string[] = [];
    if (p.em) marks.push("em");
    if (p.href) {
      const k = key();
      markDefs.push({ _type: "link", _key: k, href: p.href });
      marks.push(k);
    }
    return { _type: "span", _key: key(), text: p.text, marks };
  });
  return [{ _type: "block", _key: key(), style: "normal", markDefs, children }];
}

const references: Record<string, ReturnType<typeof block>> = {
  "work-us-surveillance": block(
    "Rodriguez, Sebastian. 2022. “The United States of Surveillance: A Review of America’s Mass Surveillance Laws, Programs, and Oversight.” ",
    { text: "IDEAH", em: true },
    " 3 (2). ",
    { text: "https://ideah.pubpub.org/pub/v9cnwi34", href: "https://ideah.pubpub.org/pub/v9cnwi34" },
    ".",
  ),
};

async function run() {
  for (const [id, reference] of Object.entries(references)) {
    for (const docId of [id, `drafts.${id}`]) {
      if (await client.getDocument(docId)) {
        await client.patch(docId).setIfMissing({ reference }).commit();
        console.log(`updated ${docId}`);
      }
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
