import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <div>
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default SignupButton;
