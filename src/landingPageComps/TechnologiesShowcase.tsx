import React from 'react'
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
import { animated } from "react-spring";
import { Trail } from 'react-spring/renderprops';

// import { useSelector } from 'react-redux';
// import { rootReducerT } from '../store';

//Todo ~ bg must be blured
//Todo ~ upon hovering the MERN section have the tech show up behind the text with low opacity

function TechnologiesShowcase({showElement}) {

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
  const configTrailInnerCol = { tension: 80, friction: 14, }
  const configTrailOuterCol = { tension: 80, friction: 14, }

  return (
    <>
      <div className='row aligning techSection'>
        <div className='row1Parallax'>
          <Trail
            items={imageUri}
            keys={item => item.key}
            delay={500}
            config={configTrailOuterCol}
            to={showElement ? { transform: 'translateX(-200px)' } : { transform: 'translateX(0px)' }}
          >
            {item => props =>
              <animated.div className='imgContainer' style={props}>
                <img src={item.src} alt='js' />
              </animated.div>
            }
          </Trail>
        </div>
        <div className='row2Parallax furthestToSideCol'>
          <Trail
            config={configTrailInnerCol}
            items={imageUri2}
            keys={item => item.key}
            to={showElement ? { transform: 'translateX(-500px)' } : { transform: 'translateX(0px)' }}
          >
            {item => props =>
              <animated.div className='imgContainer' style={props}>
                <img src={item.src} alt='js' />
              </animated.div>
            }
          </Trail>
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
        <div className='row1Parallax furthestToSideCol'>
          <Trail
            items={imageUri2}
            keys={item => item.key}
            to={showElement ? { transform: 'translateX(500px)' } : { transform: 'translateX(0px)' }}
            config={configTrailInnerCol}
          >
            {item => props =>
              <animated.div className='imgContainer' style={props}>
                <img src={item.src} alt='js' />
              </animated.div>
            }
          </Trail>
        </div>
        <div className='row2Parallax'>
          <Trail
            delay={500}
            config={configTrailOuterCol}
            items={imageUri}
            keys={item => item.key}
            to={showElement ? { transform: 'translateX(200px)' } : { transform: 'translateX(0px)' }}
          >
            {item => props =>
              <div className='imgContainer' style={props}>
                <img src={item.src} alt='js' />
              </div>
            }
          </Trail>
        </div>
      </div>
    </>
  )
}


export default TechnologiesShowcase
