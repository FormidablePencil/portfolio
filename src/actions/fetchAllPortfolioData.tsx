import { FETCHED_ALL_PORTFOLIO_TEXT, FETCHED_ALL_PROJECT_DATA, FETCHED_ALL_TECH_DATA } from './types'

const fetchAllProjectData = () => async (dispatch) => {
  const fetchedData = await fetch('https://portfolio--my-bubble-server.herokuapp.com/dataForLandingSite')
  if (fetchedData.status === 404) return
  const data = await fetchedData.json()
  dispatch({ type: FETCHED_ALL_PROJECT_DATA, payload: data.projectCollection })
  dispatch({ type: FETCHED_ALL_TECH_DATA, payload: data.techCollection })
  dispatch({ type: FETCHED_ALL_PORTFOLIO_TEXT, payload: data.protfolioTextContent })
}

export default fetchAllProjectData