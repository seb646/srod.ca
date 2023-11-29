import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const workPage = ({ location }) => {
  return (
    <>
      <Nav location={location} />
      <main className="pt-nav is-grey">
        <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-24 pb-6">
          <div className="mx-auto max-w-5xl py-8">
            <h1 className="mt-10 mb-6 text-3xl">Projects</h1>
            <Link to="/projects/ai-pedagogy" className="block cursor-pointer bg-white group grid lg:grid-cols-5 overflow-hidden rounded-2xl relative will-change-transform">
                <div className="overflow-hidden w-full col-span-3 relative">
                  <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <StaticImage
                    src="../../images/projects/ai-pedagogy-bg.png"
                    loading="eager"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-3 sm:space-y-0 sm:justify-between p-8 sm:p-10">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3">Research</p>
                    <p className="font-semibold text-xl lg:text-3xl leading-tight">Helping teachers critically, ethically, & responsibly bring AI into classrooms</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Harvard University &bull; 2023</p>
                  </div>
                </div>
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10">
              <Link to="/projects/geography-of-terror" className="block bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/geography-of-terror2.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research</p>
                      <p className="font-semibold text-xl mb-1">Examining the role of private military in U.S. policing, immigration, and prosecution</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; Coming Soon</p>
                    </div>
                  </div>
              </Link>
              <Link to="/projects/learn-from-failure" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/flip.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research</p>
                      <p className="font-semibold text-xl mb-1">Teaching students to embrace, learn and bounce back from failure</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022–2023</p>
                    </div>
                  </div>
              </Link>
              <Link to="/projects/kmdi" className="block bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/kmdi.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Web development</p>
                      <p className="font-semibold text-xl mb-1">Redesigning the Knowledge Media Design Institute's website</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2023</p>
                    </div>
                  </div>
              </Link>
              <Link to="/projects/deceptive-design" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/deceptive-design.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Research</p>
                      <p className="font-semibold text-xl mb-1">Teaching students to recognize and contextualize deceptive design</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">University of Toronto &bull; 2022</p>
                    </div>
                  </div>
              </Link>
            </div>
            <div className="mt-8 sm:mt-10">
              <Link to="/projects/united-states-of-surveillance" className="block cursor-pointer bg-white group overflow-hidden rounded-2xl relative will-change-transform">
                <div className="flex flex-col space-y-3 sm:justify-between p-8 sm:p-10">
                  <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Publication</p>
                      <p className="font-semibold text-xl lg:text-2xl leading-tight">The United States of Surveillance</p>
                      <p class="text-gray-500 font-medium sm:text-lg leading-tight">A Review of America's Mass Surveillance Laws, Programs, and Oversight</p>
                  </div>
                  <div>
                      <p className="text-gray-500 text-sm font-medium">IDEAH, Vol. 3, Iss. 2 &bull; 2022</p>
                  </div>
                </div>
                <div className="absolute right-10 bottom-10 bg-neutral-100 text-neutral-500 h-10 w-10 flex items-center justify-center rounded-full group-hover:scale-125 transition-all duration-300 group-hover:bg-sky-400 group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clip-rule="evenodd" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10">
              <Link to="/projects/chatgpt-app" className="flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative flex-shrink-0">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/chatgpt-app.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 h-full flex flex-col space-y-3 sm:space-y-2 justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">UX design</p>
                      <p className="font-semibold text-lg mb-1 leading-snug">Designing a mobile application for ChatGPT</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Class Project &bull; 2023</p>
                    </div>
                  </div>
              </Link>
              <Link to="/projects/study-rooms" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/study-rooms.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">UX research</p>
                      <p className="font-semibold text-lg mb-1 leading-snug">Centralizing study room booking at the University of Toronto's libraries</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Class Project &bull; 2022</p>
                    </div>
                  </div>
              </Link>
              <Link to="/projects/dining-hall-checkout" className="block cursor-pointer bg-white rounded-2xl overflow-hidden group relative will-change-transform">
                  <div className="overflow-hidden w-full relative">
                    <div className="h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <StaticImage
                      src="../../images/projects/dining-halls.png"
                      loading="eager"
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col space-y-3 sm:space-y-2 sm:justify-between p-8">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">UX research</p>
                      <p className="font-semibold text-lg mb-1 leading-snug">Implementing self-checkouts at the University of Toronto's dining halls</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Class Project &bull; 2022</p>
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
export const Head = ({ location }) => <Seo title="Projects" location={location}/>

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

export default workPage
