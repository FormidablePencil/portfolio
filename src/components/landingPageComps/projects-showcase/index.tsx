import React, { useState, useRef } from 'react'
import { Button } from '@material-ui/core';
import { customAnimConfig } from '../../../staticData';
import useOnScreen from '../../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import { viewingOnMobileDimensions } from '../Intro';
import useDeviceTypeViewing from '../../../hooks/useDeviceTypeViewing';
import SwitchDeviceTypeBtns from './SwitchDeviceTypeBtns';
import MapProjects from './map-projects';
import SwitchProjectBtns from './SwitchProjectBtns';

const { innerWidth } = window

function ProjectsShowcase() {
  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)
  const [imagesForWhatDevices, setImagesForWhatDevices] = useState({})
  // 'web' | 'mobile' | 'both' | ''
  /* //~ refractor this */
  const { changeDeviceType, isMobile } = useDeviceTypeViewing({ swipableViewsIndex, imagesForWhatDevices })
  const sectionRef = useRef(null)
  const sliderRef: any = useRef(null)

  const { isIntersecting } = useOnScreen(sectionRef, 'projShowcase')
  const animOpacity = useSpring({
    from: { opacity: 0, },
    to: { opacity: isIntersecting || innerWidth < 500 ? 1 : 0 },
    config: customAnimConfig,
  })

  const onClickNavProjects = ({ leftDirection }) => {
    leftDirection
      ? sliderRef.current.slickPrev()
      : sliderRef.current.slickNext()
  }


  const LearnMoreLink = () =>
    <div className='learnMoreLink'>
      <a href='sdsd'>Checkout more projects and details</a>
    </div>


  return (
    <div style={viewingOnMobileDimensions({ height: '140vh', },)} className='project-section'>
      <animated.div ref={sectionRef} style={animOpacity} className="banner">
        <SwitchDeviceTypeBtns
          whatIconsToDisplay={imagesForWhatDevices[swipableViewsIndex]}
          onClickHandler={changeDeviceType}
          isMobile={isMobile} />

        <MapProjects
          setImagesForWhatDevices={setImagesForWhatDevices}
          setSwipableViewsIndex={setSwipableViewsIndex}
          sliderRef={sliderRef}
          viewingMobile={isMobile}
        />

        <SwitchProjectBtns
          onClickNavProjects={onClickNavProjects} />
        <LearnMoreLink />
      </animated.div>
    </div>
  )
}

export default ProjectsShowcase
