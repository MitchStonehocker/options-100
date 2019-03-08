// src/hooks/useSubmit.js

import { useState } from 'react'
// import axios from 'axios'

// custom hook for form submit
export function useSubmit (inputs, formSuccess) {
  // set up the state for the error component
  const [errorItems, setErrorItems] = useState(null)
  // const [optionTVs, setOptionTVs] = useState(null)

  // handle submit
  function handleSubmit (e) {
    e.preventDefault() // prevent page refresh
    // console.log('>>>-useSubmit-handleSubmit-inputs->', inputs)
    // blur everything to validate again
    const errorItems = inputs.filter(input => !input.validate())
    // console.log('>>>-useSubmit-handleSubmit-errorItems->', errorItems)
    setErrorItems(errorItems)
    if (errorItems && errorItems.length === 0) {
      formSuccess &&
        formSuccess(
          inputs.map(({ props: { name, symbol, value } }) => ({
            name,
            symbol,
            value
          }))
        )
    }
  }

  return {
    props: {
      onSubmit: handleSubmit
    },
    errorItems
  }
}
