import React, { useState, useRef } from 'react'
import { Button } from '@material-ui/core';
import { staticProjects, customAnimConfig } from '../../staticData';
import SwipeableViews from 'react-swipeable-views';
import Project from './Project';
import useOnScreen from '../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { viewingOnMobileDimensions } from './Intro';
import useDeviceTypeViewing from '../../hooks/useDeviceTypeViewing';
import SwitchDeviceTypeBtns from './reusableComps/SwitchDeviceTypeBtns';

const { innerWidth } = window

function ProjectsShowcase() {
  // const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'projShowcase')
  const { deviceTypeMobileTranstionAnim, deviceTypeDesktopTranstionAnim, changeDeviceType, isMobile
  } = useDeviceTypeViewing()

  const onClickHandler = () => changeDeviceType()

  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
  })

  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)

  const onClickNavProjects = ({ leftDirection }) => {
    if (leftDirection) setSwipableViewsIndex(prev => prev - 1)
    else setSwipableViewsIndex(prev => prev + 1)
  }

  //* image should be restrict to a certain size, it must be perfect to suffice.
  return (
    <div style={viewingOnMobileDimensions(
      { height: '140vh', },
    )} className='project-section'>
      {/* <div className="swipableViewContainer"> */}
      <animated.div ref={sectionRef} style={animOpacity} className="banner">
        <SwitchDeviceTypeBtns onClickHandler={onClickHandler} isMobile={isMobile} />
        <animated.div className="navBtnsContainer">
          <Button
            disabled={swipableViewsIndex === 0}
            style={swipableViewsIndex === 0 ?
              { borderColor: '#6CAE6B', color: '#6CAE6B' } : { backgroundColor: '#6CAE6B', color: 'white' }}
            onClick={() => onClickNavProjects({ leftDirection: true })}
            variant='outlined' color="primary" className='navigateBtnLeft'>{'prev'}</Button>
          <Button
            disabled={swipableViewsIndex === staticProjects.length - 1}
            style={swipableViewsIndex === staticProjects.length - 1 ?
              { borderColor: '#6CAE6B', color: '#6CAE6B' } : { backgroundColor: '#6CAE6B', color: 'white' }}
            // { color: 'rgba(129,129,129,.3)', borderColor: 'rgba(129,129,129,.3)' } : {}}
            onClick={() => onClickNavProjects({ leftDirection: false })}
            variant='outlined' color="primary" className='navigateBtnRight'>{'next'}</Button>
        </animated.div>
        <animated.div className='swipableViewContainerAnim'>
          <SwipeableViews index={swipableViewsIndex} style={{ width: '100%' }}>
            {staticProjects.map((proj, index) =>
              <div className='project-content' style={{ width: '100vw' }}>{/* //* just this div with 2 Project comps should be it's own comp so to hold indesis seperately which will force us to get rid of the elaberate functions in hook comp and use disable/enable instead. */}
                <animated.div style={viewingOnMobileDimensions().height ? { position: 'absolute', ...deviceTypeDesktopTranstionAnim } : {}}>
                  <Project images={proj.desktopImages} isMobile={false} />
                </animated.div>
                <animated.div style={viewingOnMobileDimensions().height ? { position: 'absolute', ...deviceTypeMobileTranstionAnim } : {}}>
                  <Project images={proj.mobileImgs} isMobile={true} />
                </animated.div>
              </div>
            )}
          </SwipeableViews>
          <Button variant='contained' style={{ backgroundColor: '#6CAE6B' }} color="primary" className='btnGoToDetailedPg'>{'details -->'}</Button>
        </animated.div>
      </animated.div>
    </div>
  )
}

export default ProjectsShowcase
