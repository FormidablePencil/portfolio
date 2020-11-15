import React, { memo, Suspense, useRef } from 'react'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../../store'
import ImageInDevice from '../../../image-in-device'
import { projectsToShowcase } from '../../../../staticData';
import {
  filterImagesForSpecifiedDevice,
  generateProjectDataToRender,
  updateImagesAvaiableForWhatDevices,
  whatTypeOfImagesAvailableRefT
} from './functions'
const Slider = React.lazy(() => import("react-slick"))
const MemoizedSlider = memo(Slider)

function MapProjects({ setImagesForWhatDevices, setSwipableViewsIndex, viewingMobile, sliderRef }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const whatTypeOfImagesAvailableRef: whatTypeOfImagesAvailableRefT = useRef([])

  const generatedProjectDataToRender = generateProjectDataToRender({
    projectDataCollection, projectsToShowcase
  })

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'swipeable-view',
    draggable: false,
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
              <div className='project-images-container' key={project.title}>
                {desktopImages[0] &&
                  <ImageInDeviceDesktop viewingMobile={viewingMobile} project={project} />
                }
                {mobileImages[0] &&
                  <ImageInDeviceMobile viewingMobile={viewingMobile} project={project} />
                }
              </div>
            </div>
          )
        })}
      </MemoizedSlider>
    </Suspense >
  )
}

const ImageInDeviceDesktop = ({ project, viewingMobile }) =>
  <div className={`
      projectInFrame-container
      desktop-image-in-device
      ${!viewingMobile
      ? 'desktop-image-in-device-display-true'
      : 'desktop-image-in-device-display-none'
    }`}>
    <ImageInDevice
      images={filterImagesForSpecifiedDevice(project, 'web')}
      deviceType={'web'}
      swipable={true}
      autoPlay={true}
      indexOfImageIfNotSwipable={0}
    />
  </div>

const ImageInDeviceMobile = ({ project, viewingMobile }) =>
  <div className={`
      projectInFrame-container
      mobile-image-in-device
      ${viewingMobile
      ? 'mobile-image-in-device-display-true'
      : 'mobile-image-in-device-display-none'
    }`}>
    <ImageInDevice
      images={filterImagesForSpecifiedDevice(project, 'mobile')}
      deviceType={'mobile'}
      swipable={true}
      autoPlay={true}
      indexOfImageIfNotSwipable={0}
    />
  </div>


export default MapProjects
