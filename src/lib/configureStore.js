import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { storage } from 'Middlewares'
import rootReducer from '../reducers'
import DevTools from 'Containers/DevTools'

export default function(initialState) {
  const middleware = [
    logger,
    storage
  ]

  const store = createStore(
    rootReducer, 
    initialState, 
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store
}