import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Auth0ProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

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
