/**
 * Fills the two new work-item fields used on /work-new ("Built with" and
 * "Course outline") and sets each Work section's card style.
 *
 * Only fills fields that are empty, so it never overwrites your edits.
 * These are new fields that the live /work page doesn't use, so they're
 * written straight to published documents (and to any open draft).
 *
 * Run:  npx sanity exec scripts/work-new-fields.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

const items: Record<string, { stack?: string[]; outline?: string[] }> = {
  "work-aipp": { stack: ["WordPress", "PHP", "JavaScript", "OpenAI API", "Anthropic API"] },
  "work-flip": { stack: ["WordPress", "PHP", "JavaScript"] },
  "work-reflect": { stack: ["WordPress", "amCharts", "PHP", "JavaScript"] },
  "work-sage-ai": {
    outline: [
      "Where AI already shows up in daily life",
      "When generative AI is the right tool",
      "Checking outputs for bias, errors, and hallucinations",
      "The social, environmental, and labor costs",
      "How people and communities shape what comes next",
    ],
  },
  "work-ocean-ai": {
    outline: [
      "Learn the challenges facing the ocean",
      "Ideate with generative AI tools",
      "Prototype an intervention",
      "Present, and weigh the environmental costs",
    ],
  },
};

const displayByAnchor: Record<string, string> = { tools: "cards", research: "papers", teaching: "syllabus" };

async function patchBoth(id: string, fn: (p: ReturnType<typeof client.patch>) => ReturnType<typeof client.patch>) {
  for (const docId of [id, `drafts.${id}`]) {
    if (await client.getDocument(docId)) {
      await fn(client.patch(docId)).commit();
      console.log(`updated ${docId}`);
    }
  }
}

async function run() {
  for (const [id, fields] of Object.entries(items)) {
    await patchBoth(id, (p) => p.setIfMissing(fields));
  }

  // Section card styles on the Work page
  for (const docId of ["workPage", "drafts.workPage"]) {
    const doc = await client.getDocument<{ sections?: { _key: string; anchor?: { current?: string }; display?: string }[] }>(docId);
    if (!doc?.sections) continue;
    let patch = client.patch(docId);
    for (const s of doc.sections) {
      const d = displayByAnchor[s.anchor?.current || ""];
      if (d && !s.display) patch = patch.set({ [`sections[_key=="${s._key}"].display`]: d });
    }
    await patch.commit();
    console.log(`updated ${docId} sections`);
  }
  console.log("\nDone. Open /work-new to compare with /work.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
