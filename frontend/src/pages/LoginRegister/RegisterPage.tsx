import { FormEvent } from "react";
import api from "../../services/API/axiosApi";
import style from "./login.module.css";
import { formToJSON } from "axios";

const Register = () => {
  const formData = new FormData();

  const submitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.auth
      .register(formToJSON(formData))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className={style.loginContainer} onSubmit={submitRegister}>
      <input
        type="text"
        placeholder="Email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        onChange={(e) => {
          formData.set("email", e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          formData.set("password", e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password Confirmation"
        onChange={(e) => {
          formData.set("passwordBis", e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Firstname"
        onChange={(e) => {
          formData.set("firstname", e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Lastname"
        onChange={(e) => {
          formData.set("lastname", e.target.value);
        }}
      />

      <button type="submit">Incription </button>
    </form>
  );
};

export default Register;
