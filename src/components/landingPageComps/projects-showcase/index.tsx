import React, { useState, useRef } from 'react'
import { customAnimConfig } from '../../../staticData';
import useOnScreen from '../../../hooks/useOnScreen';
import { useSpring, animated } from 'react-spring';
import useDeviceTypeViewing from '../../../hooks/useDeviceTypeViewing';
import SwitchDeviceTypeBtns from '../../imageInDevice/moreFeatures/switchDeviceTypeBtns';
import MapProjects from './map-projects';
import SwitchProjectBtns from './SwitchProjectBtns';
import { viewingOnMobileDimensions } from '../../../hooks/useIntroBanner';

const { innerWidth } = window

function ProjectsShowcase() {
  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)
  // 'web' | 'mobile' | 'both' | ''
  const [imagesForWhatDevices, setImagesForWhatDevices] = useState({})
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

export const LearnMoreLink = ({ isInContact }: { isInContact?}) =>
  <div className={`learnMoreLink ${isInContact ? 'learnMoreLink-contact' : ''}`}>
    <a href='http://mybubble.dennisaleksandrov.com/projects'>Check out more of my work</a>
  </div>


export default ProjectsShowcase
