import React from 'react'
import '../styles/landingPageStyles.sass'
import Landing from '../landingPageComps/Landing'
import TechnologiesShowcase from '../landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../landingPageComps/ProjectsShowcase'
import Footer from '../landingPageComps/Footer'
import Brand from '../landingPageComps/Brand'
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData'

const LandingPage = () => {
  useFetchAllPortfolioData()

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
