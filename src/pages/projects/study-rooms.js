import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import MetaImage from '../../images/projects/study-rooms.png' 
import Starbursting from '../../images/projects/study-rooms-starbursting.png' 
import RoundRobin from '../../images/projects/study-rooms-round-robin.png' 

const StudyRoomsPage = ({ location }) => (
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
                        <span>User research</span>
                    </p>
                    <h1 className="mb-6 text-3xl xl:text-5xl font-bold text-neutral-800">Centralizing study room booking at the University of Toronto</h1>
                    <p className="text-xl text-neutral-600">The University of Toronto has over 40 libraries, yet students can only reserve study rooms online at two of those libraries. We aimed to understand students' frustrations when booking a study room, and designed a new system that centralizes the process across the university.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between text-neutral-600 space-y-6 sm:space-y-0">
                        <div>
                            <p className="font-medium text-black mb-2">Role</p>
                            <p>UX designer</p>
                            <p>UX researcher</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Project Type</p>
                            <p>Class Project</p>
                            <p className="text-sm">INF352 @ University of Toronto</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Timeline</p>
                            <p>Sep 2022 &ndash; Dec 2022</p>
                        </div>
                        <div>
                            <p className="font-medium text-black mb-2">Scope</p>
                            <p>User research</p>
                            <p>Information architecture</p>
                            <p>Sketching and wireframing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pb-20 relative">
                <div className="research-img overflow-hidden sm:rounded-3xl flex items-center justify-center mb-4 relative will-change-transform">
                    <StaticImage
                        src="../../images/projects/study-rooms.png"
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="max-w-3xl px-10 md:px-0 mx-auto flex flex-col md:flex-row justify-between space-y-3 md:space-y-0">
                    <p className="text-sm text-neutral-500">A study area in the University of Toronto's Robarts Common building.</p>
                    <p className="text-sm text-neutral-500 md:text-right">Photo by <a className="font-medium" href="https://smithandandersen.com/projects/university-toronto-robarts-common">Smith + Anderson</a></p>
                </div>
            </div>
            <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-20 relative mb-10">
                <div className="max-w-3xl mx-auto">
                <div className="space-y-4 sm:text-lg text-neutral-600">
                    <p>Study rooms provide an essential service to students. They are a quiet space where students learn and research individually, and they give opportunities for students to join together and collaborate in small groups. The University of Toronto has over 40 libraries, many of which house study rooms for students, faculty, and staff. As of December 2022, study room booking systems only support two of those libraries: the John P. Robarts Research Library and the Gerstein Science Information Centre. Students looking to book rooms outside of these two locations must speak with a librarian either in-person or over the phone. This limitation creates barriers for students looking to venture beyond the two largest and most crowded libraries on campus. </p>
                    <p>The project aims to understand students' frustrations when booking study rooms at the university's libraries. It examines and addresses the problems students face when utilising study rooms by creating a more efficient booking system and bringing greater awareness to the various study locations available on campus.</p>
                </div>
                </div>
                <div className="max-w-3xl mx-auto">
                <h2 className="font-semibold text-lg sm:text-xl mb-4">Why does this matter?</h2>
                <div className="space-y-4 sm:text-lg text-neutral-600">
                    <p>The University of Toronto invests heavily in their libraries and its accompanying resources for students:</p>
                    <ul className="list-disc ml-4 max-w-3xl space-y-4">
                        <li>The university's 2022-23 budget allocated <span className="font-semibold text-black">CAD$122 million</span> for the administration of its libraries</li>
                        <li>In 2022, the university spent <span className="font-semibold text-black">CAD$25 million</span> to develop Robarts Common, an expansion to the Robarts library that provides additional study spaces for 1,200 students</li>
                        <li>In 2008, Ontario contributed <span className="font-semibold text-black">CAD$15 million</span> to develop additional study spaces for 1,500 students</li>
                    </ul>
                    <p>Despite these large financial investments, many students are unaware of all the opportunities on campus. Those that are aware may not understand how to take full advantage of these resources or may find the process cumbersome.</p>
                </div>
                </div>
                <div className="max-w-3xl mx-auto">
                <h2 className="font-semibold text-lg sm:text-xl mb-4">Target Audience</h2>
                <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>We begain by defining our target audience as students at the University of Toronto. This technologically literate group posesses the ability to find and reserve study rooms, but often lacks the time or mental bandwith to look beyond what's made easily accessible. This group is the foundation of our user profile, and is identified by the following characteristics:</p>
                        <ul className="list-disc ml-4 max-w-3xl space-y-2">
                            <li>Undergraduate or graduate students</li>
                            <li>Aged 18 to 30</li>
                            <li>42.9% male, 54.7% female, 2.4% non-binary</li>
                            <li>Domestic or international</li>
                            <li>Multicultural and multilingual</li>
                            <li>Living on residence or commuting to campus</li>
                            <li>Commits several hours per day to school research</li>
                            <li>Participates in group study sessions, or has group assignments</li>
                            <li>On-campus for an average of 6 hours every day</li>
                            <li>Has 10-20 hours of research per week</li>
                            <li>Conscious of academic commitments and responsibilities</li>
                        </ul>
                </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">User Persona</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>To help us empathize with our target audience, we created Steve, a 20-year-old undergraduate student majoring in political science. He's on-campus almost every day and spends hours each week in a study room researching on his assignments. Steve is overresearched; his classes are demaning and he has several assignments due each week so he lacks the mental bandwidth to focus on anything beyond his academics.</p>
                        <p>With plans to attend law school, Steve spends much of his free time preparing for the LSAT. He does this by studying quietly on his own and researching with a larger group of pre-law students to practice for the exam. It takes Steve over an hour to commute to campus, so he is easily irritated when someone else uses his booked study room or when his friends forget about their study session.</p>
                        <p>Steve needs a way to quickly and efficently view all of the study rooms on campus so he can reserve a quiet space to focus on his research.</p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">Interviews</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>To better understand students' frustrations, we interviewed 8 students matching our user profile who shared their thoughts on the current study room booking system. The students gave us significant insights into how they use study rooms and what their experiences were when booking a study room:</p>
                        <ul className="list-disc ml-4 max-w-3xl space-y-4">
                            <li><span className="font-semibold text-black">All of the students we interviewed only booked study rooms in Robarts or Gerstein.</span> Students are unaware of options in other locations, and the system made using other libraries far less accessible.</li>
                            <li><span className="font-semibold text-black">Students allot roughly 5 minutes of their time to book a study room.</span> Students have busy schedules, and they don't want to go through the hassle of speaking with a librarian to reserve a study room.</li>
                            <li><span className="font-semibold text-black">Many of the features students expected from a booking system were missing.</span> Students frequently use reservation systems for airlines, hotels, and restaurants, and their mental models expected abilities like inviting guests or seeing the features associated with a room.</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">Proposed Solution</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>The data collected from our interviews indicated that students would greatly benefit from a centralized booking system that allows users to reserve study rooms across the university. The project has one primary goal: making study rooms more accessible. This goal is difficult to measure, but we can generally measure the project's success using the following metrics:</p>
                        <ul className="list-disc ml-4 max-w-3xl space-y-4">
                            <li><span className="font-semibold text-black">Students reserving 80% of study rooms using the new system</span>, with the other 20% accounting for cancellations, walk-ins, and in-person reservations.</li>
                            <li><span className="font-semibold text-black">A 60% occupancy rate</span> of study rooms on campus at any given time.</li>
                            <li><span className="font-semibold text-black">A 20% increase in reservations</span> for rooms currently supported by a booking system, which can be compared using data from Robarts and Gerstaein’s current booking platforms.</li>
                            <li><span className="font-semibold text-black">A 40% increase in visitors to the university’s specialty libraries</span>, which can be measured by the T-card entry records of each location.</li>
                        </ul>
                        <p>A centralized room listing is not a new concept to the university. The university created a mobile app called Sync Search, listing vacant classrooms available to students. Although not a booking system, it does include features like showing the nearest study space and adding a particular location to your favorites. This could provide a frameresearch for our system, possibly reducing the cost of this project and decreasing the development timeline.</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    <div className="rounded-2xl bg-neutral-50 p-10">
                        <h2 className="font-semibold text-lg sm:text-xl mb-6">Starbursting Ideation</h2>
                        <a href={Starbursting}>
                        <StaticImage
                            src="../../images/projects/study-rooms-starbursting.png"
                            loading="eager"
                            formats={["auto", "webp", "avif"]}
                            alt=""
                            className="w-full"
                        />
                    </a>
                    </div>
                    <div className="rounded-2xl bg-neutral-50 p-10">
                        <h2 className="font-semibold text-lg sm:text-xl mb-6">Round Robin Ideation</h2>
                        <a href={RoundRobin}>
                            <StaticImage
                                src="../../images/projects/study-rooms-round-robin.png"
                                loading="eager"
                                formats={["auto", "webp", "avif"]}
                                alt=""
                                className="w-full"
                            />
                        </a>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">Prototypes & Usability Testing</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>The final phase of the project was to design interface prototypes, test them with users, and then create wireframes. We began this phase sketching out the key features we desired, like a calendar interface. Each team member created a sketch for a given page, and then we discussed each design, using dot voting to decide the pages and features we wanted to include.</p>
                        <p>We conducted usability testing with 4 different members of our target audience. We developed a user testing protocol, outlining our testing objectives and providing us with a scrpit to follow during an interview. Testing revealed several areas where our designs conflicted with our users' mental models, namely in button or navigation labels, the interactivity of the system, and in the search bar on our main page.</p>
                        <p>Using feedback from our usability testing, we developed wireframes in Balsamiq to provide a more polished and comprehensive prototype.</p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-lg sm:text-xl mb-4">Outcome</h2>
                    <div className="space-y-4 sm:text-lg text-neutral-600">
                        <p>This was not an official study commissioned by the University of Toronto, nor is it directly affiliated with the university. It was conducted during a user experience design course and, although it was not intended to reach production, our team learned several valuable lessons from the process:</p>
                        <ul className="list-disc ml-4 max-w-3xl space-y-4">
                            <li><span className="font-semibold text-black">It is essential to empathize with the humans using a system.</span> Without empathy and understanding, we risk creating a system that ignores our users' needs and desires. We must always keep users in mind when designing a product.</li>
                            <li><span className="font-semibold text-black">Design is an iterative process, and failure is inevitable.</span> The phrase "fail early, fail often" was a helpful reminder throughout our research, and we constantly learned from our mistakes to deliver a better product. This was especially true during usability testing, when our designs were challenged by our users' mental models. We must embrace these shortcomings and recognize that they provide learning opportunities.</li>
                            <li><span className="font-semibold text-black">Usability testing helps identify pain points in a system.</span> Even if you can only test with a few users, the process provides valuable feedback that can inform future design decisions.</li>
                            <li><span className="font-semibold text-black">Our idea is not the only solution.</span> When we pitched the project to our class and professor, we heard ideas and opinions that we hadn't considered. This is a reminder that our peers and clients can provide valuable insights into a project, and we should be open to hearing their feedback.</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto border-t border-b py-8 flex justify-between">
                    <Link to="/projects/chatgpt-app" className="max-w-md group">
                        <p className="inline-flex items-center gap-1 text-sm font-medium bg-neutral-50  rounded-full py-2 pl-2 pr-4 text-neutral-600 group-hover:bg-neutral-200 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" /></svg> Next Project</p>
                    </Link>
                    <Link to="/projects/dining-hall-checkout" class="text-right max-w-md group">
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
export const Head = ({ location }) => <Seo title="Study Rooms @ UofT" location={location} image={MetaImage}/>

export default StudyRoomsPage
