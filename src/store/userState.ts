import { atom } from "recoil";
import { User } from "../types";

export const userState = atom<User>({
  key: "userState",
  default: {
    email: "",
    name: "",
    picture: "",
    family_name: "",
    given_name: "",
  },
});
