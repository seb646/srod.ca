import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import MetaImage from "../../images/work/sre-header.png"

const SREPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-slate-700">How the digital humanities inform surveillance studies</h1>
            <p className="text-xl text-gray-600 mx-auto">A series of public lectures by academics who use the digital humanities to inform and conduct surveillance research. Hosted by the Surveillance, Race, & Empire Learning Community, affiliated with University of Toronto's Critical Digital Humanities Initiative.</p>
        </div>
    </div>
    <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 space-y-10 relative">
        <div className="work-img overflow-hidden border border-gray-200 sm:rounded-3xl flex items-center justify-center relative will-change-transform">
            <StaticImage
                src="../../images/work/sre-header.png"
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
                    <p>Working group member</p>
                    <p>Event co-organizer</p>
                </div>
                <div>
                    <p className="font-medium text-black mb-2">Scope</p>
                    <p>Digital humanities</p>
                    <p>Surveillance studies</p>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="font-medium text-black mb-2">Affiliation & Funding</p>
                        <p>Critical Digital Humanities Initiative</p>
                        <p className="text-sm">University of Toronto</p>
                    </div>
                    <div>
                        <p className="font-medium text-black mb-2">Timeline</p>
                        <p>Jan 2022 &ndash; Jun 2022</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                      <p className="font-medium text-black mb-2">Team</p>
                      <p>Dr. Jennifer Ross</p>
                      <p>Arun Jacob</p>
                      <p>Sebastian Rodriguez</p>
                      <p>Dr. Christina Boyles</p>
                      <p>Andrew Petersen</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="hidden sm:flex w-full items-end justify-center lg:animate-bounce text-gray-400 pt-6 pb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
    </div>
    <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <h2 className="font-semibold text-lg sm:text-xl mb-6">Introduction</h2>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>The Surveillance, Race, and Empire Learning Community was a working group within the University of Toronto's Critical Digital Humanities Initiative (CDHI) that aimed to learn about the methodologies, ethical considerations, and research protections within digital humanities surveillance studies. The group interrogated surveillance sites, including biometrics and geographic information systems, to understand the racialization and imperial ideologies/practices embedded in their technologies.</p>
            <p>We examined how digital humanities helped build and shift the field of surveillance studies by hosting a series of public-facing lectures between March and June of 2022. Speakers included scholars who could assist educators and scholars in navigating the field of digital humanities surveillance studies.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <div className="mb-6">
            <h2 className="font-semibold text-lg sm:text-xl mb-1">#tresdancing and EdTech Surveillance</h2>
            <p className="mb-3 font-medium text-neutral-600">Speculative Surveillance for Social Critique</p>
            <p className="ml-3 text-sm font-medium text-neutral-600">&ndash; Presented by Dr. sava saheli singh</p>
          </div>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>A public viewing and discussion of the latest Screening Surveillance film, #tresdancing. The fourth film in the series, #tresdancing speculates the effects of escalating surveillance and control through educational technology. In this near future fiction narrative, a young person has little choice as they are forced to ramp up their engagement with a new, experimental technology in order to make up for a failing grade. Viewing of the short film was followed by discussion with creator Dr. sava saheli singh.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <div className="mb-6">
            <h2 className="font-semibold text-lg sm:text-xl mb-1">Russia, Syria, Ukraine and the Theatre of Ware</h2>
            <p className="mb-3 font-medium text-neutral-600">An Iron Curtain for a Hybrid Empire</p>
            <p className="ml-3 text-sm font-medium text-neutral-600">&ndash; Presented by Dr. Kenzie Burchell</p>
          </div>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>A public lecture by Dr. Kenzie Burchell exploring the role of state media in military campaigns. Empires are built on strategic networks of geographic control and the steadfast persistence of socially cohering strategic communication, but hybrid war has rewritten the rules and practices of what constitutes power for a landscape increasingly defined by uncertainty. This talk drew from collaborative research over the past decade to examine how divergence in the coverage of military sieges, humanitarian crises, and threats to individual life offers insights into how state media and the military work in tandem to craft dueling realities of conflict and conquest. The Syrian and Ukrainian conflicts offer ominous lessons in how orchestrating a particular fog of war can translate into the iron curtain of a hybrid empire.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <div className="mb-6">
            <h2 className="font-semibold text-lg sm:text-xl mb-1">Technocapitalism and the Policing of Race and Space</h2>
            <p className="mb-3 font-medium text-neutral-600">An Iron Curtain for a Hybrid Empire</p>
            <p className="ml-3 text-sm font-medium text-neutral-600">&ndash; Presented by Dr. Constantine Gidaris</p>
          </div>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>A public lecture by Dr. Constantine Gidaris exploring how racial capitalism and technocapitalism are bound up in modern policing, particularly within the United States. It delves into this relationship by scrutinizing the 1033 program and the ways in which weapons and technologies flow from private companies and the military to local law enforcement agencies. More specifically, the talk situates racial capitalism and technocapitalism within law enforcement’s increased use and interest in robots, arguing that their deployment in public space will constitute a form of violence that is likely to intensify the racist and discriminatory dynamics that undergird the institution of policing. </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
          <div className="mb-6">
            <h2 className="font-semibold text-lg sm:text-xl mb-1">Becoming Opaque, Becoming No-Body</h2>
            <p className="mb-3 font-medium text-neutral-600">Imagining Trans Futurity Beyond Remembrance  </p>
            <p className="ml-3 text-sm font-medium text-neutral-600">&ndash; Presented by Kanika Lawton</p>
          </div>
          <div className="space-y-6 sm:text-lg text-neutral-600">
            <p>The virtuality of Trans Day of Remembrance (TDOR) commemorations, such as the uploading of images of now-dead trans people of colour on “In Memoriam” pages, and the supposed perpetuity of the digital “afterlife,” foregrounds this talk’s concerns over what it means to imagine “queer and trans vitality” (Haritaworn, Adi Kuntsman, & Silvia Posocco, 18) beyond the hypervisibility of trans death and its online circulation of remembrance. This talk proposes queer and trans methods of moving, living, and flourishing that disrupt the surveillant capture of trans life as always-already presupposed to death by refusing recognition and visibility, instead turning to opacity and its shifting modalities as a way of being elsewhere. Pulling from such theoretical frameworks as dark sousveillance, queer opacity, trans of colour poetics, and no-bodiness, this talk situates objects such as Zach Blas’ Facial Weaponization Suite, micha cárdenas’ collaborative UNSTOPPABLE, and the emergence of Trans Day of Resilience into a wider project of trans futurity grounded in refuting the death-making present. Ultimately, this talk asks that we imagine “another end of the world” (Eric A. Stanley, 91) by working towards a future untethered to our hostile, cisnormative present—a queer and trans future of disruptive possibility.</p>
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
export const Head = ({ location }) => <Seo title="Surveillance, Race, & Empire" location={location} image={MetaImage}/>

export default SREPage
