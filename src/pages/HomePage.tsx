import styled from "styled-components";
import Posts from "../components/posts/Posts";
import { useEffect, useState } from "react";
import { fetchPosts } from "../service/post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(setPosts);
  }, []);
  return (
    <HomePageBlock>
      <Posts posts={posts} />
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main``;

export default HomePage;
