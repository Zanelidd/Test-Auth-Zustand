import { create } from "zustand";
import { User } from "../types/types";

type UserStore = {
  email: string;
  password: string;
  user: User;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  email: "",
  password: "",
  user: {
    id: NaN,
    lastname: "",
    firstname: "",
    email: "",
    profile_picture: "",
    token: "",
  },
  updateEmail: (email: string) => {
    set({ email: email });
  },
  updatePassword: (password: string) => {
    set({ password: password });
  },
}));
