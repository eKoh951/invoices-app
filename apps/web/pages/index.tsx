import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <div>
        <a href="/api/auth/login">Login</a>
      </div>
      <div>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </div>
  );
}
