import React, { useRef } from 'react'
import profile from '../../assets/20190404_080008.jpg';
import useOnScreen from '../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { customAnimConfig } from '../../staticData';

function BriefBio() {
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'bio', false, '-200px')
  
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting ? 1 : 0 },
    config: customAnimConfig,
    delay: isIntersecting ? 800 : 0
  })

  return (
    <animated.div style={animOpacity} className='brief-bio-section'>
      <div className='imgFrame'>
        <img className="img" alt='profile' src={profile} />
        <div className="filterTint" />
      </div>
      <div className='textContainer'>
        <p className='name'>Dennis Aleksandrov</p>
        {/* <div className="paragraphBox"> */}
        <p ref={sectionRef} className='paragraph'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          Lorem ipsum dolor sit, amet consectetur adium dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          You can learn more about me in "my-bubble dream theory .com".
          </p>
        {/* </div> */}
      </div>
    </animated.div>
  )
}

export default BriefBio
