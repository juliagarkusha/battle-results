import React, { useEffect } from "react";
import { createTheme, StyledEngineProvider } from '@mui/material/styles';
import { Theme } from '@mui/system';
import { blue, deepOrange } from '@mui/material/colors';

import Router from "../../../routes/Router";

import './App.scss';
import {ThemeProvider} from "@mui/material";

function App() {
  useEffect((): void => {
    document.title = 'battle-app';
  }, []);

  const theme: Theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#0059B2',
        main: blue[800],
        dark: '#0059B2',
        contrastText: '#fff',
      },
      background: {
        default: '#0A1929',
        paper: '#1D2332',
      },
      secondary: {
        main: '#242838',
      },
      error: {
        main: '#E71C59',
      },
      warning: {
        main: deepOrange[900],
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

  return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
  );
}

export default App;
