import { combineReducers } from 'redux'

import { tablesReducer } from './tables'


export const rootReducer = combineReducers({
  tablesReducer,
})