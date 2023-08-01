import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <>
    <Nav location={location} />
    <main className="pt-nav">
      <div className="max-w-full px-10 md:px-20 xl:px-32 pb-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-24 text-center">
              <StaticImage
                src="../images/404.png"
                loading="eager"
                formats={["auto", "webp", "avif"]}
                alt=""
                className="mx-auto w-48"
              />
            <h1 className="mt-2 text-3xl lg:text-5xl font-extrabold leading-tight xl:leading-tight text-slate-700">Page not found.</h1>
            <p className="mt-4 text-lg lg:text-xl text-neutral-600 mx-auto">Sorry, we can't find the page you're looking for.</p>
            <div className="mt-6">
              <Link to="/" className="rounded-full font-medium text-base text-highlight hover:underline w-full group">
                <div className="flex items-center justify-center sm:justify-start">
                Go back home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
              </Link>
            </div>
        </div>
      </div>
    </main>
    <Footer location={location} />
  </>
)

export const Head = ({ location }) => <Seo title="Page Not Found" location={location} />

export default NotFoundPage
