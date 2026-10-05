import { defineDocuments, defineLocations, type PresentationPluginOptions } from "sanity/presentation";

const page = (title: string, href: string) => defineLocations({ message: "This page", locations: [{ title, href }] });

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    { route: "/", filter: `_type == "homePage" && _id == "homePage"` },
    { route: "/about", filter: `_type == "aboutPage" && _id == "aboutPage"` },
    { route: "/work", filter: `_type == "workPage" && _id == "workPage"` },
    { route: "/contact", filter: `_type == "contactPage" && _id == "contactPage"` },
  ]),
  locations: {
    homePage: page("Home", "/"),
    aboutPage: page("About", "/about"),
    workPage: page("Work", "/work"),
    contactPage: page("Contact", "/contact"),
    siteSettings: defineLocations({
      message: "Used on every page",
      locations: [
        { title: "Home", href: "/" },
        { title: "Contact", href: "/contact" },
      ],
    }),
    workItem: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Untitled", href: "/work" },
          { title: "Home", href: "/" },
        ],
      }),
    }),
  },
};
