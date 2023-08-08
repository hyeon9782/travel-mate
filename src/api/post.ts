import { Post } from "../types";
import { posts } from "./index";

const fetchPostsAPI = (page: number, category: string) => {
  return posts.get(`/api/post?page=${page}&category=${category}`);
};

const fetchPostAPI = (post_id: string) => {
  return posts.get(`/api/post/${post_id}`);
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

export {
  fetchPostsAPI,
  fetchPostAPI,
  registPostAPI,
  modifyPostAPI,
  removePostAPI,
};
