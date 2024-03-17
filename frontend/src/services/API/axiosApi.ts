import axios from "axios";
import endpoint from "./endpoints";
import { User } from "../types/types";

const options = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
};
const instance = axios.create({
  ...options,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const api = {
  auth: {
    login: (form: object): Promise<User> => {
      return instance.post(endpoint.auth.login, form);
    },

    register: (form: object): Promise<User> => {
      return instance.post(endpoint.auth.register, form);
    },
  },
};

export default api;
