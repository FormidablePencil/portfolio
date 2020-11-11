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
import ImageInDevice from '../image-in-device';
import { rootReducerT } from '../../store';
import { useSelector } from 'react-redux';
import generateProjectDataToRender from '../../functions/generateProjectDataToRender';

const { innerWidth } = window

function ProjectsShowcase() {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'projShowcase')
  const { deviceTypeMobileTranstionAnim, deviceTypeDesktopTranstionAnim, changeDeviceType, isMobile
  } = useDeviceTypeViewing()
  
  // const generatedProjectDataToRender = generateProjectDataToRender({
  //   projectDataCollection,
  //   projectToShowcase: projectDataCollection.projectToShowcase
  // })

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
  console.log(swipableViewsIndex, 'swipableViewsIndex');

  //* image should be restrict to a certain size, it must be perfect to suffice.
  return (
    <div style={viewingOnMobileDimensions({ height: '140vh', },)} className='project-section'>
      {/* <div className="swipableViewContainer"> */}
      <animated.div ref={sectionRef} style={animOpacity} className="banner">
        <SwitchDeviceTypeBtns onClickHandler={onClickHandler} isMobile={isMobile} />
        <animated.div className="navBtnsContainer">

          <Button
            disabled={swipableViewsIndex === 0}
            style={swipableViewsIndex === 0 ?
              { borderColor: 'rgba(161,42,255,.4)', color: '#BB7FFF' } : { backgroundColor: 'rgba(161,42,255,.4)', color: 'white' }}
            onClick={() => onClickNavProjects({ leftDirection: true })}
            variant='outlined' color="primary" className='navigateBtnLeft'>{'prev'}</Button>
          <Button
            disabled={swipableViewsIndex === staticProjects.length - 1}
            style={swipableViewsIndex === staticProjects.length - 1 ?
              { borderColor: 'rgba(161,42,255,.4)', color: '#BB7FFF' } : { backgroundColor: 'rgba(161,42,255,.4)', color: 'white' }}
            // { color: 'rgba(129,129,129,.3)', borderColor: 'rgba(129,129,129,.3)' } : {}}
            onClick={() => onClickNavProjects({ leftDirection: false })}
            variant='outlined' color="primary" className='navigateBtnRight'>{'next'}</Button>
        </animated.div>
        {/* <SwipeableViews index={swipableViewsIndex} style={{ width: '100%', height: '30em' }}> */}
        <animated.div className='swipableViewContainerAnim'>
          <div className={`
            projectInFrame-container
            desktop-image-in-device
            ${!isMobile
              ? 'desktop-image-in-device-display-none'
              : 'desktop-image-in-device-display-true'
            }`}>
            <ImageInDevice
              projectData={projectDataCollection[0]}
              swipable={true}
              autoPlay={true}
              indexOfImageIfNotSwipable={0}
            />
          </div>
          <div className={`
            projectInFrame-container
            mobile-image-in-device
            ${isMobile
              ? 'mobile-image-in-device-display-none'
              : 'mobile-image-in-device-display-true'
            }`}>
            <ImageInDevice
              projectData={projectDataCollection[2]}
              swipable={true}
              autoPlay={true}
              indexOfImageIfNotSwipable={0}
            />
          </div>
          {/* <SwipeableViews index={swipableViewsIndex} style={{ width: '100%' }}>
            {staticProjects.map((proj, index) =>
              <div className='project-content' style={{ width: '100vw' }}>
              <animated.div style={viewingOnMobileDimensions().height ? { position: 'absolute', ...deviceTypeDesktopTranstionAnim } : {}}>
              <Project images={proj.desktopImages} isMobile={false} />
              </animated.div>
              <animated.div style={viewingOnMobileDimensions().height ? { position: 'absolute', ...deviceTypeMobileTranstionAnim } : {}}>
              <Project images={proj.mobileImgs} isMobile={true} />
              </animated.div>
              </div>
              )}
            </SwipeableViews> */}
          <Button variant='contained' style={{ backgroundColor: 'rgba(161,42,255,.4)' }} color="primary" className='btnGoToDetailedPg'>{'details -->'}</Button>
        </animated.div>
        {/* </SwipeableViews> */}
      </animated.div>
    </div>
  )
}

export default ProjectsShowcase
