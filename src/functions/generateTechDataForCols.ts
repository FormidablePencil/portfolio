import { techDataT } from "../reducers/techDataReducer"

const generateTechDataForCols = (techDataCollection: techDataT[], techToShowcase) => {
  if (!techToShowcase) return
  return techToShowcase.map(colOfCases =>
    generateDataForCol({ techDataCollection, colOfCases }))
}

const generateDataForCol = ({ techDataCollection, colOfCases }) => {
  return techDataCollection.filter(item => {
    switch (item.technology) {
      case colOfCases[0]:
      case colOfCases[1]:
      case colOfCases[2]:
      case colOfCases[3]:
        return item.technology
      default:
        break;
    }
    return null
  })
}



export default generateTechDataForCols
