// src/App.js

import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import VariableInputForm from './components/VariableInputForm'
import { Typography } from '@material-ui/core'

// import { useDate } from './hooks/useDate'
// import { useTime } from './hooks/useTime'

// import TestGrid from './components/test/TestGrid'

import './App.css'

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

export default function App () {
  // const time = useTime()
  // const date = useDate()

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <div>
            <h3>Header</h3>
            <Typography color='inherit'>{/* {date} - {time} */}</Typography>
          </div>
        </header>
        <main className='App-main'>
          {/* <TestGrid /> */}
          <VariableInputForm />
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    </ThemeProvider>
  )
}
