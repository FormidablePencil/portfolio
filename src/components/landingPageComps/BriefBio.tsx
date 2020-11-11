import React, { useRef } from 'react'
import profile from '../../assets/20190404_080008.jpg';
import useOnScreen from '../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { customAnimConfig } from '../../staticData';
import { viewingOnMobileDimensions } from './Intro';
import { rootReducerT } from '../../store';
import { useSelector } from 'react-redux';

const { innerWidth, innerHeight } = window

function BriefBio() {
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'bio', false, '0px')
  const { bio } = useSelector((state: rootReducerT) => state.protfolioTextContent)


  const animOpacity = useSpring({
    from: { opacity: innerWidth < 500 ? 1 : 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
    delay: isIntersecting ? 0 : 0
  })

  return (
    <animated.div style={viewingOnMobileDimensions(
      { ...animOpacity },
      { height: innerHeight * 1.5, ...animOpacity }
    )} className='brief-bio-section'>
      <div className='imgFrame'>
        <img className="img" alt='profile' src={profile} />
        <div className="filterTint" />
      </div>
      <div ref={sectionRef} className='textContainer'>
        <p className='name'>Dennis Aleksandrov</p>
        <p className='paragraph'>
          {bio}
        </p>
      </div>
    </animated.div>
  )
}

export default BriefBio
