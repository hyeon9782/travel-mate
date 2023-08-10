import styled from "styled-components";
import PostItem from "./PostItem";
import { useEffect, useRef, useState } from "react";
import { Post } from "../../types";
import { fetchPosts } from "../../service/post";
import { useRecoilValue } from "recoil";
import { postsSelector } from "../../store/postsSelector";
type Props = {
  page: number;
  category: string;
};
const Posts = ({ page, category }: Props) => {
  const posts = useRecoilValue(postsSelector({ page, category }));

  return (
    <PostsBlock>
      {posts.map((post: Post) => (
        <PostItem key={post.post_id} post={post} />
      ))}
    </PostsBlock>
  );
};

const PostsBlock = styled.div`
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Posts;
