import styled from "styled-components";
import PostsTab from "../components/posts/PostsTab";
import React, {
  useState,
  Suspense,
  useRef,
  useEffect,
  useCallback,
} from "react";
import PostSkeleton from "../components/posts/PostSkeleton";
import { Container } from "../components/layout/Container";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import KakaoMap from "../libs/kakao/KakaoMap";

const Posts = React.lazy(() => import("../components/posts/Posts"));

const HomePage = () => {
  const targetRef = useRef(null);
  const [category, setCategory] = useState<string>("전체");
  const [page, setPage] = useState(1);

  const handleClick = useCallback((category: string) => {
    setCategory(category);
    setPage(1);
  }, []);

  const { observe } = useIntersectionObserver(() => {
    setPage((prevPage) => prevPage + 1);
  });

  useEffect(() => {
    // targetRef를 관찰 대상으로 추가
    if (targetRef.current) {
      observe(targetRef.current);
    }

    // 컴포넌트가 언마운트될 때 관찰을 중지하도록 클린업 함수 등록
    return () => {
      if (targetRef.current) {
        observe(targetRef.current)();
      }
    };
  }, [observe]);

  return (
    <Container>
      <HomePageBlock>
        <KakaoMap />
        <PostsTab onClick={handleClick} category={category} />
        {Array.from({ length: page }, (_, i) => (
          <Suspense key={i} fallback={<PostSkeleton />}>
            <Posts category={category} page={page} />
          </Suspense>
        ))}
        <div ref={targetRef} style={{ height: "10px" }}></div>
      </HomePageBlock>
    </Container>
  );
};

const HomePageBlock = styled.main`
  height: calc(100% - 42.8px);
  overflow: auto;
`;

export default HomePage;
