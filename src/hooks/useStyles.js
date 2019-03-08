// src/hooks/useStyles.js

import { makeStyles } from '@material-ui/styles'

// create a hook for classes objects
export const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      overflowX: 'auto',
      textAlign: 'center',
      margin: 1
      // height: '100vh'
      // minWidth: '400px',
      // minWidth: '200px',
      // width: '250px',
      // maxWidth: '450px',
      // height: '100px'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    paper: {
      padding: theme.spacing.unit * 1,
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      elevation: 5,
      margin: 1,
      color: theme.palette.text.primary
      // maxWidth: 1000,
      // square: false
    },
    card: {
      padding: theme.spacing.unit * 0,
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      elevation: 5,
      margin: 1,
      square: false
    },

    table: {
      padding: theme.spacing.unit * 0,
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 500,
      margin: 0
    },
    textField: {
      width: 150,
      margin: 1,
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 0
    },
    input: {
      width: 125,
      margin: 1,
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    dense: {
      marginTop: 1
    },
    menu: {
      width: 0
    },
    select: {
      maxHeight: 40,
      margin: 0
      // minWidth: 150
      // marginTop: theme.spacing.unit * 0,
      // marginBottom: theme.spacing.unit * 0
    },
    formControl: {
      margin: 1,
      minWidth: 150
      // marginTop: theme.spacing.unit * 0,
      // marginBottom: theme.spacing.unit * 0
    },
    margin: {
      margin: theme.spacing.unit
    }
  }),
  { withTheme: true }
)
