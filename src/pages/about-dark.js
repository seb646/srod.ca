import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Resume from '../files/Sebastian_Rodriguez_Resume.pdf' 
import CV from '../files/Sebastian_Rodriguez_CV.pdf' 

const jobs = [
    { 
        company: "Scholars Education", 
        position: "Web Developer",
        location: "Toronto, ON",
        years: "2023 - Present"
      },
    { 
      company: "University of Toronto", 
      position: "Research Assistant & Developer",
      location: "Toronto, ON",
      years: "2022 - Present"
    },
    // { 
    //     company: "Freelance", 
    //     position: "Software Engineer & UX Designer",
    //     location: "Remote",
    //     years: "2018 - Present"
    // },
    { 
        company: "University of Toronto", 
        position: "Research Fellow",
        location: "Toronto, ON",
        years: "2022"
    },
    { 
        company: "ICCIT Council", 
        position: "Director, Web Development",
        location: "Mississauga, ON",
        years: "2020"
    },
    { 
        company: "Churchill Capital", 
        position: "Data Analyst Intern",
        location: "New York, NY",
        years: "2018"
    },
]

const skillsLanguages = [
    { language: "PHP" },
    { language: "JavaScript"},
    { language: "Python" },
    { language: "HTML/CSS" },
    { language: "Ruby" },
    { language: "C++" },
    { language: "R" },
    { language: "Java" },
]

const skillsTools = [
    { tool: "Laravel" },
    { tool: "React"},
    { tool: "jQuery" },
    { tool: "Vue.js" },
    { tool: "Gatsby" },
    { tool: "Ruby on Rails" },
    { tool: "Chart.js" },
    { tool: "SQL" },
    { tool: "Git"},
    { tool: "Node.js" },
    { tool: "WordPress" },
]

const skillsUX = [
    { ux: "Wireframes & Prototypes" },
    { ux: "Design Thinking" },
    { ux: "Accessibility & Universal Design"},
    { ux: "Usability Testing" },
    { ux: "Heuristic Evaluation" },
    { ux: "User Interviews" },
]

const skillsDesignTools = [
    { tool: "Adobe Creative Suite" },
    { tool: "Figma"},
    { tool: "Tailwind CSS" },
    { tool: "Bootstrap" },
    { tool: "Balsamiq"},
]

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 pb-6">
        <div className="max-w-5xl mx-auto space-y-10">
            <div className="group py-24 p-12">
                <div className="flex justify-center items-center space-y-10 lg:space-y-0 lg:space-x-28">
                    <h1 className="text-4xl leading-tight text-white font-extrabold">I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300">web engineer</span> based in Toronto.</h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="rounded-2xl shadow-lg p-12 bg-white/10">
                    <div className="text-sky-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Introduction</h2>
                    <div className="space-y-4 text-neutral-300">
                        <p>I've had the opportunity to learn and grow from a variety of challenges throughout my career &mdash; from building websites for charities and small businesses to developing academic platforms used to teach hundreds of students.</p>
                        <p>Currently, I work with the University of Toronto to help students embrace, learn, and bounce back from failure. Previously, I led an academic society's web development team and earned a research fellowship to investigate deceptive design.</p>
                        <p>I'm also pursuing a bachelor's degree at the University of Toronto with a focus on informatics, human-computer interaction, and programming.</p>
                    </div>
                </div>
                <div className="rounded-2xl shadow-lg p-12 bg-white/10">
                    <div className="text-sky-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Experience</h2>
                    <div className="space-y-4">
                    {jobs.map((link, i) => (
                        <React.Fragment key={link.position}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">{link.position}</p>
                                    <p className="text-sm text-neutral-300">{link.company} &middot; {link.years} </p>
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-right text-sm text-neutral-300">{link.location}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                    </div>
                    <p className="mt-6 text-neutral-300 text-sm">You can learn more about my professional experience by <a href={Resume} className="border-b border-neutral-400 font-medium hover:text-white hover:border-white transition-all duration-200">viewing my resume</a>. I also have an <a href={CV} className="border-b border-neutral-400 font-medium hover:text-white hover:border-white transition-all duration-200">academic CV</a> that details my research interests and experience.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10" id="skills">
                <div className="rounded-2xl shadow-lg p-12 bg-white/10">
                    <div className="text-sky-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                            <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                            <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Technical Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-medium mb-2 text-neutral-200">Languages</p>
                            {skillsLanguages.map((skill, i) => (
                                <React.Fragment key={skill.language}>
                                    <span className="relative inline-flex items-center rounded-full border border-neutral-400 px-3 py-0.5 text-sm font-medium text-neutral-300 mr-2 mb-2">{skill.language}</span>
                                </React.Fragment>
                            ))}
                        </div>
                        <div>
                            <p className="font-medium mb-2 text-neutral-200">Tools & Libraries</p>
                            {skillsTools.map((skill, i) => (
                                <React.Fragment key={skill.tool}>
                                    <span className="relative inline-flex items-center rounded-full border border-neutral-400 px-3 py-0.5 text-sm font-medium text-neutral-300 mr-2 mb-2">{skill.tool}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl shadow-lg p-12 bg-white/10">
                    <div className="text-sky-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                        <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Design Skills</h2>
                    <div className="space-y-4">
                    <div>
                            <p className="font-medium mb-2 text-neutral-200">Design Tools</p>
                            {skillsDesignTools.map((skill, i) => (
                                <React.Fragment key={skill.tool}>
                                    <span className="relative inline-flex items-center rounded-full border border-neutral-400 px-3 py-0.5 text-sm font-medium text-neutral-300 mr-2 mb-2">{skill.tool}</span>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="col-span-2">
                            <p className="font-medium mb-2 text-neutral-200">User Experience</p>
                            {skillsUX.map((skill, i) => (
                                <React.Fragment key={skill.ux}>
                                    <span className="relative inline-flex items-center rounded-full border border-neutral-400 px-3 py-0.5 text-sm font-medium text-neutral-300 mr-2 mb-2">{skill.ux}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export const Head = ({ location }) => <Seo title="About" location={location} />

export default AboutPage
