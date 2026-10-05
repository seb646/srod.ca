import { defineArrayMember, defineField, defineType } from "sanity";

/** Rich text with paragraphs, italics and links — used for longer copy. */
export const richText = defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Paragraph", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL or page",
                type: "string",
                description: "e.g. https://example.com, /work, or mailto:me@srod.ca",
                validation: (r) => r.required(),
              }),
            ],
          }),
        ],
      },
    }),
  ],
});

/** A formatted citation: plain paragraph with italics and links only. */
export const citationText = defineType({
  name: "citationText",
  title: "Citation",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [{ title: "Italic", value: "em" }],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                description: "e.g. the DOI or handle link",
                validation: (r) => r.required().uri({ scheme: ["http", "https"] }),
              }),
            ],
          }),
        ],
      },
    }),
  ],
});

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "href",
      title: "URL or page",
      type: "string",
      description: "e.g. https://aipedagogy.org, /contact, or mailto:me@srod.ca",
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

/** One line on the About page: a role, degree, or service position. */
export const cvEntry = defineType({
  name: "cvEntry",
  title: "Entry",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: "e.g. Lead Engineer", validation: (r) => r.required() }),
    defineField({ name: "note", type: "string", description: "Optional italic note after the title, e.g. “with high distinction”" }),
    defineField({ name: "organization", type: "string", description: "e.g. AI Pedagogy Project" }),
    defineField({ name: "years", type: "string", description: "e.g. 2023–present" }),
  ],
  preview: {
    select: { title: "title", org: "organization", years: "years" },
    prepare: ({ title, org, years }) => ({ title, subtitle: [org, years].filter(Boolean).join(" · ") }),
  },
});

export const factLine = defineType({
  name: "factLine",
  title: "Line",
  type: "object",
  fields: [
    defineField({ name: "text", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "href",
      title: "Link",
      type: "url",
      description: "Optional. Makes this line a link.",
      validation: (r) => r.uri({ scheme: ["http", "https", "mailto"], allowRelative: true }),
    }),
  ],
  preview: {
    select: { title: "text", subtitle: "href" },
  },
});

export const factColumn = defineType({
  name: "factColumn",
  title: "Column",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "items",
      title: "Lines",
      type: "array",
      of: [defineArrayMember({ type: "factLine" })],
      description: "One item per line. Add a link to make a line clickable.",
    }),
  ],
  preview: {
    select: { title: "heading", items: "items" },
    prepare: ({ title, items }) => ({
      title,
      subtitle: ((items as { text?: string }[] | undefined) || []).map((i) => i.text).join(", "),
    }),
  },
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Profile link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", description: "e.g. GitHub", validation: (r) => r.required() }),
    defineField({ name: "handle", type: "string", description: "What's shown on the Contact page, e.g. seb646" }),
    defineField({ name: "url", type: "string", description: "Full URL or mailto: link", validation: (r) => r.required() }),
    defineField({ name: "inFooter", title: "Show in footer", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "label", subtitle: "handle" } },
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
  ],
});

export const organization = defineType({
  name: "organization",
  title: "Organization",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      type: "image",
      description: "SVG or transparent PNG works best, trimmed close to the logo. If empty, the name is shown instead.",
      fields: [
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
    defineField({ name: "url", title: "Website (optional)", type: "url" }),
  ],
  preview: { select: { title: "name", media: "logo" } },
});

export const workSection = defineType({
  name: "workSection",
  title: "Section",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: "e.g. Tools for learning", validation: (r) => r.required() }),
    defineField({ name: "navLabel", title: "Short label", type: "string", description: "Used in the jump links at the top of the page" }),
    defineField({
      name: "anchor",
      type: "slug",
      description: "Used for links like /work#research",
      options: { source: (_doc, ctx) => (ctx.parent as { title?: string })?.title ?? "" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({
      name: "display",
      title: "Section style",
      type: "string",
      description: "How this section's items are shown on the Work page",
      options: {
        layout: "radio",
        list: [
          { title: "Product cards (tools)", value: "cards" },
          { title: "Citations (research)", value: "papers" },
          { title: "Course tracks (teaching)", value: "syllabus" },
        ],
      },
    }),
    defineField({
      name: "items",
      type: "array",
      description: "Drag to reorder",
      of: [{ type: "reference", to: [{ type: "workItem" }] }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle" },
  },
});
