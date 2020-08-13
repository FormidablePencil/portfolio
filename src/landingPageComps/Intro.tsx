import React, { useRef } from 'react'
import { animated, useSpring, useChain, config } from 'react-spring'
import { customAnimConfig } from '../staticData'
import useOnScreen from '../hooks/useOnScreen'

const Intro = () => {
  const sectionRef = useRef(null)
  const sectionAppearedInView: boolean = useOnScreen(sectionRef, '0px')
  const propsBannerAnimRef = useRef(null)
  const propsParagraphAnimRef = useRef(null)
  const propsBannerAnim = useSpring({
    ref: propsBannerAnimRef,
    from: { opacity: 0, },
    to: { opacity: 1 },
    config: config.default,
    delay: 1000
  })
  const propsParagraphAnim = useSpring({
    ref: propsParagraphAnimRef,
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: customAnimConfig,
    delay: 1400
  })

  useChain(sectionAppearedInView ? [propsBannerAnimRef, propsParagraphAnimRef] : [propsBannerAnimRef, propsParagraphAnimRef])

  return (
    <div ref={sectionRef} className='introSection'>
      <animated.div className="banner" style={propsBannerAnim}>
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
    </div>
  )
}

export default Intro