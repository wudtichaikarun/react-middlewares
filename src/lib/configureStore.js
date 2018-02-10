import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { storage } from 'Middlewares'
import rootReducer from '../reducers'

export default function(initialState) {
  const middleware = [
    logger,
    storage
  ]
  return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}