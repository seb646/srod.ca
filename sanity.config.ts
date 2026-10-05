"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId, studioUrl } from "./src/sanity/env";
import { schemaTypes, singletonTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { resolve } from "./src/sanity/presentation";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "srod",
  title: "srod.ca",
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Pages and settings exist exactly once — hide them from "Create new".
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({ structure, title: "Content" }),
    presentationTool({
      title: "Live preview",
      resolve,
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    }),
    visionTool({ defaultApiVersion: apiVersion, title: "Query" }),
  ],
});
