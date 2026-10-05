import { defineQuery } from "next-sanity";

const workItemFields = /* groq */ `
  _id, title, summary, description, role, kind, organization, years, links, image, stack, outline, reference
`;

export const SETTINGS_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  name, tagline, accent, email, profiles, seoDescription, ogImage,
  "cvUrl": cv.asset->url
}`);

export const HOME_QUERY = defineQuery(`*[_id == "homePage"][0]{
  eyebrow, headline, intro, cta, facts, selectedWorkHeading, allWorkLabel,
  selectedWork[]->{ ${workItemFields} }
}`);

export const ABOUT_QUERY = defineQuery(`*[_id == "aboutPage"][0]{
  eyebrow, heading, lede, portrait, body,
  currentHeading, current, educationHeading, education,
  pastHeading, past, interestsHeading, interests, cvLabel
}`);

export const WORK_QUERY = defineQuery(`*[_id == "workPage"][0]{
  eyebrow, headline,
  sections[]{ _key, title, navLabel, "anchor": anchor.current, subtitle, display, items[]->{ ${workItemFields} } }
}`);

export const CONTACT_QUERY = defineQuery(`*[_id == "contactPage"][0]{
  eyebrow, heading, intro, primaryButtonLabel, secondaryButton,
  servicesHeading, services, organizationsHeading,
  organizations[]{ _key, name, url, logo },
  connectHeading, connectLinks, formHeading, formTopics, successMessage
}`);
