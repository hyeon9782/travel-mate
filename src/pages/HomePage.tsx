import styled from "styled-components";
import Posts from "../components/posts/Posts";
import { fetchPostsAPI } from "../api/post";
import PostsTab from "../components/posts/PostsTab";
import { useEffect, useRef, useState } from "react";
import { Post } from "../types";

const HomePage = () => {
  const targetRef = useRef(null);
  const pageRef = useRef(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState(true); // 추가된 상태
  const [category, setCategory] = useState<string>("전체");

  const loadNewCategory = async (category: string) => {
    setLoading(true);
    pageRef.current = 1; // 페이지 번호를 초기화
    setHasMoreData(true); // 로드 가능한 데이터 여부를 초기화
    setCategory(category);
    const newPosts = await fetchPostsAPI(pageRef.current, category);
    if (newPosts.data.length === 0) {
      setHasMoreData(false);
    } else {
      setPosts([...newPosts.data]);
      pageRef.current += 1;
    }
    setLoading(false);
  };

  useEffect(() => {
    const options = {
      root: null, // viewport를 기준으로 교차를 감지합니다.
      rootMargin: "0px",
      threshold: 0.1, // 요소의 10%가 뷰포트에 들어오면 교차로 판단합니다.
    };

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry.isIntersecting && !loading && hasMoreData) {
        // 추가된 조건
        setLoading(true);
        const newPosts = await fetchPostsAPI(pageRef.current, category);
        console.log(newPosts);

        if (newPosts.data.length === 0) {
          setHasMoreData(false); // 더 이상 데이터가 없을 때 상태 업데이트
        } else {
          setPosts((prevPosts) => [...prevPosts, ...newPosts.data]);
          pageRef.current += 1; // 다음 페이지를 위해 페이지 번호 업데이트
        }
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current); // 컴포넌트 언마운트 시 옵저버 해제
    };
  }, [loading, hasMoreData]);

  return (
    <HomePageBlock>
      <PostsTab onClick={loadNewCategory} category={category} />
      <Posts posts={posts} />
      <TargetBlock ref={targetRef}></TargetBlock>
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main`
  height: calc(100% - 42.8px);
  overflow: auto;
`;

const TargetBlock = styled.div`
  height: 10px;
`;

export default HomePage;
