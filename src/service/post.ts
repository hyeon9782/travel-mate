import axios from "axios";
import { Post } from "../types";
import { fetchPostsAPI } from "../api/post";

const fetchPosts = async (page: number, category: string) => {
  try {
    const res = await fetchPostsAPI(page, category);
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const createPost = (post: Post) => {
  try {
    const res = axios.post(`http://localhost:4000/api/post`, post);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const modifyPost = (post_id: string, post: Post) => {
  try {
    const res = axios.put(`http://localhost:4000/api/post/${post_id}`, post);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const removePost = (post_id: string) => {
  try {
    const res = axios.delete(`http://localhost:4000/api/post/${post_id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export { fetchPosts, createPost, modifyPost, removePost };
