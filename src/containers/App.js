import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import {
  CreateArticle,
  EditArticle,
  ShowArticle,
  Articles
} from 'Containers'
import { loadState, configureStore } from 'Lib'

const store = configureStore(loadState())

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