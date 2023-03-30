import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { AppProps } from "next/app";
import { themes } from "../../../packages/ui/themes";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={themes[theme.palette.mode]}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
