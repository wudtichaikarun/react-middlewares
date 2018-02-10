import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import rootReducer from '../reducers'
import {
  CreateArticle,
  EditArticle,
  ShowArticle,
  Articles
} from 'Containers'
import { loadState } from 'Lib'
import { logger, storage } from 'Middlewares'

const store = createStore(rootReducer, loadState())

// CALL MIDDLEWARE OLD VERSION
// let next = store.dispatch
// next = logger(store)(next)
// next = storage(store)(next)
// const enhancedStore = { ...store, dispatch: next }

// CALL MIDDLEWARE NEW VERSION
function applayMiddleware(storage, middleware) {
  middleware = middleware.slice()
  middleware.reverse()

  let dispatch = store.dispatch

  middleware.forEach(middleware => {dispatch = middleware(storage)(dispatch)})

  return { ...store, dispatch }
}

const enhancedStore = applayMiddleware(store, [logger, storage])

export default () => (
 <Provider store={enhancedStore}>
  <Switch>
    <Route path='/articles/new' component={CreateArticle} />
    <Route path='/articles/:id/edit' component={EditArticle} />
    <Route path='/articles/:id' component={ShowArticle} />
    <Route path='/articles' component={Articles} />
  </Switch>
 </Provider>
)