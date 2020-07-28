import React, { useState, useRef, useEffect } from 'react'
import '../styles/landingPageStyles.sass'
import Landing from '../landingPageComps/Landing'
import TechnologiesShowcase from '../landingPageComps/TechnologiesShowcase'
import ProjectsShowcase from '../landingPageComps/ProjectsShowcase'
import Footer from '../landingPageComps/Footer'
import useFetchAllPortfolioData from '../hooks/useFetchAllPortfolioData'
import '../styles/parallax.sass';
import { Typography } from '@material-ui/core'
import { useSpring, useChain, animated, config } from 'react-spring'
import { isFirefox } from "react-device-detect";
import RosesDecor from '../landingPageComps/RosesDecor'

const LandingPage = () => {
  const [showElement] = useState(false)
  const [showElementOpacity, setShowElementOpacity] = useState(false)

  useFetchAllPortfolioData()
  // eslint-disable-next-line
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const trackScroll = useRef(null)
  const onScroll = () => {
    let offsetValue
    if (isFirefox) offsetValue = window.pageYOffset
    else offsetValue = trackScroll.current.scrollTop
    // console.log(offsetValue);
    /* */if (offsetValue > 50) setShowElementOpacity(true)
    else if (offsetValue < 50) setShowElementOpacity(false)
    // else setShowElement(false)
  }

  useEffect(() => {
    if (!isFirefox) return
    window.addEventListener('scroll', () => onScroll())
    return () => window.removeEventListener('scroll', () => onScroll())
    // eslint-disable-next-line
  }, [])

  const stackTranstionRef = useRef()

  const springRef = useRef()
  const props = useSpring({
    ref: springRef,
    from: { opacity: 1 },
    to: showElementOpacity ? { opacity: 0 } : { opacity: 1 },
  })
  const springRef2 = useRef()
  const props2 = useSpring({
    ref: springRef2,
    from: { opacity: 0 },
    to: showElementOpacity ?
      { opacity: 1, } : { opacity: 0 },
    config: showElementOpacity ? { tension: 50, friction: 20, mass: 15 } : config.gentle,

  })
  const springRefBlur = useRef()
  // const blurSpring = useSpring({ //* try to add this blur out effect at the last section where my image is at
  //   ref: springRefBlur,
  //   from: { filter: 'blur(0px)' },
  //   to: showElementOpacity ? { filter: 'blur(3px)' } : { filter: 'blur(0px)' },
  // })

  useChain(!showElementOpacity ? [springRef, stackTranstionRef, springRefBlur, springRef2] : [springRef, stackTranstionRef, springRef2, springRefBlur], [0, 3])

  return (
    <div ref={trackScroll} onScroll={onScroll} className={`landingPage ${isFirefox ? 'bgImage' : 'parallax-container'}`}>
      {!isFirefox &&
        <div className='parallax-bg-image'>
          <img src={require('../assets/flowerPatternBlurred.jpg')} alt='' />
        </div>
      }
      <div className={!isFirefox && 'parallax-content'}>
        <div>
          <animated.div style={props}>
            <Intro />
          </animated.div>
          <animated.div style={props2}>
            <TechnologiesShowcase
              stackTranstionRef={stackTranstionRef}
              showElementOpacity={showElementOpacity}
              showElement={showElement} />
          </animated.div>
          {/* <Footer /> */}
        </div>
      </div>
      <ProjectsShowcase />
      <Landing />
    </div >
  )
}

export default LandingPage

const Intro = () => {
  return (
    <div className='introSection'>
      <div className="banner">
        <div className="textContainer">
          <p className='largeText'>
            <p>
              Hi, I’m a self taught programmer.
            </p>
            <p>
              I specialize in the MERN stack.
            </p>
            <p>
              It’ll be my pleasure doing business with you.
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}