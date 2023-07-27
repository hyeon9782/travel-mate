import styled from "styled-components";
import { Post } from "../../types";
import PostTag from "./PostTag";
import { useNavigate } from "react-router-dom";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const { title, tags, post_id } = post;
  const navigate = useNavigate();
  return (
    <PostItemBlock
      onClick={() => navigate(`/post/${post_id}`, { state: { post } })}
    >
      <div className="title">{title}</div>
      <div className="tags">
        {tags.map((tag, index) => (
          <PostTag key={index} tag={tag} />
        ))}
      </div>
    </PostItemBlock>
  );
};

const PostItemBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .tags {
    display: flex;
    padding-top: 10px;
    gap: 5px;
  }
`;

export default PostItem;
