import React, { useRef } from 'react'
import profile from '../../assets/20190404_080008.jpg';
import useOnScreen from '../../hooks/useOnScreen';
import { useSpring, config, animated } from 'react-spring';

function BriefBio() {
  const sectionRef = useRef(null)
  const sectionAppearedInView: boolean = useOnScreen(sectionRef)
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: sectionAppearedInView ? 1 : 0 },
    config: config.default,
    delay: 800
  })

  return (
    <animated.div ref={sectionRef} style={animOpacity} className='brief-bio-section'>
      <div>
        <p className='name'>Dennis Aleksandrov</p>
        {/* <div className="paragraphBox"> */}
        <p className='paragraph'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut eaque nisi porro velit, similique dicta nobis deserunt atque provident saepe, consequuntur soluta cum. Veritatis assumenda ullam possimus quidem harum?
          </p>
        {/* </div> */}
      </div>
      <div className='imgFrame'>
        <img className="img" alt='profile' src={profile} />
      </div>
    </animated.div>
  )
}

export default BriefBio
