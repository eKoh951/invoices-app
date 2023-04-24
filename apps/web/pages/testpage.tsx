import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "ui";
import { TextInput } from "ui/inputText";
import * as React from "react";

const TestPage = () => {
  const { user, isLoading,  } = useUser();
  const [inputText, setInputText] = React.useState("");

  if (isLoading) return <div>adad</div>;

  const apiMethod = async () => {
    const resToken = await fetch("api/getAccessToken");

    const { accessToken } = await resToken.json();
    console.log(accessToken);

    const formData = new FormData();
    formData.append("nickname", inputText);

    const res = await fetch("http://localhost:8000/api/v1/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    const data = await res.json();

    return data;
  };

  const guardarData = (e: any) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <h1>{user?.nickname}</h1>
      <form>
        <input type="text" onChange={guardarData}></input>
        <Button onClick={apiMethod}>Apushale</Button>
      </form>
    </div>
  );
};

export default TestPage;
