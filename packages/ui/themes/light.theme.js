import { createTheme } from "@mui/material";
import { green, red, blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: green["A200"],
    },
    secondary: {
      main: red["A400"],
      
    },
    // background: {
    //   default: blue["800"],
    //   paper: blue["700"],
    // },
  },
});