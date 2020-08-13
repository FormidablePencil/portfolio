import { useState } from 'react'
import { staticProjects } from '../staticData'

function useLandingProjSectOnClickHandling() {
  const [desktopImageIndex, setDesktopImageIndex] = useState(0)
  const [mobileImageIndex, setMobileImageIndex] = useState(0)
  const [swipableViewsIndex, setSwipableViewsIndex] = useState(0)

  const { desktopImages, mobileImgs } = staticProjects[0] //! should be dynamic and not just [0]

  const onClickNavProjects = ({ leftDirection }) => { //~ not working
    const { isIncrement } = conditionallyChangeImageIndex(leftDirection, swipableViewsIndex, staticProjects)
    if (isIncrement === 'do nothing') return
    else if (isIncrement) setSwipableViewsIndex(prev => prev + 1)
    else setSwipableViewsIndex(prev => prev - 1)
  }

  const onClickArrow = ({ isMobile, leftDirection }) => {
    if (isMobile) {
      const { isIncrement } = conditionallyChangeImageIndex(leftDirection, mobileImageIndex, mobileImgs)
      if (isIncrement === 'do nothing') return
      else if (isIncrement) setMobileImageIndex(prev => prev + 1)
      else setMobileImageIndex(prev => prev - 1)
    } else if (!isMobile) {
      const { isIncrement } = conditionallyChangeImageIndex(leftDirection, desktopImageIndex, desktopImages)
      if (isIncrement === 'do nothing') return
      if (isIncrement) setDesktopImageIndex(prev => prev + 1)
      else setDesktopImageIndex(prev => prev - 1)
    }
  }
  const conditionallyChangeImageIndex = (leftDirection, indexState, compare): { isIncrement: boolean | 'do nothing' } => {
    if (leftDirection && indexState > 0 && indexState <= compare.length - 1) {
      return { isIncrement: false }
    } else if (!leftDirection && indexState >= 0 && indexState < compare.length - 1) {
      return { isIncrement: true }
    }
    return { isIncrement: 'do nothing' }
  }

  return {
    onClickArrow, onClickNavProjects,
    swipableViewsIndex, desktopImageIndex, mobileImageIndex,
    mobileImgs, desktopImages,
  }
}

export default useLandingProjSectOnClickHandling
