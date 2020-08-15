import React from 'react'
import { animated, useSpring, config } from 'react-spring'
import { customAnimConfig } from '../../staticData'

const { innerWidth } = window
export const viewingOnMobileDimensions = () => {
  const { innerWidth, innerHeight } = window
  return innerWidth < 500 ? { height: innerHeight } : {}
}

const Intro = () => {
  const propsBannerAnim = useSpring({
    from: { opacity: innerWidth < 500 ? 1 : 0, },
    to: { opacity: 1, },
    config: config.default,
    delay: 1000
  })
  const propsParagraphAnim = useSpring({
    from: innerWidth < 500 ? { opacity: 1, transform: 'translateY(0px)' } : { opacity: 0, transform: 'translateY(-60px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: customAnimConfig,
    delay: 1400
  })

  return (
    <div style={viewingOnMobileDimensions()} className='introSection'>
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
    </div >
  )
}

export default Intro