import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import MetaImage from "../../images/work/dining-halls.png"

const CheckoutUtmPage = ({ location }) => (
    <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-slate-700">Implementing self-checkouts at the University of Toronto's dining halls</h1>
            <p className="text-xl text-neutral-600 mx-auto">The University of Toronto Mississauga's three dining halls serve nearly 15,000 students daily, yet students face many challenges when purchasing their food. Wait times are long, lines are confusing, and checkout stations are understaffed. We aimed to understand student's frustrations while at a dining hall, and designed a new self-checkout system to create a more efficent experience. </p>
        </div>
    </div>
    <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 relative">
        <div className="max-w-5xl px-10 md:px-0 mx-auto flex flex-col md:flex-row justify-between mb-4 space-y-3 md:space-y-0">
            <p className="text-sm text-neutral-500">The Davis food court at the University of Toronto Mississauga</p>
            <p className="text-sm text-neutral-500 md:text-right">Photo by <a className="font-medium" href="https://thevarsity.ca/2013/02/11/food-services-task-force-at-utm-expands-across-province/">The Varsity</a></p>
        </div>
        <div className="work-img overflow-hidden border border-neutral-200 sm:rounded-3xl flex items-center justify-center mb-10 relative will-change-transform">
            <StaticImage
                src="../../images/work/dining-halls.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full"
            />
        </div>
        <div className="max-w-5xl px-10 md:px-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-neutral-600 space-y-6 md:space-y-0">
                <div>
                    <p className="font-medium text-black mb-2">Role</p>
                    <p>UX designer</p>
                    <p>UX researcher</p>
                </div>
                <div>
                    <p className="font-medium text-black mb-2">Scope</p>
                    <p>Field studies</p>
                    <p>Addinity diagraming</p>
                    <p>Sketching & wireframing</p>
                    <p>Prototyping</p>
                    <p>Usability testing</p>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="font-medium text-black mb-2">Industry</p>
                        <p>Education</p>
                    </div>
                    <div>
                        <p className="font-medium text-black mb-2">Timeline</p>
                        <p>Jan 2022 &ndash; Apr 2022</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                      <p className="font-medium text-black mb-2">Team</p>
                      <p>Sebastian Rodriguez</p>
                      <p>Samuel Din</p>
                      <p>Scott Warren</p>
                      <p>Hai Nguyen</p>
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
            <p>The University of Toronto Mississauga (UTM) has three dining halls: the Davis food court, Coleman Commons, and Subway and Bento in the Instructional Center. Each day, these locations serve the campus's 15,000 students. Dining on campus is a necessity for many students, who often lack access to affordable alternatives. Despite its importance, using a dining hall is a time-consuming endeavor that provides obstacles for students and ultimately causes the university to lose money.</p>
            <p>While each dining hall has three checkout stations where students can purchase food, only one or two kiosks are open at any time. In addition, while some locations have designated payment queues, the lines are often unstructured and can obstruct access to other parts of the cafeteria. This combination of unmanned kiosks and obfuscated queues discourages students from eating and can negatively impact their health.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Observations</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Our team visited each dining hall to observe a student’s typical interaction with the dining hall experience. We measured the time it took students to move through the process, from waiting in line to order to their eventual payment. We observed a significant bottleneck during the period after a student received their food and before they paid. In each dining hall, makeshift lines formed randomly behind the open checkout kiosks and provided much confusion to the students queuing.</p>
            <p>In addition, some dining halls, like Coleman Commons, placed the checkout kiosks in the same location as the entrance. This forced students entering the dining hall to navigate the cluster of students waiting to pay. These obstacles are often exacerbated by the lack of staffed checkout stations – during our observations, a maximum of two kiosks were manned at any given time. In rare instances, none of the kiosks were open, leaving students to wait for a staff member to return before they could eat.</p>
            <table className="min-w-full divide-y divide-neutral-300">
                <thead>
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6 md:pl-0">Dining Hall</th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900">Wait Time<br/><span className="text-xs font-medium text-neutral-500">Food Ordering</span></th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900">Wait Time<br/><span className="text-xs font-medium text-neutral-500">Food Prep</span></th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900">Wait Time<br/><span className="text-xs font-medium text-neutral-500">Checkout</span></th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900">Total Time<br/><span className="text-xs font-medium text-neutral-500">From enter to exit</span></th>
                </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">Davis (Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">20 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">11 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">10 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">40 mins</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">Davis (Off-Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">5 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">10 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">2 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">17 mins</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">IB (Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">20 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">12 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">11 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">43 mins</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">IB (Off-Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">10 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">8 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">3 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">21 mins</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">OPH (Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">15 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">10 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">17 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">45 mins</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">OPH (Off-Peak)</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">6 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">7 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">5 mins</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-neutral-500">19 mins</td>
                    </tr>
                </tbody>
            </table>
            <p>To properly identify wait times as a pain point in this process, we considered the university's previous attempts at remedying the situation. First, the university instituted a “grab and go” system where students ordered food before reaching the dining hall. While this reduced the total wait time, students were still forced to wait in the checkout line along with the non-”grab and go” customers. </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Proposed Solution</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Our observations demonstrated that students required more methods of paying for their food. This problem is rooted in an institutional failure: the university lacked the manpower to properly staff its dining halls. To address this issue, we sought to create a self-checkout system that did not rely on further staffing.</p>
            <p>Self-checkouts are an industry-proven solution to this problem, implemented by major commercial stores throughout the country. While staff members are still required to address any issues that arise in the self-checkout process, the machines would represent an easier way for students to pay while providing more points of sale to handle congestion. </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Prototyping</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>Our team developed a hardware prototype of the self-checkout environment with an accompanying digital interface. The prototype included all the standard functions self-checkouts require: an item scanner, a payment gateway, and an interfacing guiding users through the system.</p>
            <p>The prototype saw two major iterations: a makeshift cardboard box with a laptop situated atop and an all-cardboard design replicating a traditional self-checkout kiosk. The initial design allowed us to test and experiment with the digital interface, while the second design sought to provide a holistic view of the system.</p>
            <p>Prototyping the digital design began with sketching, moved to low-fidelity wireframes, and ended with mockup prototypes.</p>
            <StaticImage
                src="../../images/work/dining-halls-ui.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full"
                imgStyle={{ objectFit: 'contain' }} 
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Usability Testing</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>We conducted testing with 7 undergraduate students who frequent on-campus dining halls. The testing involved 4 unique scenarios testing the various observed pain points, like T-card payment methods, and potential pain points that other self-checkouts faced, like removing an item from the cart.</p>
            <p>The testing revealed issues with the way the interface communicated payment error messages. When students lacked funds on their T-card, the interface initially gave users a generic “payment rejected” message. Later revisions gave users a variation of error messages, like informing them of insufficient funds and showing their current meal plan balance.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 className="font-semibold text-lg sm:text-xl mb-6">Outcome</h2>
            <div className="space-y-6 sm:text-lg text-neutral-600">
                <p>This was not an official study commissioned by the University of Toronto, nor is it affiliated with the university. It was conducted during a user experience design course and, although it was not intended to reach production, our team learned several valuable lessons from the process:</p>
                <ul className="list-disc ml-4 max-w-4xl space-y-4">
                    <li><span className="font-medium bg-yellow-100 text-black">An institutional failure doesn't mean there's no solution.</span> When there's an issue at an institutional level, don't give up! Ideation can provide new solutions and alleviate pressure on the institution. </li>
                    <li><span className="font-medium bg-yellow-100 text-black">Link design requirements to specific pain points.</span> It's easy to jump into a design and make claims about the user's needs. Associating those needs with specific pain points ensures you've addressed all of the user's problems.</li>
                    <li><span className="font-medium bg-yellow-100 text-black">When prototyping, you should simulate the whole environment, not just the digital screen.</span> A screen alone cannot simulate a user experience when physical actions are required.</li>
                    <li><span className="font-medium bg-yellow-100 text-black">Observe without interfering.</span> Sometimes you must be like David Attenborough and observe users in their natural habitat. When users don't know they're being observed, you might find more accurate data!</li>
                </ul>
                <p><span className="font-bold">Addendum:</span> It's worth mentioning that the university installed self-checkouts in its dining halls a year after our study. Did we have anything to do with it? Maybe. Probably not. Do we feel vindicated? Absolutely.</p>
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
export const Head = ({ location }) => <Seo title="Dining Halls @ UofT" location={location} image={MetaImage}/>

export default CheckoutUtmPage
