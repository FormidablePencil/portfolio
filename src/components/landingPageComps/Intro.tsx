import React from 'react'
import { useSelector } from 'react-redux'
import { animated, useSpring, config } from 'react-spring'
import { customAnimConfig } from '../../staticData'
import { rootReducerT } from '../../store'

const { innerWidth } = window
export const viewingOnMobileDimensions = (stylesIfNotMobile?: {}, overrideMobileStyles?: any): any => {
  const { innerWidth, innerHeight } = window
  return innerWidth < 800 ? overrideMobileStyles ?? { height: innerHeight } : stylesIfNotMobile ?? {}
}

const Intro = () => {
  const { intro } = useSelector((state: rootReducerT) => state.protfolioTextContent)
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
          {intro &&
            <div>
              <p>
                {intro[0]}
              </p>
              <p>
                {intro[1]}
              </p>
              <p>
                {intro[2]}
              </p>
            </div>
          }
        </animated.div>
      </animated.div>
    </div >
  )
}

export default Intro