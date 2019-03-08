// src/containers/CallGreeks.js
// https://www.wolframcloud.com/objects/mitch/options/?class=European&type=Call&k=40&dte=30&rfr=2&v=50&u=40&div=1
import React, { Component } from 'react'
import axios from 'axios'

import config from '../config'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class VariableInputForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      // apiReturn: {},
      options: [],
      callOpt: {},
      putOpt: {},
      baseURL: config.WCBASEURL,
      endPoint: 'options',
      class: 'European', // American || European
      type: 'All', // All || Call || Put
      k: '', // strike
      x: '', // days to expiry
      r: '', // risk free rate
      v: '', // volavility rate
      u: '', // underlying
      d: '' // dividend rate
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    // console.log('in handleSubmit')
    event.preventDefault()
    const apiString =
      this.state.baseURL +
      this.state.endPoint +
      '/?class=' +
      this.state.class +
      '&k=' +
      this.state.k +
      '&x=' +
      this.state.x +
      '&r=' +
      this.state.r +
      '&v=' +
      this.state.v +
      '&u=' +
      this.state.u +
      '&d=' +
      this.state.d

    axios.get(apiString).then(res => {
      // const options = JSON.stringify(res.data.Options)
      const options = res.data.Options
      this.setState({ options })
      // const callOpt = JSON.stringify(options[0])
      const callOpt = options[0]
      this.setState({ callOpt })
      // const putOpt = JSON.stringify(options[1])
      const putOpt = options[1]
      this.setState({ putOpt })

      // console.log('options ===> ', options)
      // console.log('callOpt ===> ', callOpt)
      // console.log('putOpt ===> ', putOpt)
    })
  }

  render () {
    return (
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          Instructions & bla bla...
          <form
            className={styles.container}
            // onSubmit={event => this.handleSubmit(event)}
            noValidate
            autoComplete='off'
          >
            <TextField
              className={styles.textField}
              label='Underlying (u)'
              name='u'
              type='number'
              // validate
              value={this.state.u}
              onChange={event => this.handleChange(event)}
              margin='normal'
              variant='outlined'
              required
            />
            <TextField
              className={styles.textField}
              label='Strike (k)'
              name='k'
              type='number'
              // validate
              value={this.state.k}
              onChange={event => this.handleChange(event)}
              margin='normal'
              variant='outlined'
              required
            />
            <TextField
              className={styles.textField}
              label='Volatility % (v)'
              name='v'
              type='number'
              // validate
              value={this.state.v}
              onChange={event => this.handleChange(event)}
              margin='normal'
              variant='outlined'
              required
            />
            <TextField
              className={styles.textField}
              label='Days to Expiry (x)'
              name='x'
              type='number'
              // validate
              value={this.state.x}
              onChange={event => this.handleChange(event)}
              margin='normal'
              variant='outlined'
              required
            />
            <TextField
              className={styles.textField}
              label='Dividend Rate % (d)'
              name='d'
              type='number'
              // validate
              value={this.state.d}
              onChange={event => this.handleChange(event)}
              required
              margin='normal'
              variant='outlined'
            />
            <TextField
              className={styles.textField}
              label='Risk Free Rate % (r)'
              name='r'
              type='number'
              // validate
              value={this.state.r}
              onChange={event => this.handleChange(event)}
              required
              margin='normal'
              variant='outlined'
            />
            <Grid item xs={12}>
              <Button
                className={styles.margin}
                onClick={event => this.handleSubmit(event)}
                variant='contained'
                size='small'
                color='primary'
              >
                Calculate
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    )
  }
}

export default VariableInputForm

const styles = theme => ({
  root: {
    flexGrow: 1,
    spacing: 1,
    margin: 1
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
    minWidth: 700
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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
