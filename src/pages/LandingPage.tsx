import React, { useState, useEffect, useRef } from 'react'
import '../styles/landingPageStyles.sass'
import Landing from '../landingPageComps/Landing'
import TechnologiesShowcase from '../landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../landingPageComps/ProjectsShowcase'
import Footer from '../landingPageComps/Footer'
// import Brand from '../landingPageComps/Brand'
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData'
import '../styles/parallax.sass';
import { Typography } from '@material-ui/core'
import { animated, useSpring } from 'react-spring'
import Particles from 'react-particles-js';
import useScrollInfo from 'react-element-scroll-hook';

//* We've made the parallax effect with springs opposed to Parallax api
//* now to replace Parallax with spring parallax

const LandingPage = () => {
  useFetchAllPortfolioData()

  const [showElement, setShowElement] = useState(false)
  // eslint-disable-next-line
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const bgParallax = () => offset.interpolate({
    range: [0, 1],
    output: [0, 100]
  }).interpolate(x => `backgroundPosition: ${x}%, ${x}%`)

  const handleScrollAndAnimations = () => {
    // const posY = ref.current.getBoundingClientRect().bottom;
    const offsetValue = window.pageYOffset;
    set({ offset: offsetValue });
    console.log(offsetValue);
    if (offsetValue > 800 && offsetValue < 1200) {
      if (showElement) setShowElement(false)
    } else {
      if (!showElement) setShowElement(true)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollAndAnimations);
    return () => {
      window.removeEventListener("scroll", handleScrollAndAnimations);
    };
  });

  const trackScroll = useRef(null)
  // if (trackScroll.current) console.log(trackScroll.current.getBoundingClientRect());
  useEffect(() => {
    setInterval(() => {
      if (trackScroll.current) console.log(trackScroll.current.getBoundingClientRect());
    }, 1500)
  }, [])


  return (
    <div className="landingPage parallax-container">
      <div ref={trackScroll} className='parallax-bg-image'>
        <img
          className=''
          src={require('../assets/croppedVerticallyFlowerPattern.jpg')}
          alt='' />
      </div>
      <div className='parallax-content'>
        {/* <Particles /> */}
        {/* <img className="bgImg" src={bgImg} alt='background' /> */}
        {/* <Brand /> */}
        {/* <FirstSection /> */}
        <TechnologiesShowcase showElement={showElement} />
        {/* <ProjectsShowcase /> */}
        {/* <Landing /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default LandingPage

const FirstSection = () => {
  return (
    <div className='firstSection'>
      <Typography variant='body1' className='textPrimary'>Intro section that sets a setting and shows the user it's a portfolio. So maybe some art here with animations.</Typography>
    </div>
  )
}