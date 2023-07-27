import styled from "styled-components";
import { Post } from "../../types";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  return <PostItemBlock>{post.title}</PostItemBlock>;
};

const PostItemBlock = styled.div``;

export default PostItem;
