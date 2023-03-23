import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MetaImage from "../../images/work/deceptive-design.png"

const DeceptiveDesignPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-slate-700">Teaching students to recognize and contextualize deceptive design</h1>
            <p className="text-xl text-gray-600 mx-auto">Deceptive design is the intentional use of manipulative tactics to control and exploit users. Responsible for educating the next generation of business and design professionals, the University of Toronto needed a way to teach students about the practice.</p>
        </div>
    </div>
    <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 space-y-10 relative">
        <div className="work-img overflow-hidden border border-gray-200 sm:rounded-3xl flex items-center justify-center relative will-change-transform">
            <StaticImage
                src="../../images/work/deceptive-design.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full"
            />
        </div>
        <div className="max-w-5xl px-10 sm:px-0 mx-auto">
            <div className="flex flex-col sm:flex-row justify-between text-gray-600 space-y-6 sm:space-y-0">
                <div>
                    <p className="font-medium text-black mb-2">Role</p>
                    <p>Lead developer</p>
                    <p>Designer</p>
                    <p>Research fellow</p>
                </div>
                <div className="space-y-6">
                    <div>
                      <p className="font-medium text-black mb-2">Team</p>
                      <p>Dr. Dan Guadagnolo</p>
                      <p>Mathew Iantorno</p>
                      <p>Sebastian Rodriguez</p>
                      <p>Serena Vohra</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="font-medium text-black mb-2">Funded by</p>
                        <p>Critical Digital Humanities Initiative</p>
                        <p className="text-sm">University of Toronto</p>
                    </div>
                    <div>
                        <p className="font-medium text-black mb-2">Timeline</p>
                        <p>Jan 2022 &ndash; Apr 2022</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                      <p className="font-medium text-black mb-2">Tools</p>
                      <p>WordPress</p>
                      <p>WooCommerce</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="hidden sm:flex w-full items-end justify-center lg:animate-bounce text-gray-400  pt-6 pb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
    </div>
    <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Challenge</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Our actions and decisions on the internet are influenced by mental models, biases, and idealized perceptions of our interactions with a computer, website, or application. A growing trend in UX design is the idea of <a href="https://deceptive.design" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">deceptive design</a> patterns, which are a set of strategies that purposefully take advantage of our mental models, maipulating us into making decisions that go against our interests.</p>
            <p>Tasked with researching and understanding deceptive design, we recognized that the practice impacts millions of users everyday and changing the model requires more than redesigning applications. Moving towards trusted, ethical designs requires entire shifts in company cultures and changes to the surveillance capitalism model that many companies employ. The most impactful way for us, as researchers and teachers, to push society away from deceptive design was to educate the designers, developers, marketing strategists, and business analysts who will one day be in a position to effect change.</p>
            <p>The biggest challenge was deciding the most effective way to communicate these ideas to students. How can we introduce students to the topic in a way that retains their attention? What's the best way to help students connect the theory of deceptive design to its implementation? Finally, how can we teach students to think critically about their decisions on the internet and recognize deceptive design before it influences them?</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Approach</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Our team spent weeks conducting a critical review of deceptive design's literature and compiling examples of the practice in the real world. We discovered links between current deceptive design patterns and pre-internet manipulative marketing strategies. With a comprehensive understanding of deceptive design, we decided that showing students how deceptive design worked was integral to teaching them about the concept.</p>
            <p>We decided that the best approach to teach students about deceptive design was to design and develop a website that allowed students to interact with the patterns while learning about their purpose and history. We used WordPress as a framework for this website, as it provided sustainability and ease of use for the instructors responsible for teaching students. Using WordPress allowed us to integrate the WooCommerce plugin, opening up demonstrations of deceptive design patterns employed on e-commerce platforms.</p>
            <p>The result was a website that demonstrated deceptive designs like intrusive pop-ups, checkout timers, and artifical scarcity while explaining how they manipulate users and describing their origins in post-war marketing.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Outcome</h2>
          <ul className="sm:text-lg list-disc ml-4 max-w-4xl text-gray-600 space-y-4">
            <li>Embedded in the curriculum of Contemporary Communication Technologies (CCT109) at the University of Toronto, where our project was <span className="font-medium bg-yellow-100 text-black">used to teach 800 undergraduate students</span> (many students even selected deceptive design as the topic for their term  papers).</li>
            <li>Presented as a poster at the Critical Digital Humanities International Conference, where our work <span className="font-medium bg-yellow-100 text-black">reached hundreds of educators and researchers</span> [<a href="https://assets.srod.ca/files/CDHI_dark_patterns_poster.pdf" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">PDF</a>].</li>
          </ul>
        </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => <Seo title="Deceptive by Design" location={location} image={MetaImage}/>

export default DeceptiveDesignPage
