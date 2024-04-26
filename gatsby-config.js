/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sebastian Rodriguez`,
    description: `A software developer who creates inspiring and empowering experiences for people.`,
    author: `@seb646`,
    siteUrl: `https://srod.ca`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KGBX38T",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "86dbe8c7-0bed-488b-9a2d-a6287e5db94d",
        srcUrl: "https://analytics.srod.ca/script.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
        dataCache: false,
      },
    },
  ],
}