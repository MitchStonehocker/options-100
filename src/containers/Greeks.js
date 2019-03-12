// src/containers/SimpleTable.js

import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

function Greeks (props) {
  // console.log('>>>-Greeks-props->', props)
  const { classes, optionTVs } = props
  // console.log('>>>-Greeks-classes->', classes)
  // console.log('>>>-Greeks-optionTVs->', optionTVs)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align='right'>TV</TableCell>
            <TableCell align='right'>Delta</TableCell>
            <TableCell align='right'>Gamma</TableCell>
            <TableCell align='right'>Theta</TableCell>
            <TableCell align='right'>Vega</TableCell>
            <TableCell align='right'>Rho</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {optionTVs.map(option => (
            <TableRow key={option.id}>
              <TableCell component='th' scope='row'>
                {option.Type}
              </TableCell>
              <TableCell align='right'>{option.TV}</TableCell>
              <TableCell align='right'>{option.Delta}</TableCell>
              <TableCell align='right'>{option.Gamma}</TableCell>
              <TableCell align='right'>{option.Theta}</TableCell>
              <TableCell align='right'>{option.Vega}</TableCell>
              <TableCell align='right'>{option.Rho}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

// Greeks.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default withStyles(styles)(Greeks)
