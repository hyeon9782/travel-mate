import { selectorFamily } from "recoil";
import { fetchPosts } from "../service/post";
import { postsLoadState } from "./postsLoadState";

type Parameter = {
  page: number;
  category: string;
};

export const postsSelector = selectorFamily({
  key: "postsSelector",
  get:
    ({ page, category }: Parameter) =>
    async ({ get }) => {
      return await fetchPosts(page, category);
    },
});
