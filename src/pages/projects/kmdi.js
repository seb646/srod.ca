import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from "../../images/projects/kmdi.png"

const KMDIPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-6 space-x-2 flex items-center">
              <Link to="/projects">Projects</Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
              <span>Web development</span>
              </p>
              <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-neutral-800">Redesigning the Knowledge Media Design Institute's website</h1>
          </div>
          <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                  <div>
                      <p className="font-medium text-black mb-2">Role</p>
                      <p>Web developer</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Affiliation</p>
                    <p>University of Toronto</p>
                    <p className="text-sm">Knowledge Media Design Institute</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Timeline</p>
                    <p>May 2023 &ndash; Ongoing</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Links</p>
                    <a href="https://kmdi.utoronto.ca" className="flex items-center justify-left group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span className="group-hover:underline">Website</span>
                    </a>
                  </div>
              </div>
          </div>
      </div>
      <div className="max-w-6xl mx-auto pb-20 space-y-10 relative">
          <div className="research-img overflow-hidden sm:rounded-3xl flex items-center justify-center relative will-change-transform">
              <StaticImage
                  src="../../images/projects/kmdi.png"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  className="w-full"
              />
          </div>
      </div>
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative mb-10">
          <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
            <Link to="/projects/learn-from-failure" className="max-w-md group">
                <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-2 pr-4 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" /></svg> Next Project</p>
            </Link>
            <Link to="/projects/deceptive-design" class="text-right max-w-md group">
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
export const Head = ({ location }) => <Seo title="Knowledge Media Design Institute" location={location} image={MetaImage}/>

export default KMDIPage
