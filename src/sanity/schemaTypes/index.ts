import { citationText, cvEntry, factColumn, factLine, link, organization, richText, service, socialLink, workSection } from "./objects";
import { aboutPage, contactPage, homePage, siteSettings, workPage } from "./singletons";
import { workItem } from "./workItem";

export const singletonTypes = new Set(["siteSettings", "homePage", "aboutPage", "workPage", "contactPage"]);

export const schemaTypes = [
  // documents
  siteSettings,
  homePage,
  aboutPage,
  workPage,
  contactPage,
  workItem,
  // objects
  richText,
  citationText,
  link,
  cvEntry,
  factColumn,
  factLine,
  socialLink,
  service,
  organization,
  workSection,
];
