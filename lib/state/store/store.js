import { createStore, applyMiddleware } from 'redux'
import combinedReducer from '../reducers'
import { Alert } from 'react-native'
import todoListApiClient from '../../apiClients/todolist'
import apiMiddleware from '../middlewares/api'
import loggerMiddleware from '../middlewares/logger'

const middlewares = [
  apiMiddleware(todoListApiClient),
  loggerMiddleware(console)
]

const store = createStore(combinedReducer, applyMiddleware(...middlewares))

export default store
