import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from "../../images/projects/ai-pedagogy.png"

const AIPedagogyPage = ({ location }) => (
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
              <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-neutral-800">Helping teachers critically, ethically, & responsibly bring AI into classrooms</h1>
              <p className="text-xl text-neutral-600">A curated collection of assignments bringing a critical lens to generative artificial intelligence, built collaboratively with educators. We give teachers the tools to examine generative AI’s dangers, benefits, and impact on the classroom.</p>
          </div>
          <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                  <div>
                      <p className="font-medium text-black mb-2">Role</p>
                      <p>Researcher</p>
                      <p>Lead developer</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Affiliation</p>
                    <p>Harvard University</p>
                    <p className="text-sm">metaLAB & Berkman Klein Center</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Timeline</p>
                    <p>Jun 2023 &ndash; Ongoing</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Links</p>
                    <a href="https://aipedagogy.org/" className="flex items-center justify-left group">
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
                  src="../../images/projects/ai-pedagogy.png"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  className="w-full"
              />
          </div>
      </div>
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative mb-10">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:text-lg text-neutral-600">
              <p>The AI Pedagogy Project is a curated collection of classroom assignments, designed to help educators facilitate critical conversations with their students about the capabilities and limitations of AI. All assignments in this collection have been created by educators; all are customizable to a given classroom’s needs and an instructor's teaching values.</p>
              <p>AI is an umbrella term that refers to a growing and changing set of technologies, tools, and data-driven systems. In recent months, a subset of AI, known as “generative AI,” has captured the public imagination and caused understandable concern among some educators. These generative AI technologies include large language models (such as ChatGPT and Bard) and image generation tools (such as DALL-E and Midjourney); generative AI tools can also be used to generate code, music, and video.</p>
              <p>As public access to AI tools has increased, so has the need to define their role in education. The AI Pedagogy Project is our response to the following challenges: How do we concretely and responsibly support teachers to address the role of AI in the classroom? How do we support students in developing critical relationships with these tools while enhancing their education?</p>
              <p>We believe that regardless of discipline or technical background, every educator should be equipped to consider how AI will affect their teaching, their discipline, and their students. Now more than ever, there is a need for collaboration and exchange between STEM and the arts and humanities. This collection will continue to evolve alongside the ever-changing AI landscape.</p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
            <div></div>
            <Link to="/projects/geography-of-terror" class="text-right max-w-md group">
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
export const Head = ({ location }) => <Seo title="AI Pedagogy Project" location={location} image={MetaImage}/>

export default AIPedagogyPage
