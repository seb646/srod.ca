import type { WorkItem } from "@/sanity/types";

/** An item's links that have a URL. */
export const linksOf = (w: WorkItem) => (w.links || []).filter((l): l is NonNullable<typeof l> => !!l?.href);

/** In-page anchor for a work item: "work-aipp" → "aipp" (drafts prefix dropped too) */
export function workAnchor(id: string) {
  return id.replace(/^drafts\./, "").replace(/^work-/, "");
}
