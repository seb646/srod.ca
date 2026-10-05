import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons/Case";

export const workItem = defineType({
  name: "workItem",
  title: "Work item",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 2,
      description: "One sentence, shown in “Selected work” on the home page",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 5,
      description: "Shown on the Work page",
    }),
    defineField({ name: "role", type: "string", description: "e.g. Lead engineer, Co-author" }),
    defineField({ name: "kind", title: "Type", type: "string", description: "Optional, e.g. Policy report, Peer-reviewed publication" }),
    defineField({ name: "organization", type: "string", description: "e.g. Harvard University" }),
    defineField({ name: "years", type: "string", description: "e.g. 2023–present" }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
      description: "e.g. “aipedagogy.org”, “Read the report”, “Press coverage”. The first one is the main link; drag to reorder.",
    }),
    defineField({
      name: "stack",
      title: "Built with",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Tools and technologies, shown as small tags on tool cards (e.g. WordPress, PHP)",
    }),
    defineField({
      name: "outline",
      title: "Course outline",
      type: "array",
      of: [{ type: "string" }],
      description: "For courses: the topics or stages, in order. Shown as a numbered track.",
    }),
    defineField({
      name: "reference",
      title: "Citation",
      type: "citationText",
      description: "For publications: the formatted citation. Select text to italicize or link it. Shown with a Copy button; leave empty to hide.",
    }),
    defineField({
      name: "image",
      title: "Logo",
      type: "image",
      description: "Shown whole beside the item on the Work page. SVG or transparent PNG, trimmed close to the logo.",
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
        defineField({
        name: "scale",
        title: "Size",
        type: "number",
        initialValue: 1,
        description: "Nudge a logo that looks too big or small next to the others: 1 is normal, 0.8 smaller, 1.2 larger",
        validation: (r) => r.min(0.4).max(2),
      }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", role: "role", kind: "kind", years: "years", media: "image" },
    prepare: ({ title, role, kind, years, media }) => ({
      title,
      subtitle: [kind || role, years].filter(Boolean).join(" · "),
      media,
    }),
  },
});
