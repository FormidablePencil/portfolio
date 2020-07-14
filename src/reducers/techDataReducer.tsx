import { FETCHED_ALL_TECH_DATA } from "../actions/types"

export interface techDataT {
}

const initialState = []

export default (state: techDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_TECH_DATA:
      return payload

    default:
      return state
  }
}
