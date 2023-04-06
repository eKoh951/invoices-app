import * as React from "react";
import Head from "next/head";
import { themes } from "ui/themes";
import ResponsiveDrawer from "ui/NavBar";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
// import { League_Spartan } from "@next/font/google";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Next code was writtten to try to apply the Spartan font

// This is causing a bug, will comment it
// const Spartan = League_Spartan({
//   subsets: ["latin"],
//   weight: ["500", "700"],
// });

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ThemeProvider theme={themes.dark}>
      <CssBaseline />
      <ResponsiveDrawer window={undefined} />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}
