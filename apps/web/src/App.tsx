import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "../pages/utils/Error";
import Loading from "../pages/utils/Loading";
import Home from "../pages/Home";
import Profile from "../pages/Profile"; // It´s a page   / creat it
import AuthGuard from "../components/auth0/AuthGuard";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<AuthGuard component={Profile} />} />
    </Routes>
  );
}

export default App;
