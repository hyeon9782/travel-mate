import styled from "styled-components";
import Posts from "../components/posts/Posts";
import { useEffect, useState, useRef } from "react";
import { fetchPosts } from "../service/post";
import InfiniteScroll from "../components/common/InfiniteScroll";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import axios from "axios";

const HomePage = () => {
  const targetRef = useRef(null);
  const [hasMoreData, setHasMoreData] = useState(true);
  // 페이지네이션된 데이터를 가져오는 비동기 함수
  const fetchData = async (page: number) => {
    const response = await axios.get(
      `http://localhost:4000/api/post?page=${page}`
    );
    return response.data;
  };

  return (
    <HomePageBlock>
      {/* <Posts posts={data} loading={loading} /> */}
      <div ref={targetRef}></div>
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main``;

export default HomePage;
