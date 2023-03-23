import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ location }) => {
  return (
    <footer className={`mx-auto max-w-full px-10 xl:px-32 py-10 text-lg ${location && location.pathname === "/work/" ? "is-grey text-neutral-500" : "text-neutral-500"}`}>
        <div className="mx-auto max-w-5xl flex flex-col xl:flex-row justify-between xl:items-center space-y-6 xl:space-y-0">
            <div className="space-y-2">
                <p>© Sebastian Rodriguez &middot;  {new Date().getFullYear()}</p>
                <p className="text-sm">Built with <a className="border-b border-neutral-400 hover:border-black" href="https://gatsbyjs.com">Gatsby</a> and <a className="border-b border-neutral-400 hover:border-black" href="https://tailwindcss.com/">Tailwind CSS</a>.</p>
            </div>
            <div className="space-x-10">
                <a href="https://linkedin.com/in/seb646/">LinkedIn</a>
                <a href="https://github.com/seb646">GitHub</a>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
