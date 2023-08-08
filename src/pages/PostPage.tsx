import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import Button from "../components/common/Button";
import UserBox from "../components/user/UserBox";

const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postParam = location?.state?.post || null;
  const [post, setPost] = useState({
    title: "임시 제목입니다.",
    content: "임시 내용입니다.",
    plan_id: "0",
    user_id: "3",
  });
  const { title, content, plan_id, user_id, user_name } = post;

  useEffect(() => {
    setPost({ ...postParam });
  }, []);

  return (
    <PostPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostTitle>{title}</PostTitle>
      <UserBlock>
        <UserBox user_name={user_name} size="big" />
        <Button
          text="일정보기"
          onClick={() =>
            navigate(`/plan/${plan_id}`, { state: { plan_id: plan_id } })
          }
        />
      </UserBlock>
      <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent>
      <BtnBox></BtnBox>
    </PostPageBlock>
  );
};

const PostPageBlock = styled.main``;

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

const BtnBox = styled.div`
  padding: 10px;
`;

export default PostPage;
