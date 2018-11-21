import React, { Component, Fragment } from 'react'

import Header from '../components/Header'
import Constructor from '../components/Construcor'
import ActionMenu from '../components/ActionMenu'


export default class AppPage extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Constructor></Constructor>
        <ActionMenu></ActionMenu>
      </Fragment>
    )
  }
}