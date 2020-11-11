import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"

export interface projectDataT {
  title: string
  description: string
  links: any
  showInPortfolio: any
  video: any
  gitRepo: {
    frontend: string
    server: string
  }
  relevant: {
    webApp: string
    blog: string
  }
  status: number
  technologies: []
  type: string
  _id: number
  showInPorfolio: boolean
  images: any
}
const initialState = []

export default (state: projectDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PROJECT_DATA:
      return payload

    default:
      return state
  }
}
