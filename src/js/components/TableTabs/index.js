import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItemPadding: {
    padding: '0 24px',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

class TableTabs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List>
          <ListItem className={classes.listItemPadding}>
            <ListItemText primary="id" secondary="integer" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <CardContent>
          <Button variant="contained" size="small" className={classes.button}>
            <AddIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
            Add filed
          </Button>
        </CardContent>
      </div>
    )
  }
}

export default withStyles(styles)(TableTabs);