import { projectDataT } from "../reducers/projectDataReducer"

interface T { projectDataCollection: projectDataT[], projectsToShowcase: { [key: number]: string, filter: any } }
const generateProjectDataToRender = ({ projectDataCollection, projectsToShowcase }: T) =>
  projectDataCollection.filter(doc =>
    projectsToShowcase.filter(title => title === doc.title && doc)[0]
  )

export default generateProjectDataToRender
