import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Contact from "../components/contact"
import Seo from "../components/seo"

const IndexPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10">
        <div className="mx-auto max-w-5xl pt-20 sm:pt-48 pb-20 sm:pb-72 flex items-center justify-center flex-col relative">
          <h1 className="mb-5 text-3xl lg:text-5xl leading-115 font-extrabold text-slate-700">I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">researcher</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">student</span> exploring how technology influences and shapes society.</h1>
          <p class="text-lg text-left max-w-xl mr-auto mb-8">Currently studying at the University of Toronto's Faculty of Information and working as a researcher for the University of Toronto and metaLAB at Harvard University.</p>
          <div className="flex flex-col sm:flex-row items-center w-full text-neutral-600 text-sm font-medium space-y-6 sm:space-y-0 sm:space-x-6">
              <Link to="/about" className="shrink-0 rounded-full bg-highlight px-6 py-4 text-white font-semibold text-base hover:bg-highlight/80 transition-colors duration-300">
                Learn about me
              </Link>
              <Link to="/research" className="rounded-full font-medium text-base text-highlight hover:underline w-full group">
                <div className="flex items-center justify-center sm:justify-start">
                View my research
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
              </Link>
          </div>
          <div className="hidden sm:flex w-full items-end justify-center absolute bottom-10 lg:animate-bounce text-neutral-400 py-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-full px-0 md:px-20 xl:px-32 sm:space-y-10">
        <div className="bg-royal-blue md:rounded-2xl p-10 md:p-20 xl:p-32" id="featured-research">
          <h2 className="text-white text-center mb-10 xl:mb-20 leading-tight text-4xl xl:text-6xl font-bold">Featured Projects</h2>
          <div className="mx-auto max-w-5xl">
            <a href="https://aipedagogy.org" className="block cursor-pointer bg-white group grid lg:grid-cols-5 overflow-hidden rounded-2xl relative will-change-transform">
                <div className="overflow-hidden w-full col-span-3 relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../images/research/ai-pedagogy.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-0 sm:justify-between p-8 sm:p-10">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3">Academic research</p>
                    <p className="font-semibold text-xl lg:text-3xl leading-tight">Helping teachers critically, ethically, & responsibly bring AI into classrooms</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Harvard University &bull; 2023</p>
                  </div>
                </div>
            </a>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10">
            <Link to="/research/learn-from-failure" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../images/research/flip.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Academic research</p>
                      <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Teaching students to embrace, learn and bounce back from failure</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022–2023</p>
                    </div>
                  </div>
              </Link>
              <Link to="/research/deceptive-design" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../images/research/deceptive-design.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Academic research</p>
                      <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Teaching students to recognize and contextualize deceptive design</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022</p>
                    </div>
                  </div>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-10 lg:mt-16">
              <Link to="/research" className="rounded-full bg-white/10 px-6 py-4 text-white font-semibold text-lg hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center">
                View my research
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-section md:rounded-2xl p-10 md:p-20 xl:p-32">
          <h2 className="text-white text-center mb-10 xl:mb-20 leading-tight text-4xl xl:text-6xl font-bold">Research Interests</h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-10 mt-10">
                <div className="specialty-card block bg-pastel-purple rounded-2xl overflow-hidden group relative transition-all duration-300">
                  <div className="absolute top-0 p-8 z-10">
                    <p className="font-semibold text-lg sm:text-xl">Internet & Society</p>
                    <p className="xl:hidden text-2xl sm:text-4xl 2xl:text-5xl font-semibold w-11/12 mt-8">The internet's impact on society</p>
                  </div>
                  <div className="relative h-full top-0 w-full flex items-end justify-end">
                    <StaticImage
                      src="../images/home/browser.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="absolute w-9/12 md:w-3/5 lg:w-11/12 right-0 -bottom-24 sm:-bottom-14 xl:bottom-0"
                    />
                    <p className="hidden xl:block absolute w-11/12 right-0 px-12 pb-24 text-4xl 2xl:text-5xl font-semibold">Exploring the internet's societal impact</p>
                  </div>
                </div>
                <div className="specialty-card block bg-pastel-green rounded-2xl overflow-hidden group relative transition-all duration-300">
                  <div className="absolute top-0 p-8 z-10">
                    <p className="font-semibold text-lg sm:text-xl">Surveillance & Privacy</p>
                    <p className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold w-11/12 mt-8">Protecting data from companies & governments</p>
                  </div>
                  <div className="relative h-full top-0 w-full flex items-center justify-center">
                    <StaticImage
                      src="../images/home/surveillance4.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="absolute w-7/12 sm:w-10/12 md:w-3/5 xl:w-8/12 -bottom-9 sm:bottom-0"
                    />
                  </div>
                </div>
                <div className="specialty-card block bg-pastel-blue rounded-2xl overflow-hidden group relative transition-all duration-300">
                  <div className="absolute top-0 p-8 z-10">
                    <p className="font-semibold text-lg sm:text-xl">Digital Literacy & Pedagogy</p>
                    <p className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold w-11/12 mt-8">Empowering people to use digital tools</p>
                  </div>
                  <div className="relative h-full top-0 w-full flex items-center justify-center">
                    <StaticImage
                      src="../images/home/digital-literacy.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="absolute  w-4/12 sm:w-9/12 bottom-0"
                    />
                  </div>
                </div>
                <div className="specialty-card block bg-pastel-tan rounded-2xl overflow-hidden group relative transition-all duration-300">
                  <div className="absolute top-0 p-8 z-10">
                    <p className="font-semibold text-lg sm:text-xl">Human-Computer Interaction</p>
                    <p className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold w-11/12 mt-8">Understanding how humans use technology</p>
                  </div>
                  <div className="relative h-full top-0 w-full flex items-center justify-center">
                    <StaticImage
                      src="../images/home/people.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="absolute w-8/12 sm:w-10/12 bottom-0"
                    />
                  </div>
                </div>

            </div>
            <div className="flex items-center justify-center mt-10 lg:mt-16">
              <Link to="/about#skills" className="rounded-full bg-white/10 px-6 py-4 text-white font-semibold text-lg hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center">
                Learn about me
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Contact />
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
export const Head = ({ location }) => <Seo title="Home" location={location} />

export default IndexPage
