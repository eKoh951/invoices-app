import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { themes } from "ui/themes";
import Layout from "ui/Layout";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ThemeContext from "ui/ThemeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {

  const [theme, setThemes] = useState(themes.dark)
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  const toggleTheme = () => {
    setThemes(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={emotionCache}>
        <UserProvider>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeContext.Provider value={{ toggleTheme }}>
          <Layout >
            <Component {...pageProps}  />
          </Layout>
          </ThemeContext.Provider>
          
        </UserProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

