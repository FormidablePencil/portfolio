import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ShowcaseProjects from '../components/ShowcaseProjects'

function LandingPage() {
   return (
      <div className="container flex mx-auto flex flex-col">
         <Navbar />
         <Hero />
         <ShowcaseProjects />
      </div>
   )
}

export default LandingPage
