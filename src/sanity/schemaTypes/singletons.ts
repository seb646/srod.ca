import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons/Cog";
import { HomeIcon } from "@sanity/icons/Home";
import { UserIcon } from "@sanity/icons/User";
import { DocumentsIcon } from "@sanity/icons/Documents";
import { EnvelopeIcon } from "@sanity/icons/Envelope";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "links", title: "Links" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "name", type: "string", group: "identity", validation: (r) => r.required() }),
    defineField({ name: "tagline", type: "string", group: "identity", description: "Shown in search results and link previews, e.g. Researcher & Engineer" }),
    defineField({
      name: "accent",
      title: "Accent colour",
      type: "string",
      group: "identity",
      initialValue: "#7a1e2c",
      options: {
        layout: "radio",
        list: [
          { title: "Oxblood", value: "#7a1e2c" },
          { title: "Navy", value: "#1f3a5f" },
          { title: "Forest", value: "#2f5d50" },
        ],
      },
    }),
    defineField({ name: "email", type: "string", group: "links", validation: (r) => r.required().email() }),
    defineField({
      name: "profiles",
      title: "Profiles",
      type: "array",
      group: "links",
      description: "ORCID, GitHub, LinkedIn, Bluesky… Drag to reorder.",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
    defineField({ name: "cv", title: "CV (PDF)", type: "file", group: "links", options: { accept: "application/pdf" } }),
    defineField({ name: "seoDescription", title: "Default description", type: "text", rows: 3, group: "seo" }),
    defineField({ name: "ogImage", title: "Social share image", type: "image", group: "seo", description: "1200×630" }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string", description: "Small label above the headline" }),
    defineField({ name: "headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "intro", type: "richText" }),
    defineField({ name: "cta", title: "Button", type: "link" }),
    defineField({
      name: "facts",
      title: "At a glance",
      type: "array",
      description: "The short columns under the intro (Currently, Interests, Education)",
      of: [defineArrayMember({ type: "factColumn" })],
      validation: (r) => r.max(4),
    }),
    defineField({ name: "selectedWorkHeading", type: "string", initialValue: "Selected work" }),
    defineField({
      name: "selectedWork",
      type: "array",
      description: "Pick from your work items. Drag to reorder. Shown as a 2×2 grid, so four works best.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "workItem" }] })],
    }),
    defineField({ name: "allWorkLabel", title: "“All work” button label", type: "string", initialValue: "All work, including research" }),
  ],
  preview: { prepare: () => ({ title: "Home" }) },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "intro", title: "Intro", default: true },
    { name: "cv", title: "Roles & education" },
  ],
  fields: [
    defineField({ name: "eyebrow", type: "string", group: "intro" }),
    defineField({ name: "heading", type: "string", group: "intro" }),
    defineField({ name: "lede", type: "text", rows: 3, group: "intro" }),
    defineField({
      name: "portrait",
      type: "image",
      group: "intro",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "body", type: "richText", group: "intro" }),
    defineField({ name: "currentHeading", type: "string", group: "cv", initialValue: "Currently" }),
    defineField({ name: "current", title: "Current roles", type: "array", group: "cv", of: [defineArrayMember({ type: "cvEntry" })] }),
    defineField({ name: "educationHeading", type: "string", group: "cv", initialValue: "Education" }),
    defineField({ name: "education", type: "array", group: "cv", of: [defineArrayMember({ type: "cvEntry" })] }),
    defineField({ name: "pastHeading", type: "string", group: "cv", initialValue: "A bit about my past" }),
    defineField({ name: "past", title: "Past roles & service", type: "array", group: "cv", of: [defineArrayMember({ type: "cvEntry" })] }),
    defineField({ name: "interestsHeading", type: "string", group: "cv", initialValue: "Research interests" }),
    defineField({ name: "interests", type: "array", group: "cv", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "cvLabel", title: "CV button label", type: "string", group: "cv", initialValue: "Download CV", description: "The PDF itself lives in Site settings → Links" }),
  ],
  preview: { prepare: () => ({ title: "About" }) },
});

export const workPage = defineType({
  name: "workPage",
  title: "Work",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "text", rows: 2 }),
    defineField({
      name: "sections",
      type: "array",
      description: "Each section lists work items. Drag sections or items to reorder.",
      of: [defineArrayMember({ type: "workSection" })],
    }),
  ],
  preview: { prepare: () => ({ title: "Work" }) },
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "intro", title: "Intro", default: true },
    { name: "help", title: "Services & logos" },
    { name: "connect", title: "Links & form" },
  ],
  fields: [
    defineField({ name: "eyebrow", type: "string", group: "intro" }),
    defineField({ name: "heading", type: "string", group: "intro" }),
    defineField({ name: "intro", type: "text", rows: 3, group: "intro" }),
    defineField({ name: "primaryButtonLabel", type: "string", group: "intro", initialValue: "Send me a message", description: "Jumps to the form", hidden: true }), // no longer shown on the page
    defineField({ name: "secondaryButton", type: "link", group: "intro", hidden: true }), // no longer shown on the page
    defineField({ name: "servicesHeading", type: "string", group: "help", initialValue: "How I can help" }),
    defineField({ name: "services", type: "array", group: "help", of: [defineArrayMember({ type: "service" })] }),
    defineField({ name: "organizationsHeading", type: "string", group: "help", initialValue: "Where I’ve worked & performed research", hidden: true }), // logos no longer shown on the page
    defineField({ name: "organizations", type: "array", group: "help", of: [defineArrayMember({ type: "organization" })], hidden: true }), // logos no longer shown on the page
    defineField({ name: "connectHeading", type: "string", group: "connect", initialValue: "Connect with me" }),
    defineField({
      name: "connectLinks",
      title: "Contact links",
      type: "array",
      group: "connect",
      description: "Emails and profiles listed beside the form",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
    defineField({ name: "formHeading", type: "string", group: "connect", initialValue: "Send me a message" }),
    defineField({
      name: "formTopics",
      title: "“What’s this about?” options",
      type: "array",
      group: "connect",
      of: [{ type: "string" }],
    }),
    defineField({ name: "successMessage", type: "string", group: "connect", initialValue: "Thanks — your message is on its way. I’ll reply soon." }),
  ],
  preview: { prepare: () => ({ title: "Contact" }) },
});
