import type { StructureResolver } from "sanity/structure";
import { CaseIcon } from "@sanity/icons/Case";
import { CogIcon } from "@sanity/icons/Cog";
import { DocumentsIcon } from "@sanity/icons/Documents";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { HomeIcon } from "@sanity/icons/Home";
import { UserIcon } from "@sanity/icons/User";

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string, icon: React.ComponentType) =>
  S.listItem()
    .title(title)
    .id(type)
    .icon(icon)
    .child(S.document().schemaType(type).documentId(type).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("srod.ca")
    .items([
      singleton(S, "homePage", "Home", HomeIcon),
      singleton(S, "aboutPage", "About", UserIcon),
      singleton(S, "workPage", "Work", DocumentsIcon),
      singleton(S, "contactPage", "Contact", EnvelopeIcon),
      S.divider(),
      S.documentTypeListItem("workItem").title("Work items").icon(CaseIcon),
      S.divider(),
      singleton(S, "siteSettings", "Site settings", CogIcon),
    ]);
