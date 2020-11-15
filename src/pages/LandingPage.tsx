import React, { useEffect } from 'react'
import BriefBio from '../components/landingPageComps/BriefBio'
import TechnologiesShowcase from '../components/landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../components/landingPageComps/projects-showcase'
import Intro from '../components/landingPageComps/Intro'
import Contacts from '../components/landingPageComps/Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import fetchAllProjectData from '../actions/fetchAllPortfolioData'

const LandingPage = () => {
  const protfolioTextContent = useSelector((state: rootReducerT) => state.protfolioTextContent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectData())
  }, [dispatch])

  return (
    <div className='landing-page'>
      {protfolioTextContent.bio &&
        <>
          <Intro />
          <TechnologiesShowcase />
          <ProjectsShowcase />
          <BriefBio />
          <Contacts />
        </>
      }
    </div>
  )
}

export default LandingPage
