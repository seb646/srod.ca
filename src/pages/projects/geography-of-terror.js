import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from "../../images/projects/ai-pedagogy.png"

const mercenariesPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-wide uppercase text-neutral-500 mb-6 space-x-2 flex items-center">
              <Link to="/projects">Projects</Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
              <span>Research</span>
              </p>
              <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-neutral-800">Examining the role of private military in U.S. policing, immigration, and prosecution</h1>
              <p className="text-xl text-neutral-600">A mapping project that explores how counterterrorism practices and private military contractors have been deployed in response to natural disasters, immigration, and democratic protest in the United States.</p>
          </div>
          <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                  <div>
                      <p className="font-medium text-black mb-2">Role</p>
                      <p>Researcher</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Affiliation</p>
                    <p>University of Toronto</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Timeline</p>
                    <p>Coming Soon</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Links</p>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                        <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                        In Development
                    </span>
                  </div>
              </div>
          </div>
      </div>
      <div className="max-w-6xl mx-auto pb-20 space-y-10 relative">
          <div className="research-img overflow-hidden sm:rounded-3xl flex items-center justify-center relative will-change-transform">
              <StaticImage
                  src="../../images/projects/geography-of-terror2.png"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  className="w-full"
              />
          </div>
      </div>
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative">
        <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:text-lg text-neutral-600">
              <p>A Geography of Terror and Repression excavates the integration of U.S. War on Terror military tactics into American policing, immigration, and prosecution from Hurricane Katrina to the present day. In response to the September 11, 2001 attacks on the United States, President George W. Bush announced the U.S. commitment to a global War on Terror that sought to dismantle transnational terrorist organizations and the networks of private and state funding that supported them. Nearly twenty years on, this commitment has resulted in massive investments in military funding and surveillance technology while also raising questions about privacy, the protection of individual liberties, and the experiences of state violence borne by racialized communities.</p>
              <p>Not long after the creation of the homeland security state, Hurricane Katrina and the 2005 flooding of New Orleans offered a glimpse of the dystopian effects of the U.S. counterterrorism. In the post-Katrina moment, anti-Black racism and law-and-order rhetoric intersected with counterterror security to assault the civil, constitutional, and humanitarian rights of people across the Gulf Coast and, particularly, in New Orleans. Amidst the widespread suffering of largely poor and Black New Orleanians, state and federal officials, the news media, and private citizens characterized survivors as “insurgents” and national security risks. Heavily armed police, military, and paramilitary forces herded alleged looters and, in one instance, assumed terrorists into an outdoor detention facility modelled after Guantánamo Bay.</p>
              <p>Since then, the incorporation of War on Terror military tactics into domestic governance has continued unabated. State and federal agencies portrayed the #NoDAPL protests at Standing Rock, North Dakota, as a “pipeline insurgency” to be suppressed by private security forces. In Portland, Oregon, contractors snatched up Black Lives Matter protestors, driving them away in unmarked vans. Along the U.S.-Mexico border, similarly employed contractors detain and deport unaccompanied Central American minors in a “shadow” immigration system outside of existing legal channels. This project excavates one common thread connecting each of these events: the growing prevalence of counterterror rhetoric and policy not only in moments of crisis but, increasingly, in response to democratic expression.</p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
            <Link to="/projects/ai-pedagogy" className="max-w-md group">
                <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-2 pr-4 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" /></svg> Next Project</p>
            </Link>
            <Link to="/projects/learn-from-failure" class="text-right max-w-md group">
                <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-4 pr-2 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200">Previous Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" /></svg></p>
            </Link>
          </div>
      </div>
    </main>
    <Footer location={location} />
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => <Seo title="Geography of Terror and Repression" location={location} image={MetaImage}/>

export default mercenariesPage
