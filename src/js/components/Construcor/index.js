import React, { Component, createRef } from 'react'

import { ConstructorWrapper, CardWrapper } from './styled'
import TableCard from '../TableCard/index'


export default class Constructor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tables: {},
    }
  }


  onMouseDown = (event) => {
    this.setState({ mouseMove: true, })
    const elemPosition = event.currentTarget.getBoundingClientRect()
    const cursorPosition = {
      x: event.pageX,
      y: event.pageY,
    }
    const positionInsideElement = {
      x: cursorPosition.x - elemPosition.left,
      y: cursorPosition.y - elemPosition.top,
    }

    this.setState({tables: positionInsideElement})

    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseUp = (event) => {
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove)
    this.setState({ mouseMove: false, })
  }

  onMouseMove = (event) => {
    if (this.state.mouseMove) {
      const cursorPosition = {
        x: event.pageX,
        y: event.pageY,
      }
      const positionInsideElement = this.state.tables
      const cardTarget = document.querySelector('.child-target')
  
      cardTarget.style.left = (cursorPosition.x - positionInsideElement.x + pageXOffset) + "px"
      cardTarget.style.top = (cursorPosition.y - positionInsideElement.y + pageYOffset) + "px"
    }
  }

  render() {
    return (
      <ConstructorWrapper onMouseMove={this.onMouseMove}>
        <CardWrapper className={ "child-target" }  onMouseUp={this.onMouseUp}>
          <TableCard onMouseDown={ this.onMouseDown }></TableCard>
        </CardWrapper>
      </ConstructorWrapper>
    )
  }
}