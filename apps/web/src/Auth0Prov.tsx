import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Auth0ProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  // .env will be used later, for now it is left like this to make it easier for you to test this (For Erick)

  return (
    <Auth0Provider
      domain="asure.us.auth0.com"
      clientId="05jHl8yUZNf5F20imuoWLfi5X9eBl3Vy"
      authorizationParams={{
        redirect_uri: "http://127.0.0.1:5173/",
        audience: "invoice-api",
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
