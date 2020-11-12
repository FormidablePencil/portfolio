import React from 'react'
import { useSelector } from 'react-redux'
import generateProjectDataToRender from '../../../functions/generateProjectDataToRender'
import { rootReducerT } from '../../../store'
import ImageInDevice from '../../image-in-device'
import SwipeableViews from 'react-swipeable-views';
import { projectsToShowcase } from '../../../staticData';
import { projectDataT } from '../../../reducers/projectDataReducer'


function MapProjects({ swipableViewsIndex, viewingMobile }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)

  const generatedProjectDataToRender = generateProjectDataToRender({
    projectDataCollection, projectsToShowcase
  })

  const filterImagesForSpecifiedDevice = (project: projectDataT, device) =>
    project.images.filter(image => image.device === device)

  return (
    <SwipeableViews index={swipableViewsIndex} className='swipeable-view'>
      {generatedProjectDataToRender.map(project => {
        return (
          <div className='project-images-container'>
            <div className={`
            projectInFrame-container
            desktop-image-in-device
            ${!viewingMobile
                ? 'desktop-image-in-device-display-none'
                : 'desktop-image-in-device-display-true'
              }`}>
              <ImageInDevice
                images={filterImagesForSpecifiedDevice(project, 'web')}
                deviceType={'web'}
                swipable={true}
                autoPlay={true}
                indexOfImageIfNotSwipable={0}
              />
            </div>
            <div className={`
            projectInFrame-container
            mobile-image-in-device
            ${viewingMobile
                ? 'mobile-image-in-device-display-none'
                : 'mobile-image-in-device-display-true'
              }`}>
              <ImageInDevice
                images={filterImagesForSpecifiedDevice(project, 'mobile')}
                deviceType={'mobile'}
                swipable={true}
                autoPlay={true}
                indexOfImageIfNotSwipable={0}
              />
            </div>
          </div>
        )
      })}
    </SwipeableViews>
  )
}

export default MapProjects
