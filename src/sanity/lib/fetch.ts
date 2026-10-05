import { cache } from "react";
import { sanityFetch } from "./live";
import { SETTINGS_QUERY } from "./queries";
import type { Settings } from "../types";

export const getSettings = cache(async (): Promise<Settings> => {
  const { data } = await sanityFetch({ query: SETTINGS_QUERY });
  return data as Settings;
});
