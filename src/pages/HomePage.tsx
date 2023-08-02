import styled from "styled-components";
import Posts from "../components/posts/Posts";
import InfiniteScroll from "../components/common/InfiniteScroll";
import { fetchPostsAPI } from "../api/post";

const HomePage = () => {
  return (
    <HomePageBlock>
      <InfiniteScroll fetchData={fetchPostsAPI}>
        <Posts />
      </InfiniteScroll>
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main``;

export default HomePage;
