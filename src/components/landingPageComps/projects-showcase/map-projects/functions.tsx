import { projectDataT } from "../../../../reducers/projectDataReducer"

export interface whatTypeOfImagesAvailableRefT {
  current: { [index: number]: 'both' | 'mobile' | 'desktop' }
}



const updateImagesAvaiableForWhatDevices = (
  {
    whatTypeOfImagesAvailableRef,
    desktopImages,
    mobileImages,
    index,
    isLastImage,
    setImagesForWhatDevices,
  }: {
    whatTypeOfImagesAvailableRef: whatTypeOfImagesAvailableRefT,
    desktopImages,
    mobileImages,
    index,
    isLastImage,
    setImagesForWhatDevices,
  }) => {
  switch (true) {
    case (desktopImages.length > 0 && mobileImages.length > 0):
      whatTypeOfImagesAvailableRef.current[index] = 'both'
      break;
    case (desktopImages.length > 0):
      whatTypeOfImagesAvailableRef.current[index] = 'desktop'
      break;
    case (mobileImages.length > 0):
      whatTypeOfImagesAvailableRef.current[index] = 'mobile'
      break;
  }
  if (isLastImage)
    setImagesForWhatDevices(whatTypeOfImagesAvailableRef.current)
}



const filterImagesForSpecifiedDevice = (project: projectDataT, device) =>
  project.images.filter(image => image.device === device)



interface T { projectDataCollection: projectDataT[], projectsToShowcase: { [key: number]: string, filter: any } }
const generateProjectDataToRender = ({ projectDataCollection, projectsToShowcase }: T) =>
  projectDataCollection.filter(doc => projectsToShowcase.filter(title =>
    title === doc.title && doc
  )[0])


  
export {
  updateImagesAvaiableForWhatDevices,
  filterImagesForSpecifiedDevice,
  generateProjectDataToRender
}