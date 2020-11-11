import React, { useState, useRef } from 'react'
import { Button } from '@material-ui/core';
import { projectsToShowcase, customAnimConfig } from '../../../staticData';
import useOnScreen from '../../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { viewingOnMobileDimensions } from '../Intro';
import useDeviceTypeViewing from '../../../hooks/useDeviceTypeViewing';
import SwitchDeviceTypeBtns from './SwitchDeviceTypeBtns';
import MapProjects from './MapProjects';
import SwitchProjectBtns from './SwitchProjectBtns';

const { innerWidth } = window

function ProjectsShowcase() {
  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)
  const { deviceTypeMobileTranstionAnim, deviceTypeDesktopTranstionAnim, changeDeviceType, isMobile } = useDeviceTypeViewing()
  const sectionRef = useRef(null)
  const { isIntersecting } = useOnScreen(sectionRef, 'projShowcase')
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
  })

  const onClickNavProjects = ({ leftDirection }) =>
    leftDirection
      ? setSwipableViewsIndex(prev => prev - 1)
      : setSwipableViewsIndex(prev => prev + 1)

  const onClickHandlerTypeBtns = () => changeDeviceType()



  const BtnsAtTop = () => <>
    <SwitchDeviceTypeBtns onClickHandler={onClickHandlerTypeBtns} isMobile={isMobile} />
    <SwitchProjectBtns
      swipableViewsIndex={swipableViewsIndex}
      onClickNavProjects={onClickNavProjects}
      lengthOfProjectsRendered={projectsToShowcase.length} />
  </>

  const LearnMoreBtn = () =>
    <Button
      variant='contained'
      style={{ backgroundColor: 'rgba(161,42,255,.4)' }}
      color="primary"
      className='btnGoToDetailedPg'>
      {'details -->'}
    </Button>


  return (
    <div style={viewingOnMobileDimensions({ height: '140vh', },)} className='project-section'>
      <animated.div ref={sectionRef} style={animOpacity} className="banner">
        <BtnsAtTop />

        <MapProjects viewingMobile={isMobile} swipableViewsIndex={swipableViewsIndex} />

        <LearnMoreBtn />
      </animated.div>
    </div>
  )
}

export default ProjectsShowcase
