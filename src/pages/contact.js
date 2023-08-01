import * as React from "react"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Contact from "../components/contact"
import Seo from "../components/seo"

const ContactPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full md:px-10 lg:px-20 xl:px-32">
          <Contact />
      </div>
    </main>
    <Footer location={location} />
  </>
)

export const Head = ({ location }) => <Seo title="Contact" location={location} />

export default ContactPage
