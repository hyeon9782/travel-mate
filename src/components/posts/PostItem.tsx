import styled from "styled-components";
import { Post } from "../../types";
import PostTag from "./PostTag";
import { useNavigate } from "react-router-dom";
import { ViewIcon } from "../common/icons";
import UserBox from "../user/UserBox";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const { title, tags, post_id, category, deadline, user_name, views } = post;
  const navigate = useNavigate();
  return (
    <PostItemBlock
      onClick={() => navigate(`/post/${post_id}`, { state: { post } })}
    >
      <div className="post_head">
        <div className="category">{category}</div>
        <div className="deadline">마감일ㅣ{deadline}</div>
      </div>
      <div className="title">{title}</div>
      <div className="tags">
        {tags.map((tag, index) => (
          <PostTag key={index} tag={tag} />
        ))}
      </div>
      <div className="post_footer">
        <UserBox user_name={user_name} />
        <div className="views">
          <ViewIcon />
          <span className="number">{views}</span>
        </div>
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
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .tags {
    display: flex;
    gap: 5px;
  }

  .post_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .category {
    font-size: 0.9rem;
    border-radius: 5px;
    background-color: lightgray;
    padding: 5px 10px;
  }

  .deadline {
    font-size: 0.9rem;
    color: gray;
  }

  .post_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .views {
      display: flex;
      align-items: center;
      font-size: 1rem;
      .number {
        font-size: 0.8rem;
        padding-left: 5px;
      }
    }
  }
`;

export default PostItem;
