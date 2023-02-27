import { createTheme } from "@mui/material";
import { green, red, blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    softBlue: {
      main: "#7C5DFA",
      contrastText: "white",
    },
    secondary: {
      main: "#9277FF",
    },
    softRed: {
      main: "#EC5757",
      contrastText: "white",
    },
    veryLightRed: {
      main: "#FF9797",
    },
    lightGrayishBlue: {
      main: "#F9FAFE",
      contrastText: "#7E88C3",
    },
    lightGreyishBlueHover: {
      main: "#DFE3FA",
    },
    veryDarkGrayishBlue: {
      main: "#373B53",
      contrastText: "#888EB0",
    },
    white: {
      main: "white",
    },
    mostlyBlack: {
      main: "#0C0E16",
    },
    desaturatedBlue: {
      main: "#1E2139",
    },
    slightlyDesaturatedBlue: {
      main: "#7E88C3",
    },
    darkGreyishBlue: {
      main: "#888EB0",
    },
    pureOrange: {
      main: "#FF8F00",
    },
    limeGreen: {
      main: "#33D69F",
    },
    background: {
      default: "#F8F8FB",
    },
  },
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "36px",
      letterSpacing: "-1px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "22px",
      letterSpacing: "-0.63px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "-0.8px",
    },
    h4: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
    },
    body1: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
    },
    body2: {
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "-0.23px",
    },
    subtitle1: {
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "-0.23px",
      color: "#7E88C3",
    },
    overline: {
      fontSize: "120px",
      fontWeight: "700",
      lineHeight: "137px",
      letterSpacing: "-3.75px",
    },
    caption: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "39px",
      letterSpacing: "8px",
      color: "#888EB0",
    },
    button: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
      textTransform: "none",
    },
    poster: {
      color: "white",
    },
    fontFamily: "League Spartan",
    fontWeightMedium: "500",
    fontWeightBold: "700",
    textTransform: "none",
  },
});
