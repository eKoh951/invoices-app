import { useUser } from "@auth0/nextjs-auth0/client";

type Props = {};

const LoginLogout = ({}: Props) => {
  const { error, isLoading, user } = useUser();
  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loeading...</div>;
  }

  console.log({ user });

  return (
    <>
      {!user ? (
        <div>
          <a href="/api/auth/login">Login</a>
        </div>
      ) : (
        <div>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </>
  );
};

export default LoginLogout;
