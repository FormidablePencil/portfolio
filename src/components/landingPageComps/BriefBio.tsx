import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { customAnimConfig } from '../../staticData';
import { rootReducerT } from '../../store';
import { useSelector } from 'react-redux';
import { viewingOnMobileDimensions } from '../../hooks/useIntroBanner';

const { innerWidth, innerHeight } = window

function BriefBio() {
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'bio', false, '0px')
  const bio = useSelector((state: rootReducerT) => state.protfolioTextContent.bio)


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
    )}
     className='brief-bio-section'>
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
