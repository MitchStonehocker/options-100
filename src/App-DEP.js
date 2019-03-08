// src/App.js

import React, { useState } from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import axios from 'axios'

import config from './config'
// import VariableInputForm from './containers/VariableInputForm'
import Greeks from './containers/Greeks'
import { useVariableInput } from './hooks/useVariableInput'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { useTheme } from '@material-ui/styles'
import { useStyles } from '../hooks/useStyles'

import './App.css'

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

export default function App () {
   // use of hooks to bring classes style sheet in (usually done with HOC) and access the theme
   const classes = useStyles()
   const theme = useTheme()

  const [u, setU] = useState('') // underlying
  const [k, setK] = useState('') // strike
  const [x, setX] = useState('') // days to expiry
  const [v, setV] = useState('') // volavility rate
  const [r, setR] = useState('') // risk free rate
  const [d, setD] = useState('') // dividend rate
  const [isLoading, setIsLoading] = useState(false)
  const [apiString, setApiString] = useState('')
  const [options, setOptions] = useState({})
  const [callOpt, setCallOpt] = useState({})
  const [putOpt, setPutOpt] = useState({})

  const baseURL = config.WCBASEURL
  const endPoint = 'options'
  const genre = 'European' // American || European
  const type = 'All' // All || Call || Put

  const handleFormClick = () => {
    console.log('>>>-App-{k,x,r,v,u,d}-> ', { k, x, r, v, u, d })
    setIsLoading(true)
    console.log('>>>-App-isLoading-> ', isLoading)
    const apiString =
      baseURL +
      endPoint +
      '/?genre=' +
      genre +
      '&type=' +
      type +
      '&k=' +
      k +
      '&x=' +
      x +
      '&r=' +
      r +
      '&v=' +
      v +
      '&u=' +
      u +
      '&d=' +
      d
    setApiString(apiString)
    console.log('>>>-App-apiString->', apiString)

    axios
      .get(apiString)
      .then(res => {
        console.log(
          '>>>-App-res.data.options.stringify->',
          JSON.stringify(res.data.options)
        )
        const options = JSON.stringify(res.data.options)
        setOptions(options)
        console.log('>>>-App-options->', options)
        const callOpt = JSON.stringify(res.data.options.call)
        setCallOpt(callOpt)
        console.log('>>>-App-callOpt->', callOpt)
        console.log('>>>-App-{callOpt}->', { callOpt })
        const putOpt = JSON.stringify(res.data.options.put)
        setPutOpt(putOpt)
        console.log('>>>-App-putOpt->', { putOpt })
        setIsLoading(false)
        console.log('>>>-App-isLoading-> ', isLoading)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })

    setIsLoading(false)
  }

  const price = useInput('Price', '', handleValidation, validations.REAL_GE0)

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>Option Value & Greek Calculator</header>
        <main className='App-main'>
          <div className={styles.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={styles.paper}>
                  Instructions & bla bla...
                  <form className={classes.form} {...submit.props}>
                  <div className={classes.input}>
                    <TextField
                      className={styles.textField}
                      label='Underlying (u)'
                      // name='u'
                      type='number'
                      min={0}
                      // validate
                      value={u}
                      onChange={e => setU(e.target.value)}
                      margin='normal'
                      variant='outlined'
                      required
                    />
                    <TextField
                      className={styles.textField}
                      label='Strike (k)'
                      name='k'
                      type='number'
                      min={0}
                      // validate
                      value={k}
                      onChange={e => setK(e.target.value)}
                      margin='normal'
                      variant='outlined'
                      required
                    />
                    <TextField
                      className={styles.textField}
                      label='Volatility % (v)'
                      name='v'
                      type='number'
                      min={0}
                      // validate
                      value={v}
                      onChange={e => setV(e.target.value)}
                      margin='normal'
                      variant='outlined'
                      required
                    />
                    <TextField
                      className={styles.textField}
                      label='Days to Expiry (x)'
                      name='x'
                      type='number'
                      min={0}
                      // validate
                      value={x}
                      onChange={e => setX(e.target.value)}
                      margin='normal'
                      variant='outlined'
                      required
                    />
                    <TextField
                      className={styles.textField}
                      label='Dividend Rate % (d)'
                      name='d'
                      type='number'
                      min={0}
                      // validate
                      value={d}
                      onChange={e => setD(e.target.value)}
                      required
                      margin='normal'
                      variant='outlined'
                    />
                    <TextField
                      className={styles.textField}
                      label='Risk Free Rate % (r)'
                      name='r'
                      type='number'
                      min={0}
                      // validate
                      value={r}
                      onChange={e => setR(e.target.value)}
                      required
                      margin='normal'
                      variant='outlined'
                    />
                    <Grid item xs={12}>
                      {isLoading ? (
                        'computing...'
                      ) : (
                        <Button
                          className={styles.margin}
                          onClick={handleFormClick}
                          variant='contained'
                          size='small'
                          color='primary'
                          disabled={
                            !u.trim() ||
                            !k.trim() ||
                            !v.trim() ||
                            !x.trim() ||
                            !r.trim() ||
                            !d.trim()
                          }
                        >
                          Calculate
                        </Button>
                      )}
                    </Grid>
                  </div>
                  </form>
                </Paper>
              </Grid>
              {callOpt ? <Greeks greeks={{ callOpt }} /> : null}
              {putOpt ? <Greeks greeks={{ putOpt }} /> : null}
            </Grid>
          </div>
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    </ThemeProvider>
  )
}

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
