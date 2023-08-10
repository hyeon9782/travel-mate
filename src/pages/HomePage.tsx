import styled from "styled-components";
import PostsTab from "../components/posts/PostsTab";
import React, { useState, Suspense, useRef, useEffect } from "react";
import PostSkeleton from "../components/posts/PostSkeleton";

const Posts = React.lazy(() => import("../components/posts/Posts"));

const HomePage = () => {
  const targetRef = useRef(null);
  const [category, setCategory] = useState<string>("전체");
  const [page, setPage] = useState(1);

  const handleClick = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    console.log("이펙트");

    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);

      if (entry.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, option);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.disconnect();
    };
  }, [category]);

  return (
    <HomePageBlock>
      <PostsTab onClick={handleClick} category={category} />
      {Array.from({ length: page }, (_, i) => (
        <Suspense key={i} fallback={<PostSkeleton />}>
          <Posts category={category} page={page + 1} />
        </Suspense>
      ))}
      <div ref={targetRef} style={{ height: "10px" }}></div>
    </HomePageBlock>
  );
};

const HomePageBlock = styled.main`
  height: calc(100% - 42.8px);
  overflow: auto;
`;

export default HomePage;
