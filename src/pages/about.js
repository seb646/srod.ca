import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Seo from "../components/seo"

const AboutPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full px-10 md:px-20 xl:px-32 pb-6">
          <div className="max-w-5xl mx-auto py-8">
              <div className="max-w-3xl mr-auto">
              <h1 className="mt-10 mb-6 text-3xl">👋 Hi, I'm Sebastian</h1>
              <p className="sm:text-lg text-neutral-600 mb-5">I'm an undergraduate student at the University of Toronto's Faculty of Information. My research and educational interests center around how technology influences and shapes soceity. I investigate how people use and interact with technology, and how to educate people on using digital tools. I'm also interested in understanding how governments and corporations conduct surveillance, with a particular focus on its impact on privacy and social dynamics.</p>
              <p className="sm:text-lg text-neutral-600 mb-5">Currently, I work with <a href="https://mlml.io/m/sebastian-rodriguez/" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">metaLAB</a> at Harvard University's Berkman Klein Center for Internet & Society to help teachers bring generative AI into their classrooms. I previously worked with the University of Toronto's <Link to="/research/learn-from-failure" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">Failure: Learning in Progress</Link> project and was an undergraduate fellow <Link to="/research/deceptive-design" className="border-b border-gray-600 hover:text-black hover:border-black transition-all duration-200">investigating deceptive design</Link> for the University of Toronto's Critical Digital Humanities Initiative.</p>
              <p className="sm:text-lg text-neutral-600 mb-5">My interdisciplinary background blends together information science, human-computer interaction, the digitial humanities, and surveillance studies to inform my research and interestes. I also have experience with programming and UX design, which helps me build web platforms to support my work.</p>
              <a class="rounded-full font-medium text-base text-highlight hover:underline w-full group" href="https://assets.srod.ca/files/Sebastian_Rodriguez_CV.pdf"><div className="flex items-center justify-center sm:justify-start">View my CV<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div></a>
              </div>
          </div>
      </div>
    </main>
    <Footer location={location} />
  </>
)

export const Head = ({ location }) => <Seo title="About" location={location} />

export default AboutPage
