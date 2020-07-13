import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"

export interface projectDataT {
  length?: any //function
}
const initialState: projectDataT = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PROJECT_DATA:
      return payload

    default:
      return state
  }
}
