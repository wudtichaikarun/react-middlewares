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

// log massage
let next = store.dispatch
store.dispatch = action => {
  console.log('prevState', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('nextState', store.getState())
  return result
}

store.subscribe(() => {
  saveState(store.getState())
})

export default () => (
 <Provider store={store}>
  <Switch>
    <Route path='/articles/new' component={CreateArticle} />
    <Route path='/articles/:id/edit' component={EditArticle} />
    <Route path='/articles/:id' component={ShowArticle} />
    <Route path='/articles' component={Articles} />
  </Switch>
 </Provider>
)