import { selectorFamily } from "recoil";
import { fetchPost } from "../service/post";

export const postSelector = selectorFamily({
  key: "postSelector",
  get: (post_id: string) => async () => {
    return await fetchPost(post_id);
  },
});
