import { atom } from "recoil";

export const postsLoadState = atom({
  key: "postsLoadState",
  default: { page: 1, isCompleted: false },
});
