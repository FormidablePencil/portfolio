import { FETCHED_ALL_TECH_DATA } from "../actions/types"

export interface techDataT {
  length?: any //function
}
const initialState: techDataT = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_TECH_DATA:
      return payload

    default:
      return state
  }
}
