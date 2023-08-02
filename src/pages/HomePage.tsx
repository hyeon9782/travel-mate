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

const HomePageBlock = styled.main`
  height: calc(100% - 42.8px);
  overflow: auto;
`;

export default HomePage;
