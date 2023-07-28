import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostEditPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  return (
    <PostEditPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostEditBox>
        <div className="title-box">
          <input type="text" />
        </div>
        <div className="tags-box"></div>
        <div className="content-box">
          <textarea cols={50} rows={20}></textarea>
        </div>
      </PostEditBox>
    </PostEditPageBlock>
  );
};

const PostEditPageBlock = styled.main``;

const PostEditBox = styled.div`
  padding: 10px;

  .title-box {
    padding-bottom: 10px;
  }

  .tags-box {
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
  }

  .content-box {
    padding: 10px 0;
  }
`;

export default PostEditPage;
