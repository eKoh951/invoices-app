import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
