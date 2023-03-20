import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, red } from "@material-ui/core/colors";

import { AuthProvider } from "./state/auth";

import "./index.css";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900],
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
