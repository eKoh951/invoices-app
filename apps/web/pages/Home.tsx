import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { error } = useAuth0();

  if (error) {
    console.log(error);
    return <div>Error... {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}
