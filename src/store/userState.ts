import { atom } from "recoil";
import { getLocalStorage } from "../utils/storage";

export const userState = atom({
  key: "userState",
  default: getLocalStorage("user"),
});
