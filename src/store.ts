
import projectDataReducer, { projectDataT } from './reducers/projectDataReducer'
import techDataReducer, { techDataT } from './reducers/techDataReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export interface rootReducerT {
  projectData: projectDataT,
  techData: techDataT,
}
const rootReducer = combineReducers<rootReducerT>({
  projectData: projectDataReducer,
  techData: techDataReducer
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
