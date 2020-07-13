import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import fetchAllProjectData from '../actions/fetchAllPortfolioData'

function useFetchAllPortfolioData() {
  const dispatch = useDispatch()
  const { projectData, techData } = useSelector((state: rootReducerT) => state)

  useEffect(() => {
    if (!projectData.length && !techData.length) dispatch(fetchAllProjectData())
  }, [dispatch, projectData, techData])

}

export default useFetchAllPortfolioData
