import { createStore, applyMiddleware } from 'redux'
import combinedReducer from '../reducers'
import { Alert } from 'react-native'
import apiMiddleware from '../middlewares/api'
import loggerMiddleware from '../middlewares/logger'

const middlewares = [
  apiMiddleware,
  loggerMiddleware
]

const store = createStore(combinedReducer, applyMiddleware(...middlewares))

export default store
