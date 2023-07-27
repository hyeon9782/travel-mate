import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import Button from "../components/common/Button";

const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postParam = location?.state?.post || null;
  const [post, setPost] = useState({
    title: "임시 제목입니다.",
    content: "임시 내용입니다.",
    plan_id: "0",
  });
  const { title, content, plan_id } = post;

  useEffect(() => {
    setPost({ ...postParam });
  }, []);

  return (
    <PostPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <BtnBox>
        <Button
          text="일정보기"
          onClick={() =>
            navigate(`/plan/${plan_id}`, { state: { plan_id: plan_id } })
          }
        />
      </BtnBox>
    </PostPageBlock>
  );
};

const PostPageBlock = styled.main``;

const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const BtnBox = styled.div`
  padding: 10px;
`;

export default PostPage;
