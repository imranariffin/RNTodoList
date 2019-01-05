import { createStore, applyMiddleware } from 'redux'
import todoListApiClient from '@apiClients/todolist'
import storageClient from '@apiClients/storage'
import combinedReducer from '@state/reducers'
import apiMiddleware from '@state/middlewares/api'
import loggerMiddleware from '@state/middlewares/logger'
import persistenceMiddleware from '@state/middlewares/persistence'

const middlewares = [
  apiMiddleware(todoListApiClient),
  loggerMiddleware(console),
  persistenceMiddleware(storageClient)
]

const store = createStore(combinedReducer, applyMiddleware(...middlewares))

export default store
