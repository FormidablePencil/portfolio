import React, { useRef } from 'react'
import { animated, useTrail, useSpring } from "react-spring";
import { imageUri2, imageUri, customAnimConfig, slowAnimConfig } from '../../staticData';
import useOnScreen from '../../hooks/useOnScreen';

const TrailTech = ({ imageUri, delay, leftDirection, sectionAppearedInView }) => {
  const trail = useTrail(imageUri.length, sectionAppearedInView ?
    { opacity: 1, config: customAnimConfig, delay } : { opacity: 0 }) // trailing opacity anim is a little taxing

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

function TechnologiesShowcase() {
  const sectionRef = useRef(null)
  const sectionAppearedInView: boolean = useOnScreen(sectionRef)
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: sectionAppearedInView ? 1 : 0 },
    config: slowAnimConfig,
    delay: 500
  })

  return (
    <>
      <div className='tech-section'>
        <div className='techShowcase'>
          <div className='leftCol'>
            <TrailTech sectionAppearedInView={sectionAppearedInView} leftDirection={false} delay={1000} imageUri={imageUri} />
          </div>
          <div className='leftCol'>
            <TrailTech sectionAppearedInView={sectionAppearedInView} leftDirection={false} delay={1500} imageUri={imageUri2} />
          </div>
          <animated.div className='midTech' style={opacityProps}>
            <div className="textContainer">
              <div className='mainTechTextContainer'>
                <p className='firstLeter'>M</p><p>ongo</p>
              </div>
              <div ref={sectionRef} className='mainTechTextContainer'>
                <p className='firstLeter'>E</p><p>xpress</p>
              </div>
              <div className='mainTechTextContainer'>
                <p className='firstLeter'>R</p><p>eact</p>
              </div>
              <div className='mainTechTextContainer'>
                <p className='firstLeter'>N</p><p>ode</p>
              </div>
            </div>
          </animated.div>
          <div className='rightCol'>
            <TrailTech sectionAppearedInView={sectionAppearedInView} leftDirection={true} delay={1500} imageUri={imageUri2} />
          </div>
          <div className='rightCol'>
            <TrailTech sectionAppearedInView={sectionAppearedInView} leftDirection={true} delay={1000} imageUri={imageUri} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologiesShowcase








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

// import { useSelector } from 'react-redux';
// import { rootReducerT } from '../store';
