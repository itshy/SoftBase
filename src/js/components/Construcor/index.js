import React, { Component, createRef } from 'react'

import { ConstructorWrapper, CardWrapper } from './styled'
import TableCard from '../TableCard/index'


export default class Constructor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tables: [
        {
          positionInsideElement: {},
        },
        {
          positionInsideElement: {},
        },
      ],
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

  onMouseDownTest = (event, index) => {
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
    const tables = this.state.tables

    tables[index].positionInsideElement = positionInsideElement
    this.setState({tables: tables})
    this.props.data.indexUsedTable = index

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
      const index = this.props.data.indexUsedTable
      const positionInsideElement = this.state.tables[index].positionInsideElement
      const cardTarget = document.querySelector('.child-target:nth-child(' + (index+1) + ')')
  
      cardTarget.style.left = (cursorPosition.x - positionInsideElement.x + pageXOffset) + "px"
      cardTarget.style.top = (cursorPosition.y - positionInsideElement.y + pageYOffset) + "px"
    }
  }

  renderTables() {
    const tables = this.state.tables
    console.log('rerender')
    return (
      tables.map((item, index) => {
        return (
          <CardWrapper className={"child-target"} onMouseUp={this.onMouseUp} key = { index } index = { index }>
            <TableCard
              onMouseDown = { this.onMouseDownTest }
              key = { index }
              index = { index }
              data = { item }
            />
          </CardWrapper>
        )
      })
    )
  }

  render() {
    return (
      <ConstructorWrapper onMouseMove={this.onMouseMove}>
        {/* <TableCard onMouseDown={ this.onMouseDown }></TableCard> */}
        { this.renderTables() }
      </ConstructorWrapper>
    )
  }
}