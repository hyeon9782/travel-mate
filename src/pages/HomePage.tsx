import styled from "styled-components";
import Posts from "../components/posts/Posts";
import InfiniteScroll from "../components/common/InfiniteScroll";
import { fetchPostsAPI } from "../api/post";

const HomePage = () => {
  return (
    <HomePageBlock>
      <h1 className="title">동행 모집 목록</h1>
      <InfiniteScroll fetchData={fetchPostsAPI}>
        <Posts />
      </InfiniteScroll>
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main`
  height: calc(100% - 42.8px);
  overflow: auto;
  .titie {
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
  }
`;

export default HomePage;
