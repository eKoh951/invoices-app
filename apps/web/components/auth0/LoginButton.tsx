import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default LoginButton;
