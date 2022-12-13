import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

interface Props {}

const Signin: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="yoon@email.com"
          value={userInfo.email}
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <input
          type="password"
          placeholder="*******"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Signin;
