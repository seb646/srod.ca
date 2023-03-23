/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  // const $send = file_get_contents("http://data.srod.ca/store.php?IP=1&path=from_site");
  return (
    <>
      <div>
        <Nav location={location} />
        <main className={`pt-nav ${location && location.pathname === "/work/" ? "is-grey" : ""}`}>{children}</main>
        <Footer location={location} />
      </div>
    </>
  )
}

export default Layout