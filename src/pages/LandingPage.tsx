import React from 'react'
import BriefBio from '../landingPageComps/BriefBio'
import TechnologiesShowcase from '../landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../landingPageComps/ProjectsShowcase'
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData'
import Intro from '../landingPageComps/Intro'
import Contacts from '../landingPageComps/Contacts'

//~ todos right now: There's a day's of work left on the landing page, making it responsive and mobile mode.
//* projects opacity animation and transiiton from left to give user info that it's a switchable/scrollable component
//* bio and contacts anim
//Todo: animational effects to create: opacity projects, chain/trailing bio; name => bio => image, opacity or transition from sides.

//Todo: on mobile they're going to let the user only click on where they want to go. It should be blazzing fast without reloading too.
const LandingPage = () => {
  //Todo: as I scroll the content fades in, MERN in intro appears a little too agressive. Make it lowercased and instead change font color, perhaps a linear gradient.
  //Todo: using hook with spring parallax
  useFetchAllPortfolioData()
  // eslint-disable-next-line
  //Todo: add parallax last
  // useChain(!showElementOpacity ? [springRef, stackTranstionRef, springRef2] : [springRef, stackTranstionRef, springRef2], [1000, 3000])

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
