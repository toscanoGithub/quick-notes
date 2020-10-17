import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Create from './Create';
import Display from './Display';
import {
  ThemeProvider,
  createMuiTheme,

} from '@material-ui/core/styles';

import {
  amber, deepOrange, green, lightGreen, red, lightBlue
} from "@material-ui/core/colors";
import { Typography } from '@material-ui/core';

/* RECORD THEME COLORS
#1B272E 
*/
const newLightGreen = lightGreen['A100'];


const customTheme = createMuiTheme({
// theme settings
  palette: {
    // type: 'dark',
    primary: {
      main: "#545F67"
    },
    secondary: {
      //light: "",
      main: "#ACB6BF",
      // dark: "",
      // contrastText: "#BBD979"
    },
    error: amber,
    warn: amber,
    info: lightBlue,
    success: {
      main: "#BBD979"
    }
  },

  typography: {
    h1: {
      marginTop:"1rem !important", color: "#ECECEC", fontSize:"0.8rem !important", fontWeight: "normal", lineHeight: "1.7"
    },
    
    
    body1: {
      color: "#ECECEC", fontSize:"1rem !important", fontFamily: '"Roboto",sans-serif !important'
    },
    body2: {
      color:"#ECECEC", fontSize:"1rem !important", fontFamily: '"Roboto",sans-serif !important', fontWeight: "100 !important"
    },

    body3: {
      color:"red !important", fontSize:"1rem !important", fontFamily: '"Roboto",sans-serif !important', fontWeight: "100 !important"
    },

  }
})



function App() {
  return (
    <ThemeProvider theme={customTheme} >
    <div className="app">
      <Typography variant="body3" component="h1">Quick Notes</Typography>
        <Home />
      </div>
      </ThemeProvider>
  );
}

export default App;
