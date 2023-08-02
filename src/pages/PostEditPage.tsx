import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppEditor from "../libs/AppEditor";

const PostEditPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  return (
    <PostEditPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostEditBox>
        <div className="title-box">
          <input type="text" className="title-input" />
        </div>
        <div className="tags-box"></div>
        <div className="content-box">
          <AppEditor />
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

    .title-input {
      width: 100%;
      height: 40px;
      padding: 0px 10px;
      box-sizing: border-box;
      border: 1px solid lightgray;
      border-radius: 5px;
    }
  }

  .tags-box {
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
  }

  .content-box {
    padding: 10px 0;
    height: 400px;
  }
`;

export default PostEditPage;
