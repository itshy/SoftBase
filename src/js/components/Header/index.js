import React, { Component } from 'react'

import { HeaderWrapper } from './styled'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuColor: {
    backgroundColor: '#2c387e',
  }
}

class Header extends Component {

  render() {

    const { classes } = this.props

    return (
      <HeaderWrapper>
        <div className={classes.root}>
          <AppBar position="static" className={classes.menuColor}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.grow} color="inherit">
                SoftBase
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </HeaderWrapper>
    )
  }
}

export default withStyles(styles)(Header)