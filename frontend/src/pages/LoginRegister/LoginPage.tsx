import { FormEvent } from "react";
import api from "../../services/API/axiosApi";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { formToJSON } from "axios";

const LoginPage = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const form = formToJSON(formData);

  const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.auth
      .login(formToJSON(formData))
      .then((res) => {
        ({ user: res });
      })
      .catch((err) => console.error(err));
  };

  console.log(form);

  return (
    <form className={style.loginContainer} onSubmit={submitLogin}>
      <input
        type="text"
        placeholder="Email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        onChange={(e) => {
          formData.set("email", e.target.value);
        }}
      />
      <input
        type="Password"
        placeholder="Password"
        onChange={(e) => {
          formData.set("password", e.target.value);
          console.log(formData.getAll("email"));
        }}
      />
      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </form>
  );
};

export default LoginPage;
