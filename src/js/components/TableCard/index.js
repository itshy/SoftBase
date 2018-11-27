import React, { Component } from 'react'

import TableTabs from '../TableTabs/'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import classnames from 'classnames'


const styles = theme => ({
  card: {
    width: '15em',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  nonSelected: {
    userSelect: 'none',
  }
});

class TableCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  // Check index catched card for render
  shouldComponentUpdate(nextProps) {
    return this.props.catchedTable === this.props.index
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  onMouseDown = (event) => {
    const {onMouseDownHanlder} = this.props

    onMouseDownHanlder(event, this.props.index)
  }

  render() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardActions className={classes.actions} onMouseDown={ this.onMouseDown } onMouseUp={ this.props.onMouseUpHandler }>
          <Typography className={classes.nonSelected} variant="subtitle1">Table {this.props.index}</Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <TableTabs />
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(styles)(TableCard);