import React, { useState } from 'react'
import Project from './Project'

function SwipableComp({desktopImages, mobileImgs}) {
  const [desktopImageIndex, setDesktopImageIndex] = useState(0)
  const [mobileImageIndex, setMobileImageIndex] = useState(0)

  const onClickArrow = ({ leftDirection, isMobile }) => {
    if (canImageBeSwitchedCertainDirection({
      leftDirection,
      imageIndexType: isMobile ? mobileImageIndex : desktopImageIndex,
      compareImgs: isMobile ? mobileImgs : desktopImages
    })) {
      if (isMobile) {
        if (leftDirection) setMobileImageIndex(prev => prev - 1)
        else setMobileImageIndex(prev => prev + 1)
      } else if (!isMobile) {
        if (leftDirection) setDesktopImageIndex(prev => prev - 1)
        else setDesktopImageIndex(prev => prev + 1)
      }
    }
  }
  const canImageBeSwitchedCertainDirection = ({ leftDirection, imageIndexType, compareImgs }) => {
    if (leftDirection && imageIndexType === 0) return false
    if (!leftDirection && imageIndexType === compareImgs.length - 1) return false
    return true
  }

  return (
    <div className='project-content'>{/* //* just this div with 2 Project comps should be it's own comp so to hold indesis seperately which will force us to get rid of the elaberate functions in hook comp and use disable/enable instead. */}
      <Project
        disableRightArrow={desktopImageIndex === desktopImages.length - 1}
        disableLeftArrow={desktopImageIndex === 0}
        onClickArrow={onClickArrow}
        isMobile={false}
        image={desktopImages[desktopImageIndex].image}
      />
      <Project
        disableRightArrow={mobileImageIndex === mobileImgs.length - 1} /* //* changed conditionally depending on what device */
        disableLeftArrow={mobileImageIndex === 0}
        onClickArrow={onClickArrow}
        isMobile={true}
        image={mobileImgs[mobileImageIndex].image}
      />
    </div>
  )
}

export default SwipableComp
