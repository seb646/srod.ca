import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

// sanityFetch serves cached content and <SanityLive /> refreshes it the moment
// you publish in the dashboard, so no rebuilds or webhooks are needed.
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
