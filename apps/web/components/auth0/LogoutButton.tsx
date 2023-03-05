import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default LogoutButton;
