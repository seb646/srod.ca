import * as React from "react"
import { Link } from "gatsby"
import { useDetectScroll } from "@smakss/react-scroll-direction";

const Nav = ({ location }) => {
  const [scrollDir] = useDetectScroll({});
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
      <nav className={`${scrollDir === "still" ? "is-visible" : scrollDir === "up" ? "is-visible" : "is-hidden"} ${location && location.pathname === "/work/" ? "is-grey" : ""}`}>
        <div className="mx-auto max-w-full px-10 md:px-20 2xl:px-32 py-6">
          <div className="nav-fixed-height flex mx-auto max-w-5xl justify-between items-center">
            <div>
              <Link to="/" className="logo block text-2xl">Sebastian</Link>
            </div>
            <div className="hidden sm:block">
              <ul className="nav-links flex flex-row space-x-8">
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/work" getProps={({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "active" } : null}>Work</Link></li>
                <li><a href="https://assets.srod.ca/files/Sebastian_Rodriguez_CV.pdf">CV</a></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
              </ul>
            </div>
            <div className="block sm:hidden">
              {navbarOpen ? (
                <span onClick={() => setNavbarOpen(!navbarOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-neutral-500">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              ) : (
                <span onClick={() => setNavbarOpen(!navbarOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-neutral-500">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
          </div>
        </div>
        {navbarOpen ? (
          <div className={`block sm:hidden mobile-nav-links shadow-lg flex flex-col border-t divide-y  ${scrollDir === "still" ? "is-visible" : scrollDir === "up" ? "is-visible" : "is-hidden"} ${location && location.pathname === "/research/" ? "is-grey border-neutral-400 divide-neutral-400" : "bg-white border-neutral-400 divide-neutral-400"}`}>
            <Link to="/research" getProps={({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "active block px-10 py-3" } : { className: "block px-10 py-3" } }>Research</Link>
            <Link to="/about" className="block px-10 py-3" activeClassName="active">About</Link>
            <a href="https://assets.srod.ca/files/Sebastian_Rodriguez_resume.pdf" className="block px-10 py-3">Resume</a>
            <Link to="/contact" className="block px-10 py-3" activeClassName="active">Contact</Link>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
  )
}

export default Nav
