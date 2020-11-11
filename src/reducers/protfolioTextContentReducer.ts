import { FETCHED_ALL_PORTFOLIO_TEXT } from "../actions/types"

export interface protfolioTextContentT {
  intro: {
    [index: number]: string
  }
  bio: string
  contacts: {
    github: string
    email: string
    linkedIn: string
  }
  techToShowcase: { [index: number]: { [index: number]: string } }
}
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PORTFOLIO_TEXT:
      return payload

    default:
      return state
  }
}
