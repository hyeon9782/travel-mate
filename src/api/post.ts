import { Post } from "../types";
import { posts } from "./index";

const fetchPostsAPI = async (pageParams = 1, category = "전체") => {
  return await posts.get(`/api/post?page=${pageParams}&category=${category}`);
};

const fetchPostsWithUserIdAPI = async (user_id: string) => {
  return await posts.get(`/api/post/user?userId=${user_id}`);
};

const fetchPostAPI = (post_id: string) => {
  return posts.get(`/api/post/${post_id}`);
};

const registPostAPI = async (post: Post) => {
  return await posts.post("/api/post", post);
};

const modifyPostAPI = (post_id: string, post: Post) => {
  return posts.put(`/api/post/${post_id}`, post);
};

const removePostAPI = (post_id: string) => {
  return posts.delete(`/api/post/${post_id}`);
};

export {
  fetchPostsAPI,
  fetchPostsWithUserIdAPI,
  fetchPostAPI,
  registPostAPI,
  modifyPostAPI,
  removePostAPI,
};
