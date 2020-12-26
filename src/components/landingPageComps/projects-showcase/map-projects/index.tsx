import React, { memo, Suspense, useRef } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../../store'
import ImageInDevice from '../../../imageInDevice/ImageInDevice'
import { projectsToShowcase } from '../../../../staticData';
import {
  filterImagesForSpecifiedDevice,
  generateProjectDataToRender,
  updateImagesAvaiableForWhatDevices,
  whatTypeOfImagesAvailableRefT
} from './functions'
import TransitionDevices from '../../../imageInDevice/moreFeatures/transitionDevices';
const Slider = React.lazy(() => import("react-slick"))
const MemoizedSlider = memo(Slider)

function MapProjects({ setImagesForWhatDevices, setSwipableViewsIndex, viewingMobile, sliderRef }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const whatTypeOfImagesAvailableRef: whatTypeOfImagesAvailableRefT = useRef([])

  const generatedProjectDataToRender = generateProjectDataToRender({
    projectDataCollection, projectsToShowcase
  })

  const settings = {
    effect: "blur",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'swipeable-view',
    draggable: false,
    swipe: false,
    ref: (ref) => sliderRef.current = ref,
    afterChange: (index) => setSwipableViewsIndex(index)
  }

  // swipableViewsIndex into slider, remove the selecting
  return (
    <Suspense fallback={<div> kayy</div>}>
      <MemoizedSlider {...settings}>
        {generatedProjectDataToRender.map((project, index) => {
          let desktopImages = filterImagesForSpecifiedDevice(project, 'web')
          let mobileImages = filterImagesForSpecifiedDevice(project, 'mobile')
          updateImagesAvaiableForWhatDevices({
            setImagesForWhatDevices,
            whatTypeOfImagesAvailableRef,
            desktopImages,
            mobileImages,
            index,
            isLastImage: generatedProjectDataToRender.length - 1 === index ? true : false
          })
          return (
            <div>
              <div className="title-container"><h1>{project.title}</h1></div>
              <div className='project-images-container' key={project.title}>
                {desktopImages[0] &&
                  <TransitionDevices deviceType='desktop' show={!viewingMobile}>
                    <ImageInDevice
                      images={desktopImages}
                      deviceType={'web'}
                      swipable={true}
                      autoPlay={true}
                      indexOfImageIfNotSwipable={0}
                    />
                  </TransitionDevices>
                }
                {mobileImages[0] &&
                  <TransitionDevices deviceType='mobile' show={viewingMobile}>
                    <ImageInDevice
                      images={mobileImages}
                      deviceType={'mobile'}
                      swipable={true}
                      autoPlay={true}
                      indexOfImageIfNotSwipable={0}
                    />
                  </TransitionDevices>
                }
              </div>
            </div>
          )
        })}
      </MemoizedSlider>
    </Suspense >
  )
}



export default MapProjects
