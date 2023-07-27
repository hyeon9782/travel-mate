import styled from "styled-components";
import { Post } from "../../types";
import PostItem from "./PostItem";
type Props = {
  posts: Post[];
};
const Posts = ({ posts }: Props) => {
  return (
    <PostsBlock>
      {posts &&
        posts.map((post) => <PostItem key={post.post_id} post={post} />)}
    </PostsBlock>
  );
};

const PostsBlock = styled.div``;

export default Posts;
