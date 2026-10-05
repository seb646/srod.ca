/**
 * Copies each work item's old single link into the new repeating Links field,
 * then clears the old field. Items that already have Links are left alone.
 *
 * Run:  npx sanity exec scripts/move-links.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

type Doc = { _id: string; link?: { label?: string; href?: string }; links?: unknown[] };

async function run() {
  const docs = await client.fetch<Doc[]>(
    `*[_type == "workItem" && defined(link.href) && !(count(links) > 0)]{ _id, link, links }`,
    {},
    { perspective: "raw" },
  );
  for (const d of docs) {
    await client
      .patch(d._id)
      .set({ links: [{ _type: "link", _key: "l0", label: d.link?.label, href: d.link?.href }] })
      .unset(["link"])
      .commit();
    console.log(`moved link on ${d._id}`);
  }
  console.log(docs.length ? "\nDone." : "Nothing to move.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
