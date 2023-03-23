import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import MetaImage from "../../images/work/flip.png"

const FailureLearningPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-slate-700">Teaching students to embrace, learn and bounce back from failure</h1>
            <p className="text-xl text-neutral-600 mx-auto">The University of Toronto's Failure: Learning in Progress project researched how to teach students about failure. After writing publications and developing teaching materials, the project needed an open access platform to host their resources.</p>
        </div>
    </div>
    <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 space-y-10 relative">
        <div className="work-img overflow-hidden border border-neutral-200 sm:rounded-3xl flex items-center justify-center relative will-change-transform">
            <StaticImage
                src="../../images/work/flip.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full"
            />
        </div>
        <div className="max-w-5xl px-10 sm:px-0 mx-auto">
            <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                <div>
                    <p className="font-medium text-black mb-2">Role</p>
                    <p>Lead developer</p>
                    <p>Designer</p>
                </div>
                <div>
                    <p className="font-medium text-black mb-2">Scope</p>
                    <p>Web development</p>
                    <p>Interaction design</p>
                    <p>Visual design</p>
                    <p>Information architecture</p>
                    <p>Prototyping</p>
                    <p>Usability testing</p>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="font-medium text-black mb-2">Funded by</p>
                        <p>Failure: Learning in Progress</p>
                        <p className="text-sm">University of Toronto</p>
                    </div>
                    <div>
                        <p className="font-medium text-black mb-2">Timeline</p>
                        <p>Sep 2022 &ndash; Ongoing</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="font-medium text-black mb-2">Tools</p>
                        <p>WordPress</p>
                    </div>
                    <div>
                        <p className="font-medium text-black mb-2">Link</p>
                        <p>
                            <a href="https://learningfromfailure.ca" className="flex items-center justify-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <span className="group-hover:underline">learningfromfailure.ca</span>
                            </a>
                            {/* <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                                <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3" />
                                </svg>
                                In Development
                            </span> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="hidden sm:flex w-full items-end justify-center lg:animate-bounce text-neutral-400 pt-6 pb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
    </div>
    <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Challenge</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Struggle and failure are important parts of the learning process. Yet, interlocking systems of power and privilege dramatically shape who can afford to take risks, who gets to fail, and who has the resources and support to try again. The University of Toronto's <span className="font-semibold">Failure: Learning in Progress (FLIP)</span> project works to normalize the experience of failure, promote equitable failure pedagogy, and stimulate positive institutional cultures for students, staff, instructors, and administrators alike.</p>
            <p>Over the course of their journey to understand how students approach failure, FLIP's team produced scholarly publications and developed pedagogical materials (like syllabi and student guides) to help students learn from failure and to help educators integrate failure resiliency in their curriculums. After making significant progress in understanding how students perceive failure, the team neded a way to share their findings with students, educators, and administrators. The project required an open-access platform that provided sustainability, accessiblity, and scalablity. </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Approach</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>The Failure: Learning in Progress project outlined two major goals of their website: it must include a resource hub that hosted all of their materials, and it must be sustainable and scalable so the team could include any future work. With this objective in mind, we decided WordPress, using custom post types and taxonomies, would provide the best solution. Its interface provided team members without technical knowledge easy access to edit the website's content.</p>
            <p>With the purpose of reaching both students and instructors, we decided to balance a playful aesthetic with an information-based academic design. These decisions are reflected in every pixel of the site, from the purposeful selection of colors and fonts to the content's structure and accompanying graphics.</p>
            <p>Accessibility and usability of the website was another key consideration. As an academic project, people needed to use the site regardless of their ability. We built the site in compliance with AODA and ISAR, using WCAG as a guideline for every page. We also conducted usability testing with 4 instructors and 4 students, reflecting the project's two target audiences. Accessibility requirements, paired with usability testing, ensured that anyone visiting the site could easily navigate it.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 className="font-semibold text-lg sm:text-xl mb-6">Outcome</h2>
            <div className="p-14 flex flex-col items-center justify-center text-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" className="w-16 h-16 text-yellow-500 mb-3"><path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" /></svg>
                <p className="font-semibold text-2xl xl:text-3xl mb-3">In Development</p>
                <p className="xl:max-w-xl">This project is still in progress. Check back later to see the outcome!</p>
            </div>
        </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => <Seo title="Learn from Failure" location={location} image={MetaImage}/>

export default FailureLearningPage
