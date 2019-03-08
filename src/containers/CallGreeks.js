// src/containers/CallGreeks.js
// https://www.wolframcloud.com/objects/mitch/options/?class=European&type=Call&k=40&dte=30&rfr=2&v=50&u=40&div=1
import React from 'react'

import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
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

function CallGreeks (props) {
  // console.log('props.callTV ===> ', props.callTV)

  if (props.callTVs) {
    return (
      <Grid item xs={6}>
        <Paper className={styles.root}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>{props.callTVs.type}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={'tv'}>
                <TableCell align='left'>{'TV'}</TableCell>
                <TableCell align='left'>{props.callTVs.tv}</TableCell>
              </TableRow>
              <TableRow key={'Delta'}>
                <TableCell align='left'>{'Delta'}</TableCell>
                <TableCell align='left'>{props.callTVs.Delta}</TableCell>
              </TableRow>
              <TableRow key={'Gamma'}>
                <TableCell align='left'>{'Gamma'}</TableCell>
                <TableCell align='left'>{props.callTVs.Gamma}</TableCell>
              </TableRow>
              <TableRow key={'Theta'}>
                <TableCell align='left'>{'Theta'}</TableCell>
                <TableCell align='left'>{props.callTVs.Theta}</TableCell>
              </TableRow>
              <TableRow key={'Vega'}>
                <TableCell align='left'>{'Vega'}</TableCell>
                <TableCell align='left'>{props.callTVs.Vega}</TableCell>
              </TableRow>
              <TableRow key={'Rho'}>
                <TableCell align='left'>{'Rho'}</TableCell>
                <TableCell align='left'>{props.callTVs.Rho}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    )
  } else {
    return null
  }
}

export default CallGreeks
