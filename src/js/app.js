import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import AppPage from './containers/AppPage'


export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ AppPage } />
        <Route path='/app/' component={ AppPage } />
      </Switch>
    )
  }
}
