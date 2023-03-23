import * as React from "react"

const Contact = () => {
  return (
    <div className="bg-neutral-100 md:rounded-2xl p-10 xl:p-32">
        <div className="mx-auto max-w-5xl">
            <h2 className="text-center mb-10 xl:mb-16 leading-tight text-4xl xl:text-5xl font-semibold">Interested in working together?</h2>
            <div className="bg-white rounded-2xl p-14 xl:p-24 flex flex-col items-center justify-center text-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" className="w-16 h-16 xl:w-24 xl:h-24 text-green-500 mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="font-semibold text-3xl xl:text-4xl mb-3">Open to new opportunities</p>
              <p className="xl:max-w-xl">Currently seeking internships for Summer 2023, but I'm also open to part-time and freelance work. </p>
            </div>
            <div className="grid xl:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-14 xl:p-16 flex flex-col items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-purple-500 mb-3"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                <p className="font-semibold text-3xl mb-3">Email</p>
                <a href="mailto:me@srod.ca" className="text-sky-600 hover:underline">me@srod.ca</a>
              </div>
              <div className="bg-white rounded-2xl p-14 xl:p-16 flex flex-col items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-gray-500 mb-3"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <p className="font-semibold text-3xl mb-3">GitHub</p>
                <a href="https://github.com/seb646" className="text-sky-600 hover:underline">@seb646</a>
              </div>
              <div className="bg-white rounded-2xl p-14 xl:p-16 flex flex-col items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-blue-500 mb-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <p className="font-semibold text-3xl mb-3">LinkedIn</p>
                <a href="https://linkedin.com/in/seb646/" className="text-sky-600 hover:underline">@seb646</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
