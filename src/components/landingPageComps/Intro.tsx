import React, { useRef } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { customAnimConfig } from '../../staticData'
import useOnScreen from '../../hooks/useOnScreen'

const Intro = ({ toggleIntroPresent }) => {
  const sectionRef = useRef(null)
  useOnScreen(sectionRef, '', toggleIntroPresent) //is used to track toggle techShowcase opacity 
  const propsBannerAnim = useSpring({
    from: { opacity: 0, },
    to: { opacity: 1, },
    config: config.default,
    delay: 1000
  })
  const propsParagraphAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: customAnimConfig,
    delay: 1400
  })

  return (
    <div className='introSection'>
      <animated.div ref={sectionRef} className="banner" style={propsBannerAnim}>
        <animated.div className="textContainer" style={propsParagraphAnim}>
          <p>
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
        </animated.div>
      </animated.div>
    </div >
  )
}

export default Intro