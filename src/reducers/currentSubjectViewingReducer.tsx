import { SELECTED_TECH, SELECTED_SUBJECT } from "../actions/types"

export type currentSubjectViewingT = number | null  //This will be id of object

const initialState = 3

export default (state: currentSubjectViewingT = initialState, { type, payload }) => {
  switch (type) {

    case SELECTED_SUBJECT:
      return payload

    default:
      return state
  }
}
