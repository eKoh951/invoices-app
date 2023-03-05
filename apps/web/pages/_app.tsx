import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import type { AppProps } from "next/app";

import Error from "../src/utils/Error";
import Loading from "../src/utils/Loading";
import Home from "./index";
import Profile from "./profile";

import AuthGuard from "../components/auth0/AuthGuard";
import Auth0Prov from "../src/Auth0Prov";

function App({ Component, pageProps }: AppProps) {
  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <Auth0Prov>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<AuthGuard component={Profile} />} />
        </Routes>
      </Auth0Prov>
    </BrowserRouter>
  );
}

export default App;
