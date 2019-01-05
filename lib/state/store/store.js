import { createStore, applyMiddleware } from 'redux'
import combinedReducer from '@state/reducers'
import { Alert } from 'react-native'
import todoListApiClient from '@apiClients/todolist'
import apiMiddleware from '@state/middlewares/api'
import loggerMiddleware from '@state/middlewares/logger'

const middlewares = [
  apiMiddleware(todoListApiClient),
  loggerMiddleware(console)
]

const store = createStore(combinedReducer, applyMiddleware(...middlewares))

export default store
