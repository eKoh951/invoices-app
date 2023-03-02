import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

function Profile() {
  const {
    user: { nickname, email },
  } = useAuth0();

  return (
    <div>
      <Navbar />
      <div>
        <h1>Profile Panel</h1>
        <div>
          <div>
            <h6>{nickname}</h6>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
