import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../../../packages/ui/themes/dark.theme";

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];