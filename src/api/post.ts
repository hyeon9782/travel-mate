import { Post } from "../types";
import { posts } from "./index";

const fetchPostAPI = (page: number) => {
  return posts.get(`/api/post?page=${page}`);
};

const registPostAPI = (post: Post) => {
  return posts.post("/api/post", post);
};

const modifyPostAPI = (post_id: string, post: Post) => {
  return posts.put(`/api/post/${post_id}`, post);
};

const removePostAPI = (post_id: string) => {
  return posts.delete(`/api/post/${post_id}`);
};

export { fetchPostAPI, registPostAPI, modifyPostAPI, removePostAPI };
