/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import openGraphLogo from '../images/open_graph_logo.png' 

function Seo({ description, title, children, location, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaUrl = location ? `${site.siteMetadata.siteUrl}${location.pathname}` : site.siteMetadata.siteUrl
  const metaImage = image ? image : openGraphLogo

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />

      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <meta name="robots" content="index, archive" />
	    <meta name="googlebot" content="index, archive" />

      {children}
    </>
  )
}

export default Seo