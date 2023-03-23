import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import BrowningSnapchat from '../../images/work/browning-snapchat-full.png' 

const WorkPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-24 pb-6">
        <div className="mx-auto max-w-5xl pt-8">
          <h1 className="mt-10 mb-6 text-3xl">Featured Work</h1>
          <Link to="/work/learn-from-failure" className="block cursor-pointer bg-white group grid lg:grid-cols-5 overflow-hidden rounded-2xl relative will-change-transform">
              <div className="overflow-hidden w-full col-span-3 relative">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <StaticImage
                  src="../../images/work/flip.png"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="col-span-2 flex flex-col space-y-3 sm:space-y-0 sm:justify-between p-8 sm:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3">Web design & development</p>
                  <p className="font-semibold text-xl lg:text-3xl leading-tight">Teaching students to embrace, learn and bounce back from failure</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Built with WordPress.</p>
                </div>
              </div>
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10">
            <Link to="/work/study-rooms" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                <div className="overflow-hidden w-full relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/work/study-rooms.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">UX Case Study</p>
                    <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Centralizing study room booking at the University of Toronto</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">User research & prototyping.</p>
                  </div>
                </div>
              </Link>
              <Link to="/work/deceptive-design" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                <div className="overflow-hidden w-full relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/work/deceptive-design.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research Project</p>
                    <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Teaching students to recognize and contextualize deceptive design</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Built with WordPress.</p>
                  </div>
                </div>
              </Link>
              <a href="https://grytte.org/" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                <div className="overflow-hidden w-full relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/work/grytte.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Web design & development</p>
                    <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Archiving The Browning School's public finances and tax records</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Built with Laravel and Tailwind CSS.</p>
                  </div>
                </div>
              </a>
              <Link to="/work/dining-hall-checkout" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                <div className="overflow-hidden w-full relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/work/dining-halls.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">UX Case Study</p>
                    <p className="font-semibold text-xl mb-1 leading-tight sm:leading-normal">Implementing self-checkouts at the University of Toronto's dining halls</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Prototyping and usability testing.</p>
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-full px-10 md:px-20 xl:px-32  bg-neutral-900">
          <div className="mx-auto max-w-5xl py-24">
            <h1 className="mb-6 text-white text-3xl">Featured Publication</h1>
            <a href="https://doi.org/10.21428/f1f23564.f20c77b2" className="block group cursor-pointer overflow-hidden rounded-2xl relative will-change-transform">
              <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/work/mass-surveillance.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="group-hover:scale-105 transition-all duration-300"
              />
              <div className="bg-white/10 sm:bg-transparent sm:absolute z-10 w-full h-full top-0">
                <div className="h-full flex flex-col justify-end p-8 sm:p-10">
                  <p className="text-white font-semibold text-xl sm:text-3xl mb-3">The United States of Surveillance: A Review of America's Mass Surveillance Laws, Programs, and Oversight</p>
                  <p className="text-white font-medium text-sm">IDEAH, Vol. 3, Iss. 2 &bull; January 23, 2023</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-24 pb-6">
        <div className="mx-auto max-w-5xl pt-8">
          <h1 className="mt-10 mb-6 text-3xl">Work Archive</h1>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:border-b border-gray-300 mb-10 lg:pb-10">
            <a href="https://iccitcouncil.com" className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center pb-10 sm:pb-0 border-b border-gray-300 sm:border-b-0">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="z-10 w-12 h-12 text-white">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <StaticImage
                    src="../../images/work/iccit-council.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Web design & development</p>
                <p className="font-semibold text-lg leading-snug mb-2">Redesigning and modernizing the ICCIT Council's website</p>
                <p className="text-gray-500 text-xs font-medium">Built with WordPress.</p>
              </div>
            </a>
            <a href="https://github.com/seb646/crypto" className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center pb-10 sm:pb-0 border-b border-gray-300 sm:border-b-0">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="z-10 w-12 h-12 text-white">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <StaticImage
                    src="../../images/work/crypto.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Technical project</p>
                <p className="font-semibold text-lg leading-snug mb-2">Helping crypto enthusiasts view their portfolio value in real time</p>
                <p className="text-gray-500 text-xs font-medium">Built with PHP and APIs.</p>
              </div>
            </a>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:border-b border-gray-300 mb-10 lg:pb-10">
            <a href="https://github.com/seb646/interschool-club-directory" className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center pb-10 sm:pb-0 border-b border-gray-300 sm:border-b-0">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="z-10 w-12 h-12 text-white">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <StaticImage
                    src="../../images/work/interschool-clubs.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Technical project</p>
                <p className="font-semibold text-lg leading-snug mb-2">A directory for clubs and events in the New York Interschool</p>
                <p className="text-gray-500 text-xs font-medium">Built with Ruby on Rails.</p>
              </div>
            </a>
            <a href={BrowningSnapchat} className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center pb-10 sm:pb-0 border-b border-gray-300 sm:border-b-0">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="z-10 w-12 h-12 text-white">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <StaticImage
                    src="../../images/work/browning-snapchat.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Graphic design</p>
                <p className="font-semibold text-lg leading-snug mb-2">Creating a public Snapchat filter for The Browning School</p>
                <p className="text-gray-500 text-xs font-medium">Designed with Illustrator.</p>
              </div>
            </a>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 mb-10 pb-10">
          <a href="https://surveillance.fyi" className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center pb-10 sm:pb-0 border-b border-gray-300 sm:border-b-0">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="z-10 w-12 h-12 text-white">
                      <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <StaticImage
                    src="../../images/work/surveillance-fyi.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Research project</p>
                <p className="font-semibold text-lg leading-snug mb-2">Educating the public on the fields of surveillance studies</p>
                <p className="text-gray-500 text-xs font-medium">Built with Docusaurus.</p>
              </div>
            </a>
            <Link to="/work/surveillance-race-empire" className="block cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center">
              <div className="shrink-0 overflow-hidden h-20 w-20 sm:h-36 sm:w-36 rounded-2xl relative will-change-transform">
                <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <StaticImage
                    src="../../images/work/sre.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="pt-6 sm:p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">Speaker series</p>
                <p className="font-semibold text-lg leading-snug mb-2">How the digital humanities inform surveillance studies</p>
                <p className="text-gray-500 text-xs font-medium">Hosted by the University of Toronto's CDHI.</p>
              </div>
          </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const Head = ({ location }) => <Seo title="Work" location={location}/>

// export const query = graphql`
//   query Banner{
//     file(relativePath: {eq: "work/flip-header.png"}){
//       childImageSharp{
//         fluid{
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default WorkPage
