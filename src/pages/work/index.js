import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const researchPage = ({ location }) => {
  return (
    <>
      <Nav location={location} />
      <main className="pt-nav is-grey">
        <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-24 pb-6">
          <div className="mx-auto max-w-5xl py-8">
            <h1 className="mt-10 mb-6 text-3xl">Work</h1>
            <a href="https://aipedagogy.org" className="block cursor-pointer bg-white group grid lg:grid-cols-5 overflow-hidden rounded-2xl relative will-change-transform">
                <div className="overflow-hidden w-full col-span-3 relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/work/ai-pedagogy.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-0 sm:justify-between p-8 sm:p-10">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3">Research project</p>
                    <p className="font-semibold text-xl lg:text-3xl leading-tight">Helping teachers critically, ethically, & responsibly bring AI into classrooms</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Harvard University &bull; 2023</p>
                  </div>
                </div>
            </a>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10">
              <div className="block bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/work/geography-of-terror.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research project</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Mapping domestic private military deployment in the United States</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; Coming Soon</p>
                    </div>
                  </div>
              </div>
              <Link to="/work/learn-from-failure" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/work/flip.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research project</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Teaching students to embrace, learn and bounce back from failure</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022–2023</p>
                    </div>
                  </div>
              </Link>
              <a href="https://kmdi.utoronto.ca" className="block bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/work/kmdi.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Web development</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Redesigning the Knowledge Media Design Institute's website</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2023</p>
                    </div>
                  </div>
              </a>
              <Link to="/work/deceptive-design" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
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
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research project</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Teaching students to recognize and contextualize deceptive design</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022</p>
                    </div>
                  </div>
              </Link>
              <a href="https://doi.org/10.21428/f1f23564.f20c77b2" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/work/mass-surveillance.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research article</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">The United States of Surveillance: A Review of America's Mass Surveillance Laws...</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">IDEAH, Vol. 3, Iss. 2 &bull; 2022</p>
                    </div>
                  </div>
              </a>
              <Link to="/work/study-rooms" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
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
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">User research</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Centralizing study room booking at the University of Toronto's libraries</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022</p>
                    </div>
                  </div>
              </Link>
              <Link to="/work/dining-hall-checkout" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
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
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">User research</p>
                      <p className="font-semibold text-xl mb-1 leading-tight">Implementing self-checkouts at the University of Toronto's dining halls</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022</p>
                    </div>
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer location={location} />
    </>
  )
}
export const Head = ({ location }) => <Seo title="Research" location={location}/>

// export const query = graphql`
//   query Banner{
//     file(relativePath: {eq: "research/flip-header.png"}){
//       childImageSharp{
//         fluid{
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default researchPage
