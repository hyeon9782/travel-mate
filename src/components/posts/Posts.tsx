import styled from "styled-components";
import { Post } from "../../types";
import PostItem from "./PostItem";
type Props = {
  data: Post[];
};
const Posts = ({ data }: Props) => {
  return (
    <PostsBlock>
      {data && data.map((post) => <PostItem key={post.post_id} post={post} />)}
    </PostsBlock>
  );
};

const PostsBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Posts;
