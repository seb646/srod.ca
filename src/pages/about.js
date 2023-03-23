import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const jobs = [
    { 
        company: "Scholars Education", 
        position: "Software Developer",
        location: "Toronto, ON",
        years: "Jan 2023 - Present"
      },
    { 
      company: "University of Toronto", 
      position: "Web Developer & Research Assistant",
      location: "Toronto, ON",
      years: "Sep 2022 - Present"
    },
    // { 
    //     company: "Freelance", 
    //     position: "Software Engineer & UX Designer",
    //     location: "Remote",
    //     years: "2018 - Present"
    // },
    { 
        company: "University of Toronto", 
        position: "CDHI Research Fellow",
        location: "Toronto, ON",
        years: "Winter 2022"
    },
    { 
        company: "ICCIT Council", 
        position: "Director, Web Development",
        location: "Mississauga, ON",
        years: "Oct 2019 - Sep 2020"
    },
    { 
        company: "Churchill Capital", 
        position: "Data Analyst Intern",
        location: "New York, NY",
        years: "Summer 2018"
    },
]

const skillsSoft = [
    { skill: "Object-Oriented Programming" },
    { skill: "SDLC - Lean, Agile, Waterfall" },
    { skill: "Responsive Web Design" },
    { skill: "UX/UI Design" },
    { skill: "Universal Design - WCAG"},
    { skill: "Web Analytics" },
    { skill: "Design Thinking" },
]


const skillsLanguages = [
    { language: "PHP" },
    { language: "JavaScript"},
    { language: "HTML/CSS" },
    { language: "SQL" },
    { language: "Python" },
    { language: "Ruby" },
    { language: "C++" },
    { language: "R" },
]

const skillsTools = [
    { tool: "Laravel" },
    { tool: "React"},
    { tool: "jQuery" },
    { tool: "Vue.js" },
    { tool: "Ruby on Rails" },
    { tool: "Adobe Creative Suite" },
    { tool: "Figma"},
    { tool: "Tailwind CSS" },
    { tool: "WordPress" },
]

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <div className="max-w-full px-10 md:px-20 xl:px-32 pb-6">
        <div className="max-w-5xl mx-auto divide-y divide-neutral-300">
            <div className="group lg:bg-slate-100 lg:rounded-2xl py-24 lg:mb-10">
                <div className="flex justify-center items-center space-y-10 lg:space-y-0 lg:space-x-28">
                    <h1 className="text-4xl leading-tight text-slate-700 font-extrabold">I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">software developer</span> based in Toronto.</h1>
                </div>
            </div>
            <div id="introduction" className="grid lg:grid-cols-4 py-10 text-neutral-800">
                <div className="">
                    <h2 className="text-2xl leading-tight text-slate-700 font-semibold">Introduction</h2>
                </div>
                <div className="col-span-3 space-y-6">
                    <p>I've had the opportunity to learn and grow from a variety of challenges throughout my career — from building websites for charities and small businesses to developing academic platforms used to teach hundreds of students.</p>
                    <p>Currently, I work with the University of Toronto to help students embrace, learn, and bounce back from failure. Previously, I led an academic society's web development team and earned a research fellowship to investigate deceptive design.</p>
                </div>
            </div>
            <div id="experience" className="grid lg:grid-cols-4 py-10 text-neutral-800">
                <div className="">
                    <h2 className="text-2xl leading-tight text-slate-700 font-semibold">Experience</h2>
                </div>
                <div className="col-span-3 space-y-6">
                    {jobs.map((link, i) => (
                        <React.Fragment key={link.position}>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="font-medium">{link.position}</p>
                                    <p>{link.company} </p>
                                </div>
                                <div className="text-sm">
                                    <p className="lg:text-right">{link.years}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                    <div className="border-l-4 border-highlight bg-slate-50 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-highlight">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                            <p className="text-slate-700 text-sm">You can learn more about my professional experience by <a href="https://assets.srod.ca/files/Sebastian_Rodriguez_resume.pdf" className="border-b border-neutral-400 font-medium hover:text-slate-900 hover:border-slate-900 transition-all duration-200">viewing my resume</a>. I also have an <a href="https://assets.srod.ca/files/Sebastian_Rodriguez_CV.pdf" className="border-b border-neutral-400 font-medium hover:text-slate-900 hover:border-slate-900 transition-all duration-200">academic CV</a> that details my research interests and experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="education" className="grid lg:grid-cols-4 py-10 text-neutral-800">
                <div className="">
                    <h2 className="text-2xl leading-tight text-slate-700 font-semibold">Education</h2>
                </div>
                <div className="col-span-3 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="font-medium">Bachelor's degree, Informatics, Human-Computer Interaction</p>
                            <p>University of Toronto, Faculty of Information </p>
                        </div>
                        <div className="text-sm">
                            <p className="lg:text-right">April 2024<br/><span className="text-xs">(expected)</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills" className="grid lg:grid-cols-4 py-10 text-neutral-800">
                <div className="">
                    <h2 className="text-2xl leading-tight text-slate-700 font-semibold">Qualifications</h2>
                </div>
                <div className="col-span-3 space-y-6">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div>
                            {skillsSoft.map((skill, i) => (
                                <React.Fragment key={skill.skill}>
                                    <span className="block">{skill.skill}</span>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="lg:flex flex-col items-center">
                            <div>
                            {skillsLanguages.map((skill, i) => (
                                <React.Fragment key={skill.language}>
                                    <span className="block">{skill.language}</span>
                                </React.Fragment>
                            ))}
                            </div>
                        </div>
                        <div className="lg:flex flex-col items-center">
                            <div>
                            {skillsTools.map((skill, i) => (
                                <React.Fragment key={skill.tool}>
                                    <span className="block">{skill.tool}</span>
                                </React.Fragment>
                            ))}
                            </div>
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
