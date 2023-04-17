import * as React from "react";
import Head from "next/head";
import { themes } from "ui/themes";
import Layout from "ui/Layout";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ThemeProvider theme={themes.dark}>
      <CssBaseline />
      <CacheProvider value={emotionCache}>
        <UserProvider>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}
