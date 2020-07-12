import React from 'react'
import '../styles/landingPageStyles.sass'
import Landing from '../landingPageComps/Landing'
import TechnologiesShowcase from '../landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../landingPageComps/ProjectsShowcase'
import Footer from '../landingPageComps/Footer'
import Brand from '../landingPageComps/Brand'

const LandingPage = () => {

  return (
    <div className='bgImage landingPage'>
      <Landing />
      <Brand />
      <TechnologiesShowcase />
      <ProjectsShowcase />
      <Footer />
    </div >
  )
}

export default LandingPage
