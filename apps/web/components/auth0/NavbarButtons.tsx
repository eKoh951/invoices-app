import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignupButton from "./SignupButton";
import { useAuth0 } from "@auth0/auth0-react";

function NavbarButtons() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="d-flex">
      {!isAuthenticated && (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default NavbarButtons;
