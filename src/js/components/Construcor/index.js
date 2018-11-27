import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updatePositionAction } from '../../actions/index'

import { ConstructorWrapper, CardWrapper } from './styled'
import TableCard from '../TableCard/index'


class Constructor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tableProperty: {
        indexUsedTable: undefined,
        zIndexUsedTable: 1,
        positionInsideElement: {},
        currentIndex: undefined,
      },
    }
  }


  // Table capture event
  onMouseDown = (event, index) => {
    const elemPosition = event.currentTarget.getBoundingClientRect()
    const cursorPosition = {
      x: event.pageX,
      y: event.pageY,
    }
    const positionInsideElement = {
      x: cursorPosition.x - elemPosition.left,
      y: cursorPosition.y - elemPosition.top,
    }
    const cardTarget = document.querySelector('.child-target:nth-child(' + (index+1) + ')')
    var tableProperty = this.state.tableProperty

    tableProperty = {
      indexUsedTable: index,
      zIndexUsedTable: tableProperty.zIndexUsedTable + 1,
      positionInsideElement: positionInsideElement,
    }
    this.setState({tableProperty: tableProperty, mouseMove: true, currentIndex: index})

    cardTarget.style.zIndex = tableProperty.zIndexUsedTable
    
    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
  }

  // Stop holding table
  onMouseUp = (event) => {
    const positionTable = {
      left: event.currentTarget.getBoundingClientRect().left,
      top: event.currentTarget.getBoundingClientRect().top,
    }
    const index = this.state.tableProperty.indexUsedTable
    const updatePositionAction = this.props.updatePositionAction

    event.currentTarget.removeEventListener('mousemove', this.onMouseMove)
    this.setState({ mouseMove: false, })
    updatePositionAction(index, positionTable)
  }

  // Move table
  onMouseMove = (event) => {
    if (this.state.mouseMove) {
      const cursorPosition = {
        x: event.pageX,
        y: event.pageY,
      }
      const index = this.state.tableProperty.indexUsedTable
      const positionInsideElement = this.state.tableProperty.positionInsideElement
      const cardTarget = document.querySelector('.child-target:nth-child(' + (index+1) + ')')
  
      cardTarget.style.left = (cursorPosition.x - positionInsideElement.x + pageXOffset) + "px"
      cardTarget.style.top = (cursorPosition.y - positionInsideElement.y + pageYOffset) + "px"
    }
  }

  renderTables() {
    const tables = this.props.data.tables
    console.log('rerender')
    return (
      tables.map((item, index) => {
        return (
          <CardWrapper
            className={"child-target"}
            key = { index }
            index = { index }
            style = {{ left: item.position.left, top: item.position.top, }}
          >
            <TableCard
              onMouseDownHanlder = { this.onMouseDown }
              onMouseUpHandler={ this.onMouseUp }
              key = { index }
              index = { index }
              data = { item }
              catchedTable = { this.state.currentIndex }
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

const mapStateToProps = (state) => ({
  data: state.tablesReducer,
})

const dispatchToProps = (dispatch) => ({
  updatePositionAction: (index, position) => dispatch(updatePositionAction(index, position))
})

export default connect(mapStateToProps, dispatchToProps)(Constructor)