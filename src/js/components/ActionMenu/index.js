import React, { Component } from 'react'
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
  render() {

    const { classes } = this.props;

    return (
      <WrapperActionMenu>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
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

export default withStyles(styles)(ActionMenu);