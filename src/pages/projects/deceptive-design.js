import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from "../../images/projects/deceptive-design.png"

const DeceptiveDesignPage = ({ location }) => (
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
              <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-neutral-800">Teaching students to recognize and contextualize deceptive design</h1>
              <p className="text-xl text-neutral-600">Deceptive design is the intentional use of manipulative tactics to control and exploit users. Responsible for educating the next generation of business and design professionals, the University of Toronto needed a way to teach students about the practice.</p>
          </div>
          <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                  <div>
                      <p className="font-medium text-black mb-2">Role</p>
                      <p>Research fellow</p>
                      <p>Lead developer</p>
                      <p>UX designer</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Affiliation</p>
                    <p>University of Toronto</p>
                    <p className="text-sm">Critical Digital Humanities Initiative</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Timeline</p>
                    <p>Jan 2022 &ndash; Apr 2022</p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Links</p>
                    <a href="https://assets.srod.ca/files/CDHI_dark_patterns_poster.pdf" className="flex items-center justify-left group">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="group-hover:underline">Conference poster [PDF]</span>
                    </a>
                  </div>
              </div>
          </div>
      </div>
      <div className="max-w-6xl mx-auto pb-20 space-y-10 relative">
          <div className="research-img overflow-hidden sm:rounded-3xl flex items-center justify-center relative will-change-transform">
              <StaticImage
                  src="../../images/projects/deceptive-design.png"
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
              <p>Our actions and decisions on the internet are influenced by mental models, biases, and idealized perceptions of our interactions with a computer, website, or application. A growing trend in UX design is the idea of <a href="https://deceptive.design" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">deceptive design</a> patterns, which are a set of strategies that purposefully take advantage of our mental models, maipulating us into making decisions that go against our interests.</p>
              <p>Tasked with researching and understanding deceptive design, we recognized that the practice impacts millions of users everyday and changing the model requires more than redesigning applications. Moving towards trusted, ethical designs requires entire shifts in company cultures and changes to the surveillance capitalism model that many companies employ. The most impactful way for us, as researchers and teachers, to push society away from deceptive design was to educate the designers, developers, marketing strategists, and business analysts who will one day be in a position to effect change.</p>
              <p>The biggest challenge was deciding the most effective way to communicate these ideas to students. How can we introduce students to the topic in a way that retains their attention? What's the best way to help students connect the theory of deceptive design to its implementation? Finally, how can we teach students to think critically about their decisions on the internet and recognize deceptive design before it influences them?</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-semibold text-lg sm:text-xl mb-4">Approach</h2>
            <div className="space-y-4 sm:text-lg text-neutral-600">
              <p>Our team spent weeks conducting a critical review of deceptive design's literature and compiling examples of the practice in the real world. We discovered links between current deceptive design patterns and pre-internet manipulative marketing strategies. With a comprehensive understanding of deceptive design, we decided that showing students how deceptive design researched was integral to teaching them about the concept.</p>
              <p>We decided that the best approach to teach students about deceptive design was to design and develop a website that allowed students to interact with the patterns while learning about their purpose and history. We used WordPress as a frameresearch for this website, as it provided sustainability and ease of use for the instructors responsible for teaching students. Using WordPress allowed us to integrate the WooCommerce plugin, opening up demonstrations of deceptive design patterns employed on e-commerce platforms.</p>
              <p>The result was a website that demonstrated deceptive designs like intrusive pop-ups, checkout timers, and artifical scarcity while explaining how they manipulate users and describing their origins in post-war marketing.</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-semibold text-lg sm:text-xl mb-4">Outcome</h2>
            <ul className="sm:text-lg list-disc ml-4 max-w-4xl text-gray-600 space-y-4">
              <li>Embedded in the curriculum of Contemporary Communication Technologies (CCT109) at the University of Toronto, where our project was <span className="font-semibold text-black">used to teach 800 undergraduate students</span> (many students even selected deceptive design as the topic for their term  papers).</li>
              <li>Presented as a poster at the Critical Digital Humanities International Conference, where our research <span className="font-semibold text-black">reached hundreds of educators and researchers</span> [<a href="https://assets.srod.ca/files/CDHI_dark_patterns_poster.pdf" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">PDF</a>].</li>
            </ul>
          </div>
          <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
            <Link to="/projects/kmdi" className="max-w-md group">
                <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-2 pr-4 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" /></svg> Next Project</p>
            </Link>
            <Link to="/projects/united-states-of-surveillance" class="text-right max-w-md group">
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
export const Head = ({ location }) => <Seo title="Deceptive by Design" location={location} image={MetaImage}/>

export default DeceptiveDesignPage
