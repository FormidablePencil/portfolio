import React, { useEffect } from 'react'
import BriefBio from '../components/landingPageComps/BriefBio'
import TechnologiesShowcase from '../components/landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../components/landingPageComps/projects-showcase'
import Intro from '../components/landingPageComps/Intro'
import Contacts from '../components/landingPageComps/Contacts'
import { useDispatch } from 'react-redux'
import fetchAllProjectData from '../actions/fetchAllPortfolioData'

const LandingPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectData())
  }, [dispatch])

  return (
    <div className='landing-page'>
      <Intro />
      <TechnologiesShowcase />
      <ProjectsShowcase />
      <BriefBio />
      <Contacts />
    </div>
  )
}

export default LandingPage
