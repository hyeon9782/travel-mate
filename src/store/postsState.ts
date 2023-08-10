import { atom } from "recoil";
import { Post } from "../types";

export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
});
