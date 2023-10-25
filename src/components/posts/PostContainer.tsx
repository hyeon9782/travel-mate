import styled from "styled-components";
import PrevStep from "../plan/PrevStep";
import UserBox from "../user/UserBox";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postSelector } from "../../store/postSelector";
type Props = {
  post_id: string;
};
const PostContainer = ({ post_id }: Props) => {
  const navigate = useNavigate();

  const post = useRecoilValue(postSelector(post_id));
  const { title, content, plan_id, user_name } = post;
  return (
    <div>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostTitle>{title}</PostTitle>
      <UserBlock>
        <UserBox user_name={user_name} size="big" />
        <Button text="일정보기" onClick={() => navigate(`/plan/${plan_id}`)} />
      </UserBlock>
      <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent>
    </div>
  );
};

const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;

  .user-box {
    display: flex;
    align-items: center;
    .profile {
      border-radius: 50%;
      background-color: gray;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;

const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;

  border-bottom: 1px solid lightgray;
`;

const PostContent = styled.div`
  padding: 10px;
  min-height: 400px;
  box-sizing: border-box;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.6em;
  }
`;

export default PostContainer;
