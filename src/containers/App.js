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
import { saveState, loadState } from 'Lib'

const store = createStore(rootReducer, loadState())

// Logger (Middleware)
const logger = store => dispatch => action => {
  console.log('--prevState', store.getState())
  console.log('action', action)
  const result = dispatch(action)
  console.log('nextState', store.getState())
  return result
}

// Save state to LocalStorage (Middleware)
const storage = store => dispatch => action => {
  const result = dispatch(action)
  saveState(store.getState())
  return result
}

let next = store.dispatch

next = logger(store)(next)
next = storage(store)(next)

const enhancedStore = { ...store, dispatch: next }

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