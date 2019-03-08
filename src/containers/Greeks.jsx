// src/containers/Greeks.js

import React from 'react'

import { useStyles } from '../hooks/useStyles'

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

export const Greeks = ({ greeks }) => {
  console.log('>>>-Greeks-greeks->', greeks)

  const classes = useStyles()
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Greek</TableCell>
              <TableCell align='right'>{greeks.call.type}</TableCell>
              <TableCell align='right'>{greeks.put.type}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={'tv'}>
              <TableCell align='left'>{'TV'}</TableCell>
              <TableCell align='right'>{greeks.call.tv}</TableCell>
              <TableCell align='right'>{greeks.put.tv}</TableCell>
            </TableRow>
            <TableRow key={'Delta'}>
              <TableCell align='left'>{'Delta'.toUpperCase()}</TableCell>
              <TableCell align='right'>{greeks.call.Delta}</TableCell>
              <TableCell align='right'>{greeks.put.Delta}</TableCell>
            </TableRow>
            <TableRow key={'Gamma'}>
              <TableCell align='left'>{'Gamma'}</TableCell>
              <TableCell align='right'>{greeks.call.Gamma}</TableCell>
              <TableCell align='right'>{greeks.put.Gamma}</TableCell>
            </TableRow>
            <TableRow key={'Theta'}>
              <TableCell align='left'>{'Theta'}</TableCell>
              <TableCell align='right'>{greeks.call.Theta}</TableCell>
              <TableCell align='right'>{greeks.put.Theta}</TableCell>
            </TableRow>
            <TableRow key={'Vega'}>
              <TableCell align='left'>{'Vega'}</TableCell>
              <TableCell align='right'>{greeks.call.Vega}</TableCell>
              <TableCell align='right'>{greeks.put.Vega}</TableCell>
            </TableRow>
            <TableRow key={'Rho'}>
              <TableCell align='left'>{'Rho'}</TableCell>
              <TableCell align='right'>{greeks.call.Rho}</TableCell>
              <TableCell align='right'>{greeks.put.Rho}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  )
}

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 1,
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   table: {
//     minWidth: 1
//   },

//   dense: {
//     marginTop: 1
//   },
//   menu: {
//     width: 1
//   },
//   margin: {
//     margin: theme.spacing.unit
//   }
// })
