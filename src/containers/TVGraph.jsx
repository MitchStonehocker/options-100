//

import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  table: {
    minWidth: 1
  },

  dense: {
    marginTop: 1
  },
  menu: {
    width: 1
  },
  margin: {
    margin: theme.spacing.unit
  }
})

function TVGraphs (props) {
  //   console.log('in Greeks.jsx - props.greeks ===>', props.greeks)
  if (props.greeks) {
    return (
      <Grid item xs={6}>
        <Paper className={styles.root}>
          <div>graphs go here...</div>
        </Paper>
      </Grid>
    )
  } else {
    return null
  }
}

export default TVGraphs
