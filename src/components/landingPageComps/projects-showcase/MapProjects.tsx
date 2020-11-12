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

  // const AppInfo = ({ deviceType }) =>
  //   <p className=''>{deviceType === 'mobile' ? 'React Native App' : 'React App'}</p>

  return (
    <SwipeableViews index={swipableViewsIndex} className='swipeable-view'>
      {generatedProjectDataToRender.map(project => {
        let webImages = filterImagesForSpecifiedDevice(project, 'web')
        let mobileImages = filterImagesForSpecifiedDevice(project, 'mobile')
        return (
          <div className='project-images-container' key={project.title}>
            {/* <AppInfo deviceType={project.type} /> */}
            {webImages[0] &&
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
            }
            {mobileImages[0] &&
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
            }
          </div>
        )
      })}
    </SwipeableViews>
  )
}

export default MapProjects
