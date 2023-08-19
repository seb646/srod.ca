import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

// import MetaImage from "../../images/projects/mass-surveillance.png"

const surveillancePage = ({ location }) => (
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
                        <span>Publication</span>
                    </p>
                    <h1 className="mb-1 text-3xl xl:text-5xl font-bold text-neutral-800">The United States of Surveillance</h1>
                    <p className="text-2xl mb-6 font-semibold text-neutral-500">A Review of America’s Mass Surveillance Laws, Programs, and Oversight</p>
                    <p className="text-xl text-neutral-600">A digital humanities project and publication reviewing America’s mass surveillance laws, programs, and oversight. Published in the IDEAH journal, attached to the DHSI Conference & Colloquium.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                        <div>
                            <p className="font-medium text-black mb-2">Journal</p>
                            <p className="italic">IDEAH</p>
                            <p className="text-sm">Volume 3, Issue 2</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Subjects</p>
                            <p>Surveillance studies</p>
                            <p>Digital humanities</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Publish Date</p>
                            <p>December 13, 2022</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Links</p>
                            <a href="https://doi.org/10.21428/f1f23564.f20c77b2" className="flex items-center justify-left group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <span className="group-hover:underline">Read Publication</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative mb-10">
                <div className="max-w-3xl mx-auto bg-neutral-50 p-10 sm:p-12 rounded-2xl">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">Abstract</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>After the September 11 attacks, the United States government implemented several programs to safeguard its citizens both at home and abroad. The Global War on Terrorism began, and the power of the United States executive branch grew as it deployed troops and declared war on an enemy operating across the borders of multiple countries. The fight against terrorism, however, was not limited to military deployments in the Middle East. Legislation and legal interpretations, including the USA PATRIOT Act, the Foreign Intelligence Surveillance Act (FISA), and others, granted the executive extraordinary powers to fight a digital surveillance war, not against any one country but rather against various networks of alleged terrorist cells located around the world. Programs implemented after 2001 sought to allow information to flow across various intelligence agencies, while greatly expanding the powers of intelligence gathering. Utilizing the Unitary Executive interpretation of Constitutional power, and with the help of legislation and a secret court, the executive branch of the United States government created a surveillance state that continues to jeopardize the rights American citizens have to privacy, the Fourth Amendment’s protection from unreasonable searches and seizures, and the Sixth Amendment’s rights to be informed when accused of a crime and to face an accuser in court. The pervasive and interlocking network of mass surveillance developing from the War on Terror has grown into a systemic problem for US citizens, with its programs continuing to infringe upon the rights of millions while producing few meaningful results.</p>
                        <p>The United States of Surveillance is a web-based digital humanities project that uses interactive media and documents to demonstrate how mass surveillance programs in the United States are sanctioned, operated, and used by deconstructing their supporting legal frameworks. This article, which accompanies the digital project, disentangles the juridical intricacies of surveillance to reveal how the current surveillance state systematically threatens the rights of citizens. After briefly introducing relevant surveillance studies scholarship, subsequent sections review pertinent legal frameworks, examples of post-9/11 mass surveillance programs, and relevant case law that helped to shape and maintain the contemporary surveillance state. Ultimately, it demonstrates how the contemporary surveillance state systemically threatens citizens, corporations, and the very fabric of democracy in the United States.</p>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
                    <Link to="/projects/deceptive-design" className="max-w-md group">
                        <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-2 pr-4 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" /></svg> Next Project</p>
                    </Link>
                    <Link to="/projects/chatgpt-app" class="text-right max-w-md group">
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
export const Head = ({ location }) => <Seo title="United States of Surveillance" location={location}/>

export default surveillancePage
