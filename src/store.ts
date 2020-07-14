
import projectDataReducer, { projectDataT } from './reducers/projectDataReducer'
import techDataReducer, { techDataT } from './reducers/techDataReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import currentSubjectViewingReducer, { currentSubjectViewingT } from './reducers/currentSubjectViewingReducer'

export interface rootReducerT {
  projectDataCollection: projectDataT[],
  techDataCollection: techDataT[],
  currentSubjectViewing: currentSubjectViewingT,
}
const rootReducer = combineReducers<rootReducerT>({
  projectDataCollection: projectDataReducer,
  techDataCollection: techDataReducer,
  currentSubjectViewing: currentSubjectViewingReducer,
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
