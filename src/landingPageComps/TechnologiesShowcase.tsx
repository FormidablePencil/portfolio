import React, { useState, useEffect } from 'react'
// import jsLogo from '../assets/techLogo/hiclipart.com.png'
// import htmlLogo from '../assets/techLogo/htmlLogo.png'
// import cssLogo from '../assets/techLogo/cssLogo.png'
// import logo1 from '../assets/techLogo/logo(1).svg';
// import logo2 from '../assets/techLogo/logo.svg';
// import logo3 from '../assets/techLogo/logo_raw.svg';
// import logo4 from '../assets/techLogo/paper-logo.png';
// import logo6 from '../assets/techLogo/reactNativeLogo.png';
// import logo7 from '../assets/techLogo/svg+xml;base64,PHN2ZyBjbGFzcz0idy0xMCBoLTEwIGJsb2NrIG1kOmhpZGRlbiIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgICAgICAgICAgICA8dGl0bGU+VGFpbHdpbmQgQ1NTPC90aXRsZT4KICAgICAgICAgICAgICAgICAgPHBhdGggZD0iT.svg';
// import wordPressLogo from '../assets/techLogo/wordpressLogo.png';
// import gatsbyLogo from '../assets/techLogo/Gatsby_Monogram.svg';
// import github from '../assets/techLogo/github.png';
// import typescript from '../assets/techLogo/typescript.svg';
// import sassLogo from '../assets/techLogo/sassLogo.png';
import '../styles/parallax.sass';
import { animated, useTransition, useTrail, useSprings } from "react-spring";
import { Spring, config, Transition } from 'react-spring/renderprops';
import { Button } from '@material-ui/core';

// import { useSelector } from 'react-redux';
// import { rootReducerT } from '../store';

//Todo ~ bg must be blured
//Todo ~ upon hovering the MERN section have the tech show up behind the text with low opacity

function TechnologiesShowcase({ showElement, showElementOpacity, stackTranstionRef }) {

  const imageUri = [
    {
      src: require('../assets/techLogo/logo.svg'),
      key: 0
    },
    {
      src: require('../assets/techLogo/logo_raw.svg'),
      key: 1
    },
    {
      src: require('../assets/techLogo/paper-logo.png'),
      key: 2
    },
    {
      src: require('../assets/techLogo/reactNativeLogo.png'),
      key: 3
    }
  ]
  const imageUri2 = [
    {
      src: require('../assets/techLogo/logo.svg'),
      key: 0
    },
    {
      src: require('../assets/techLogo/logo_raw.svg'),
      key: 1
    },
    {
      src: require('../assets/techLogo/paper-logo.png'),
      key: 2
    }
  ]
  // const configTrailOuterCol = { tension: 80, friction: 14, }

  return (
    <>
      <div className='row techSection'>
        <div className='row1Parallax leftCol'>
          <TrailTech leftDirection={false} delay={1000} showElementOpacity={showElementOpacity} imageUri={imageUri} />
        </div>
        <div className='row2Parallax furthestToSideCol leftCol'>
          <TrailTech leftDirection={false} delay={1300} showElementOpacity={showElementOpacity} imageUri={imageUri2} />
        </div>
        <div className='midTech'>
          <div className='item mouseAwayProps'>
            <p className='firstLeter'>M</p><p>ongo</p>
          </div>
          <div className='item mouseAwayProps'>
            <p className='firstLeter'>E</p><p>xpress</p>
          </div>
          <div className='item mouseAwayProps'>
            <p className='firstLeter'>R</p><p>eact</p>
          </div>
          <div className='item mouseAwayProps'>
            <p className='firstLeter'>N</p><p>ode</p>
          </div>
        </div>
        <div className='row1Parallax furthestToSideCol rightCol'>
          <TrailTech leftDirection={true} delay={1300} showElementOpacity={showElementOpacity} imageUri={imageUri2} />
        </div>
        <div className='row2Parallax rightCol'>
          <TrailTech leftDirection={true} delay={1000} showElementOpacity={showElementOpacity} imageUri={imageUri} />
        </div>
      </div>
    </>
  )
}

export default TechnologiesShowcase


const TrailTech = ({ showElementOpacity, imageUri, delay, leftDirection }) => {
  //delay, direction and translatePx

  const [toggle, setToggle] = useState(false)
  const trail = useTrail(imageUri.length, toggle ?
    { opacity: 1, transform: `translateX(${leftDirection && '-'}100px)`, config: config.stiff, }
    : { opacity: 0, transform: 'translateX(0px)', config: config.stiff })


  useEffect(() => {
    if (showElementOpacity) {
      setTimeout(() => {
        setToggle(true)
      }, delay)
    } else if (!showElementOpacity) {
      setTimeout(() => {
        setToggle(false)
      }, delay - 2000)
    }
  }, [showElementOpacity])

  return (
    <>
      {trail.map((props, index) =>
        <animated.div
          key={imageUri[index].key}
          style={props}
          className='imgContainer'>
          <img
            src={imageUri[index].src} alt='js' />
        </animated.div>
      )}
    </>
  )
}