import React from 'react'
import { useSelector } from 'react-redux'
import { animated } from 'react-spring'
import useIntroBanner, { viewingOnMobileDimensions } from '../../hooks/useIntroBanner'
import { rootReducerT } from '../../store'

const Intro = () => {
  const intro = useSelector((state: rootReducerT) => state.protfolioTextContent.intro)

  const { propsBannerAnim, propsParagraphAnim } = useIntroBanner()

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