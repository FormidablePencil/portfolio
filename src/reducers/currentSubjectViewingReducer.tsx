import { SELECTED_TECH } from "../actions/types"

export type currentSubjectViewingT = number | null  //This will be id of object

const initialState = 3

export default (state: currentSubjectViewingT = initialState, { type, payload }) => {
  switch (type) {

    case SELECTED_TECH:
      return payload

    default:
      return state
  }
}
