import React, { memo, useRef } from 'react'
import { animated, useTrail, useSpring } from "react-spring";
import { customAnimConfig } from '../../staticData';
import useOnScreen from '../../hooks/useOnScreen';
import { useSelector } from 'react-redux';
import { rootReducerT } from '../../store';
import { techDataT } from '../../reducers/techDataReducer';
import generateTechDataForCols from '../../functions/generateTechDataForCols';
import { viewingOnMobileDimensions } from '../../hooks/useIntroBanner';

const { innerWidth } = window

function TechnologiesShowcase() {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const protfolioTextContent = useSelector((state: rootReducerT) => state.protfolioTextContent)
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'techShowcase', false, '-200px')
  const generatedTechDataForCols = generateTechDataForCols(techDataCollection, protfolioTextContent.techToShowcase)
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isIntersecting || viewingOnMobileDimensions().height ? 1 : 0 },
    config: customAnimConfig,
  })

  return (
    <>
      <animated.div
        style={viewingOnMobileDimensions()}
        className='tech-section'>
        <div className='techShowcase'>
          <div className='leftCol'>
            <TrailTech isIntersecting={isIntersecting} delay={500} generatedTechDataForCols={generatedTechDataForCols?.[0] ?? []} />
          </div>
          <div className='leftCol'>
            <TrailTech isIntersecting={isIntersecting} delay={700} generatedTechDataForCols={generatedTechDataForCols?.[1] ?? []} />
          </div>
          <animated.div className='midTech' style={opacityProps}>
            <a href='https://dennisaleksandrov.com/technologies' className='remove-underline'>
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
            </a>
          </animated.div>
          <div className='rightCol'>
            <TrailTech isIntersecting={isIntersecting} delay={700} generatedTechDataForCols={generatedTechDataForCols?.[2] ?? []} />
          </div>
          <div className='rightCol'>
            <TrailTech isIntersecting={isIntersecting} delay={500} generatedTechDataForCols={generatedTechDataForCols?.[3] ?? []} />
          </div>
        </div>
      </animated.div>
    </>
  )
}

const TrailTech = ({
  generatedTechDataForCols,
  delay,
  isIntersecting
}: {
  generatedTechDataForCols: techDataT[],
  delay,
  isIntersecting
}) => {

  const trail = useTrail(generatedTechDataForCols.length, isIntersecting || innerWidth < 500 ?
    { opacity: 1, config: customAnimConfig, delay } : { opacity: 0 }) // trailing opacity anim is a little taxing

  if (generatedTechDataForCols.length === 0)
    return null
  else return (
    <>
      {trail.map((props, index) =>
        <a href='https://dennisaleksandrov.com/technologies' className='remove-underline'>
          <animated.div
            style={props}
            className='imgContainer'>
            <img src={generatedTechDataForCols[index].image} alt='js' />
          </animated.div>
        </a>
      )}
    </>
  )
}

export default memo(TechnologiesShowcase)

