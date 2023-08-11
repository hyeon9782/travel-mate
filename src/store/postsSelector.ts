import { selectorFamily } from "recoil";
import { fetchPosts } from "../service/post";

type Parameter = {
  page: number;
  category: string;
};

export const postsSelector = selectorFamily({
  key: "postsSelector",
  get:
    ({ page, category }: Parameter) =>
    async () => {
      return await fetchPosts(page, category);
    },
});
