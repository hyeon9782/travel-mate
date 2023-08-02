import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppEditor from "../libs/AppEditor";
import Button from "../components/common/Button";
import TagInput from "../components/tags/TagInput";

const PostEditPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  return (
    <PostEditPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostEditBox>
        <div className="title-box">
          <input
            type="text"
            className="title-input"
            placeholder="게시글 제목을 입력해주세요."
          />
        </div>
        <div className="tags-box">
          <TagInput />
        </div>
        <div className="content-box">
          <AppEditor />
        </div>
        <div className="btn-box">
          <Button
            text={"등록하기"}
            onClick={() => console.log("여기")}
            size="small"
          />
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
      outline: none;
    }
  }

  .tags-box {
    box-sizing: border-box;
  }

  .content-box {
    padding-top: 10px;
    padding-bottom: 30px;
    height: 442px;
  }

  .btn-box {
    display: flex;
    justify-content: center;
  }
`;

export default PostEditPage;
