// src/components/GridTest.js

import React from 'react'

import { TestSelect } from './TestSelect'

import { useStyles } from '../../hooks/useStyles'
import { Grid, Paper, Card } from '@material-ui/core'

export default function VariableInputForm () {
  const classes = useStyles()

  return (
    <form
      className={classes.form}
      // {...submit.props}
    >
      <Grid
        container
        direction='column'
        // alignContent='stretch'
        justify='flex-start'
        alignItems='center'
        className={classes.root}
      >
        <Paper className={classes.paper}>
          <Card className={classes.card}>1:1</Card>
          <Card className={classes.card}>2:1</Card>
          <Card className={classes.card}>3:1</Card>
          <Card className={classes.card}>4:1</Card>
          <Card className={classes.card}>5:1</Card>
          <Card className={classes.card}>6:1</Card>
          <Card className={classes.card}>7:1</Card>
          <Card className={classes.card}>8:1</Card>
          <Card className={classes.card}>9:1</Card>
          <Card className={classes.card}>10:1</Card>
        </Paper>
        <Paper className={classes.paper}>
          <Card className={classes.card}>1:2</Card>
          <Card className={classes.card}>2:2</Card>
          <Card className={classes.card}>3:2</Card>
          <Card className={classes.card}>4:2</Card>
          <Card className={classes.card}>5:2</Card>
        </Paper>
        <Paper className={classes.paper}>
          <Card className={classes.card}>1:3</Card>
          <Card className={classes.card}>2:3</Card>
          <Card className={classes.card}>3:3</Card>
          <Card className={classes.card}>4:3</Card>
        </Paper>
        <Paper className={classes.paper}>
          <TestSelect label={'Range'} name={'range'} />
          <TestSelect label={'Group'} name={'group'} />
          <TestSelect label={'Class'} name={'class'} />
        </Paper>
        <Paper className={classes.paper}>
          <TestSelect label={'Range'} name={'range'} />
          <TestSelect label={'Group'} name={'group'} />
        </Paper>
        <Paper className={classes.paper}>
          <TestSelect label={'Class'} name={'class'} />
        </Paper>
      </Grid>
    </form>
  )
}
