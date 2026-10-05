/* Shapes of what the GROQ queries in lib/queries.ts return. */
import type { PortableTextBlock } from "next-sanity";

export type SanityImage = { asset?: { _ref: string }; alt?: string; scale?: number; hotspot?: unknown; crop?: unknown } | null;
export type Link = { _key?: string; label?: string; href?: string } | null;

export type Profile = { _key: string; label: string; handle?: string; url: string; inFooter?: boolean };

export type Settings = {
  name?: string;
  tagline?: string;
  accent?: string;
  email?: string;
  profiles?: Profile[];
  seoDescription?: string;
  ogImage?: SanityImage;
  cvUrl?: string;
} | null;

export type WorkItem = {
  _id: string;
  title: string;
  summary?: string;
  description?: string;
  role?: string;
  kind?: string;
  organization?: string;
  years?: string;
  links?: Link[];
  image?: SanityImage;
  stack?: string[];
  outline?: string[];
  reference?: PortableTextBlock[];
};

export type CvEntry = { _key: string; title: string; note?: string; organization?: string; years?: string };

export type HomeData = {
  eyebrow?: string;
  headline?: string;
  intro?: PortableTextBlock[];
  cta?: Link;
  facts?: { _key: string; heading: string; items?: { _key: string; text?: string; href?: string }[] }[];
  selectedWorkHeading?: string;
  selectedWork?: (WorkItem | null)[];
  allWorkLabel?: string;
} | null;

export type AboutData = {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  portrait?: SanityImage;
  body?: PortableTextBlock[];
  currentHeading?: string;
  current?: CvEntry[];
  educationHeading?: string;
  education?: CvEntry[];
  pastHeading?: string;
  past?: CvEntry[];
  interestsHeading?: string;
  interests?: string[];
  cvLabel?: string;
} | null;

export type WorkData = {
  eyebrow?: string;
  headline?: string;
  sections?: {
    _key: string;
    title: string;
    navLabel?: string;
    anchor?: string;
    subtitle?: string;
    display?: "cards" | "papers" | "syllabus";
    items?: (WorkItem | null)[];
  }[];
} | null;

export type ContactData = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  primaryButtonLabel?: string;
  secondaryButton?: Link;
  servicesHeading?: string;
  services?: { _key: string; title: string; description?: string }[];
  organizationsHeading?: string;
  organizations?: { _key: string; name: string; url?: string; logo?: SanityImage }[];
  connectHeading?: string;
  connectLinks?: Profile[];
  formHeading?: string;
  formTopics?: string[];
  successMessage?: string;
} | null;
