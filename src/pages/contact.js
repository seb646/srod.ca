import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/contact"

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full md:px-10 lg:px-20 xl:px-32">
        <Contact />
    </div>
  </Layout>
)

export const Head = ({ location }) => <Seo title="Contact" location={location} />

export default ContactPage
