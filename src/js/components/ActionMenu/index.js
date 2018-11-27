import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewTableAction } from '../../actions/index'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'

import { WrapperActionMenu } from './styled'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ActionMenu extends Component {

  addNewTable = () => {
    this.props.addNewTable()
  }

  render() {
    const { classes } = this.props

    return (
      <WrapperActionMenu>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={ this.addNewTable }>
          <AddIcon />
        </Button>
        <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
          <Icon>edit_icon</Icon>
        </Button>
        <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Button>
        <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
          <DeleteIcon />
        </Button>
      </WrapperActionMenu>
    )
  }
}

const mapStateToProps = (state) => ({

})
const dispatchToProps = (dispatch) => ({
  addNewTable: () => dispatch(addNewTableAction())
})

const ActionMenuConnect = connect(mapStateToProps, dispatchToProps)(ActionMenu)
export default withStyles(styles)(ActionMenuConnect)