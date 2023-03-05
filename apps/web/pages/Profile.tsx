import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "../components/Navbar";

function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <Navbar />
      <div>
        <h1>Profile Panel</h1>
        <div>
          <div>
            <h6>{user?.nickname}</h6>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
