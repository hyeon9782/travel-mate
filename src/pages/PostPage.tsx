import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { lazy } from "react";
import { Suspense } from "react";
import PostDetailSkeleton from "../components/posts/PostDetailSkeleton";
import { Container } from "../components/layout/Container";

const PostContainer = lazy(() => import("../components/posts/PostContainer"));

const PostPage = () => {
  const location = useLocation();
  const { post_id } = location?.state || null;

  return (
    <Container>
      <PostPageBlock>
        <Suspense fallback={<PostDetailSkeleton />}>
          <PostContainer post_id={post_id} />
        </Suspense>
      </PostPageBlock>
    </Container>
  );
};

const PostPageBlock = styled.main``;

export default PostPage;
