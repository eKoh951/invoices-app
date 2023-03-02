import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../pages/utils/Loading";

function AuthGuard({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });
  return <Component />;
}

export default AuthGuard;
