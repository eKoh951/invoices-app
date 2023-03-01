  import React from "react";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themes } from "../../../packages/ui/themes";


export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;


  const theme = useMemo(() => themes[themeKey] || themes["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
      showName: true,
    },
  },
}