import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from "../../images/work/flip.png"

const FailureLearningPage = ({ location }) => (
    <>
        <Nav location={location} />
        <main className="pt-nav">
            <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
                <div className="max-w-5xl mx-auto mb-10">
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-6 space-x-2 flex items-center">
                        <Link to="/work">Work</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                        <span>Research project</span>
                    </p>
                    <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-slate-700">Teaching students to embrace, learn and bounce back from failure</h1>
                    <p className="text-xl text-neutral-600 mx-auto">The University of Toronto's Failure: Learning in Progress project researched how to teach students about failure. After writing publications and developing teaching materials, the project needed an open access platform to host their resources.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                        <div>
                            <p className="font-medium text-black mb-2">Role</p>
                            <p>Research assistant</p>
                            <p>Lead developer</p>
                            <p>Information visualization</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Affiliation</p>
                            <p>Failure: Learning in Progress</p>
                            <p className="text-sm">University of Toronto</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Timeline</p>
                            <p>Sep 2022 &ndash; Ongoing</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Website</p>
                            <a href="https://learningfromfailure.ca" className="flex items-center justify-left group">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pb-20 space-y-10 relative">
                <div className="research-img overflow-hidden sm:rounded-3xl flex items-center justify-center relative will-change-transform">
                    <StaticImage
                        src="../../images/work/flip.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
            <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative mb-10">
                <div className="max-w-4xl mx-auto">
                <div className="space-y-4 sm:text-lg text-neutral-600">
                    <p>Struggle and failure are important parts of the learning process. Yet, interlocking systems of power and privilege dramatically shape who can afford to take risks, who gets to fail, and who has the resources and support to try again. The University of Toronto's <span className="font-semibold">Failure: Learning in Progress (FLIP)</span> project works to normalize the experience of failure, promote equitable failure pedagogy, and stimulate positive institutional cultures for students, staff, instructors, and administrators alike.</p>
                    <p>Over the course of their journey to understand how students approach failure, FLIP's team produced scholarly publications and developed pedagogical materials to help students learn from failure and to help educators integrate failure resiliency in their curriculums.</p>
                </div>
                </div>
                <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-lg sm:text-xl mb-4">Approach</h2>
                <div className="space-y-4 sm:text-lg text-neutral-600">
                    <p>The Failure: Learning in Progress project outlined two major goals of their website: it must include a resource hub that hosted all of their materials, and it must be sustainable and scalable so the team could include any future research. With this objective in mind, we decided WordPress, using custom post types and taxonomies, would provide the best solution. Its interface provided team members without technical knowledge easy access to edit the website's content.</p>
                    <p>With the purpose of reaching both students and instructors, we decided to balance a playful aesthetic with an information-based academic design. These decisions are reflected in every pixel of the site, from the purposeful selection of colors and fonts to the content's structure and accompanying graphics.</p>
                    <p>Accessibility and usability of the website was another key consideration. As an academic project, people needed to use the site regardless of their ability. We built the site in compliance with AODA and ISAR, using WCAG as a guideline for every page. We also conducted usability testing with 4 instructors and 4 students, reflecting the project's two target audiences. Accessibility requirements, paired with usability testing, ensured that anyone visiting the site could easily navigate it.</p>
                </div>
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
export const Head = ({ location }) => <Seo title="Learn from Failure" location={location} image={MetaImage}/>

export default FailureLearningPage
