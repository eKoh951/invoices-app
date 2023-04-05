import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { themes } from "../../../packages/ui/themes";
import createEmotionCache from "../src/createEmotionCache";
import { League_Spartan } from "@next/font/google";
import Home from "./page";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Next code was writtten to try to apply the Spartan font
const Spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  // Agrega un estado de React para almacenar la preferencia del tema
  const [themeMode, setThemeMode] = React.useState("light");

  // Cambia entre los temas light y dark en función del valor de themeMode
  const theme = themes[themeMode];

  // Función para alternar entre temas light y dark
  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Puedes pasar toggleTheme a los componentes que necesiten cambiar el tema */}
        <Component {...pageProps} toggleTheme={toggleTheme} />
        <Home />
      </ThemeProvider>
    </CacheProvider>
  );}