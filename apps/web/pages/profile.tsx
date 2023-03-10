import type { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import LoginLogout from "../../../packages/ui/LoginLogout";
import Image from "next/image";

const Profile: NextPage = (props) => {
  return (
    <div>
      <h1>Your Profile</h1>
      <LoginLogout />
      <div>
        <h2>Hola {props.user.name}</h2>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
};

export default withPageAuthRequired(Profile);

// i just erase the line with the img tag because it was giving an error
