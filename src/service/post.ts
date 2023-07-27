import axios from "axios";
import { Post } from "../types";

const fetchPosts = async (setPosts: any) => {
  try {
    const res = await axios.get("http://localhost:4000/api/post");
    setPosts(res.data);
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
