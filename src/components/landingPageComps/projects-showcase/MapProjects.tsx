import React from 'react'
import { useSelector } from 'react-redux'
import generateProjectDataToRender from '../../../functions/generateProjectDataToRender'
import { rootReducerT } from '../../../store'
import ImageInDevice from '../../image-in-device'
import SwipeableViews from 'react-swipeable-views';
import { projectsToShowcase } from '../../../staticData';


function MapProjects({ swipableViewsIndex, viewingMobile }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)

  const generatedProjectDataToRender = generateProjectDataToRender({
    projectDataCollection, projectsToShowcase
  })

  return (
    <SwipeableViews index={swipableViewsIndex} className='swipeable-view'>
      {generatedProjectDataToRender.map(project =>
        <div className='project-images-container'>
          <div className={`
            projectInFrame-container
            desktop-image-in-device
            ${!viewingMobile
              ? 'desktop-image-in-device-display-none'
              : 'desktop-image-in-device-display-true'
            }`}>
            <ImageInDevice
              projectData={project}
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
              projectData={project}
              swipable={true}
              autoPlay={true}
              indexOfImageIfNotSwipable={0}
            />
          </div>
        </div>
      )}
    </SwipeableViews>
  )
}

export default MapProjects
