import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppEditor from "../libs/AppEditor";
import Button from "../components/common/Button";
import TagInput from "../components/tags/TagInput";
import { registPostAPI } from "../api/post";
import { Post } from "../types";

const PostEditPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

  const handleClick = () => {
    const formData: Post = {
      content,
      title,
      tags,
    };

    console.log(formData);

    registPostAPI(formData);
    alert("게시글을 등록했어요!");
    navigate(-1);
  };
  return (
    <PostEditPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <PostEditBox>
        <div className="title-box">
          <input
            type="text"
            className="title-input"
            placeholder="게시글 제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="tags-box">
          <TagInput tags={tags} setTags={setTags} />
        </div>
        <div className="content-box">
          <AppEditor content={content} setContent={setContent} />
        </div>
        <div className="btn-box">
          <Button text={"등록하기"} onClick={handleClick} size="small" />
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
    padding-bottom: 20px;
    height: 442px;
  }

  .btn-box {
    display: flex;
    justify-content: center;
  }
`;

export default PostEditPage;
