import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { themes } from "../../../packages/ui/themes/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
