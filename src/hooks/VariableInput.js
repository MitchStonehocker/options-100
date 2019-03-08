// src/components/useVariableInput.js

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './useStyles'

export default function VariableInput ({
  varName,
  varSymbol,
  defaultValue,
  validate,
  regex
}) {
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState(null)
  const classes = useStyles()

  function handleChange (e) {
    setValue(e.target.value)
    setError(null) // hide error on input
  }

  function handleBlur () {
    handleValidate()
  }

  function handleValidate () {
    const valid = validate && validate(value, regex)
    setError(!valid)
    return valid
  }

  return (
    <TextField
      className={classes.textField}
      label={`${varName} (${varSymbol})`}
      name={`${varName}`}
      type='number'
      // validate
      value={value}
      onChange={handleChange}
      margin='normal'
      variant='outlined'
      required
    />
  )
}

// import { useState } from 'react'
// import { makeStyles } from '@material-ui/styles'

// export function useInput (name, defaultValue, validate, regex) {
//   const [value, setValue] = useState(defaultValue)
//   const [error, setError] = useState(null)

//   function handleChange (e) {
//     setValue(e.target.value)
//     setError(null) // hide error on input
//   }

//   function handleBlur () {
//     handleValidate()
//   }

//   function handleValidate () {
//     const valid = validate && validate(value, regex)
//     setError(!valid)
//     return valid
//   }

//   return {
//     props: {
//       name,
//       value,
//       onChange: handleChange,
//       onBlur: handleBlur,
//       error
//     },
//     validate: handleValidate
//   }
// }
