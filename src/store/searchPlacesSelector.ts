import { selectorFamily } from "recoil";
import { fetchPost } from "../service/post";

export const searchPlacesSelector = selectorFamily({
  key: "searchPlacesSelector",
  get: (post_id: string) => async () => {
    return await fetchPost(post_id);
  },
});
