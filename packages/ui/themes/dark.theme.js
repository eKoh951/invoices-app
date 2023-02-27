import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#252945",
    },
    secondary: {
      main: cyan["A400"],
      
    },
    background: {
      default: "#141625",
    },
  },
});