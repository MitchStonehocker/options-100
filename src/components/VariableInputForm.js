// src/components/VariableInputForm.js

import React, { useState } from 'react'
import axios from 'axios'

import { optionFlavorList, optionTypeList } from '../utilities/selectorLists'
import { Greeks } from '../containers/Greeks'

import {
  Grid,
  Paper,
  Button,
  Typography,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem,
  TextField
} from '@material-ui/core'

import { useInput } from '../hooks/useInput'
import { useSubmit } from '../hooks/useSubmit'
import { useStyles } from '../hooks/useStyles'
import { validations } from '../utilities/validations.js'
import { FormInputTable } from './FormInputTable'

export default function VariableInputForm () {
  const classes = useStyles()
  const [formInputs, setFormInputs] = useState(null)
  const [optionTVs, setOptionTVs] = useState(null)
  // const [formResults, setFormResults] = useState(null)

  function handleValidation (value, regex) {
    if (value && regex && value.match(regex)) return true
    return false
  }

  const selectOptFlavorLabelWidth = 110
  const selectOptTypeLabelWidth = 100

  // (label, apiSymbol, defaultValue, function, regex)
  const optionFlavor = useInput(
    'Flavor',
    'flavor',
    '',
    handleValidation,
    validations.ANYTHING
  )
  const optionType = useInput(
    'Type',
    'type',
    '',
    handleValidation,
    validations.ANYTHING
  )
  const underlying = useInput(
    'Underlying',
    'u',
    '',
    handleValidation,
    validations.REAL_GE0
  )
  const strike = useInput(
    'Strike',
    'k',
    '',
    handleValidation,
    validations.REAL_GE0
  )
  const volatility = useInput(
    'Volatility',
    'v',
    '',
    handleValidation,
    validations.REAL_GE0
  )
  const expiry = useInput(
    'Expiry',
    'x',
    '',
    handleValidation,
    validations.REAL_GE0
  )
  const dividendRate = useInput(
    'Dividend Rate',
    'd',
    '',
    handleValidation,
    validations.REAL_GE0
  )
  const riskFreeRate = useInput(
    'Risk Free Rate',
    'r',
    '',
    handleValidation,
    validations.REAL_GE0
  )

  function handleFormSuccess (formInputs) {
    // console.log('>>>-Form-handleFormSuccess-formInputs->', formInputs)
    setFormInputs(formInputs)

    // prep & make api call
    // refactor to function buildApiString
    const prepURL = formInputs.map(
      input => input.symbol + '=' + input.value + '&'
    )
    const varsURL = Object.values(prepURL)
      .join('')
      .slice(0, -1)
    const baseURL = 'https://www.wolframcloud.com/objects/mitch/'
    const endPoint = 'options/?'
    const apiString = baseURL + endPoint + varsURL
    // console.log(
    //   '>>>-VariableInputForm-handleFormSuccess-apiString->',
    //   apiString
    // )

    axios.get(apiString).then(res => {
      const optionTVs = res.data.options
      // const callOpt = optionTVs.call
      // const putOpt = optionTVs.put
      // console.log(
      //   '>>>-VariableInputForm-handleFormSuccess-optionTVs->',
      //   optionTVs
      // )
      // console.log('>>>-VariableInputForm-handleFormSuccess-callOpt->', callOpt)
      // console.log('>>>-VariableInputForm-handleFormSuccess-putOpt->', putOpt)
      setOptionTVs(optionTVs)
    })
  }
  // function handleApiSuccess (formInputs) {
  //   console.log('>>>-Form-handleApiSuccess-formInputs->', formInputs)
  // }

  const submit = useSubmit(
    [
      optionFlavor,
      optionType,
      underlying,
      strike,
      volatility,
      expiry,
      dividendRate,
      riskFreeRate
    ],
    handleFormSuccess
    // handleApiSuccess
    // buildApiString
  )

  // const greeks = {}

  return (
    <div>
      <form className={classes.form} {...submit.props}>
        <Grid
          container
          direction='column'
          justify='flex-start'
          alignItems='center'
          className={classes.root}
        >
          <Paper className={classes.paper}>
            <FormControl
              variant='outlined'
              required
              className={classes.formControl}
            >
              <InputLabel htmlFor='outlined-optionFlavor-simple'>
                Option Flavor
              </InputLabel>
              <Select
                {...optionFlavor.props}
                input={
                  <OutlinedInput
                    labelWidth={selectOptFlavorLabelWidth}
                    name='optionFlavor'
                    id='outlined-optionFlavor-simple'
                  />
                }
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {optionFlavorList.map(optionFlavor => (
                  <MenuItem key={optionFlavor} value={optionFlavor}>
                    {optionFlavor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              required
              className={classes.formControl}
            >
              <InputLabel htmlFor='outlined-optionType-simple'>
                Option Type
              </InputLabel>
              <Select
                {...optionType.props}
                input={
                  <OutlinedInput
                    labelWidth={selectOptTypeLabelWidth}
                    name='optionType'
                    id='outlined-optionType-simple'
                  />
                }
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {optionTypeList.map(optionType => (
                  <MenuItem key={optionType} value={optionType}>
                    {optionType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>

          <Paper className={classes.paper}>
            <div>
              <TextField
                className={classes.textField}
                label='Underlying (u)'
                name='u'
                variant='outlined'
                {...underlying.props}
              />
              {underlying.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
            <div>
              <TextField
                className={classes.textField}
                label='Strike (k)'
                name='k'
                variant='outlined'
                {...strike.props}
              />
              {strike.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
            <div>
              <TextField
                className={classes.textField}
                label='Volatility % (v)'
                name='v'
                variant='outlined'
                {...volatility.props}
              />
              {volatility.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
            <div>
              <TextField
                className={classes.textField}
                label='Days to Expiry (x)'
                name='x'
                variant='outlined'
                {...expiry.props}
              />
              {expiry.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
            <div>
              <TextField
                className={classes.textField}
                label='Div. Rate % (d)'
                name='d'
                variant='outlined'
                {...dividendRate.props}
              />
              {dividendRate.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
            <div>
              <TextField
                className={classes.textField}
                label='Riskless Rate % (r)'
                name='r'
                variant='outlined'
                {...riskFreeRate.props}
              />
              {riskFreeRate.props.error && (
                <Typography variant='body1' color='error'>
                  Invalid quantity
                </Typography>
              )}
            </div>
          </Paper>

          <Paper className={classes.paper}>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              disabled={
                !underlying.props.value ||
                !strike.props.value ||
                !volatility.props.value ||
                !expiry.props.value ||
                !dividendRate.props.value ||
                !riskFreeRate.props.value
              }
            >
              Submit
            </Button>
            {/* <Typography gutterBottom variant='subtitle1'>
              submit button
            </Typography> */}
          </Paper>
        </Grid>
      </form>
      {/* {optionTVs && <FormInputTable optionTVs={optionTVs} />} */}
      {optionTVs && <Greeks greeks={optionTVs} />}
      {formInputs && <FormInputTable formInputs={formInputs} />}
    </div>
  )
}
