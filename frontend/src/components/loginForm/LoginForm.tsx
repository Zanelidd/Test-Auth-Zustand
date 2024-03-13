import { FormEvent, useState } from "react";
import style from "./loginForm.module.css";

const LoginForm = () => {
  type loginForm = {
    username: string;
    password: string;
  };
  const [loginForm, setLoginForm] = useState<loginForm>({
    username: "",
    password: "",
  });

  const userInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };
  return (
    <form className={style.loginContainer} onSubmit={userInfo}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setLoginForm({ ...loginForm, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setLoginForm({ ...loginForm, password: e.target.value });
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
