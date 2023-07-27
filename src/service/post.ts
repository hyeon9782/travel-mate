import axios from "axios";
import { Post } from "../types";

const fetchPosts = async () => {
  try {
    const res = await axios.get("/api/posts");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const createPost = (post: Post) => {
  try {
    const res = axios.post(`/api/posts`, post);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const modifyPost = (post_id: string, post: Post) => {
  try {
    const res = axios.put(`/api/posts/${post_id}`, post);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const removePost = (post_id: string) => {
  try {
    const res = axios.delete(`/api/posts/${post_id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export { fetchPosts, createPost, modifyPost, removePost };
