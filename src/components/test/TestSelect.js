// src/test/TestSelect.js

import React from 'react'

// import { useTheme } from '@material-ui/styles'
import {
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem
} from '@material-ui/core'

import { useStyles } from '../../hooks/useStyles'

export function TestSelect ({ label, name }) {
  //   console.log('>>>-TestSelect-props->', props)
  const classes = useStyles()

  const [state, setState] = React.useState({
    range: '',
    //   name: 'range',
    labelWidth: 0
  })
  const inputLabelRef = React.useRef(null)

  const labelWidth = 50

  function handleChange (event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel ref={inputLabelRef} htmlFor={`outlined-${name}-simple`}>
        {label}
      </InputLabel>
      <Select
        className={classes.select}
        value={state.range}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name='range'
            id={`outlined-${name}-simple`}
          />
        }
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}
