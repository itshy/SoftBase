import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'


const styles = {
  card: {
    minWidth: 250,
    minHeight: 350,
  },
}

class TableCard extends Component {
  render() {
    
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Table
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default withStyles(styles)(TableCard);