import React, { Component, createRef } from 'react'
import { Rnd } from 'react-rnd'

import { ConstructorWrapper, CardWrapper } from './styled'
import TableCard from '../TableCard/index'


export default class Constructor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tablesNew: {},
    }
  }


  onMouseDown = (event) => {
    const elemPosition = event.currentTarget.getBoundingClientRect()
    const cursorPosition = {
      x: event.pageX,
      y: event.pageY,
    }
    const positionInsideElement = {
      x: cursorPosition.x - elemPosition.left,
      y: cursorPosition.y - elemPosition.top,
    }

    this.setState({tablesNew: positionInsideElement})

    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseUp = (event) => {
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = (event) => {
    const elemPosition = event.currentTarget.getBoundingClientRect()
    const cursorPosition = {
      x: event.pageX,
      y: event.pageY,
    }
    const positionInsideElement = this.state.tablesNew

    event.currentTarget.style = "left: " + (cursorPosition.x - positionInsideElement.x) + "px ; top: " + (cursorPosition.y - positionInsideElement.y) + "px;"
  }

  render() {
    return (
      <ConstructorWrapper>
        {/* { this.renderCards() } */}
        <CardWrapper onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
          <TableCard></TableCard>
        </CardWrapper>
      </ConstructorWrapper>
    )
  }
}