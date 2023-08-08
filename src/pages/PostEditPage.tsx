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

  const [postData, setPostData] = useState<Post>({
    title: "",
    content: "",
    tags: [],
    deadline: "2023-03-03",
    category: "동행 모집",
  });

  const handleChange = (event: any) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setPostData((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleClick = (postData: Post) => {
    console.log(postData);

    registPostAPI(postData);
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
            name="title"
            placeholder="게시글 제목을 입력해주세요."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="info-box">
          <div className="category-box">
            <label htmlFor="category" className="category-label">
              카테고리
            </label>
            <select
              className="category"
              id="category"
              name="category"
              value={postData.category}
              onChange={handleChange}
            >
              <option value="동행 모집">동행 모집</option>
              <option value="여행 질문">여행 질문</option>
            </select>
          </div>
          <div className="deadline-box">
            <label htmlFor="deadline" className="deadline-label">
              모집 마감일
            </label>
            <input
              type="date"
              className="deadline"
              name="deadline"
              data-placeholder="모집 마감일"
              onChange={handleChange}
              value={postData.deadline}
            />
          </div>
        </div>
        <div className="tags-box">
          <TagInput tags={postData.tags} onChange={handleChange} />
        </div>
        <div className="content-box">
          <AppEditor content={postData.content} setContent={handleChange} />
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

  .info-box {
    display: flex;
    gap: 10px;
    font-size: 0.9rem;
    .category-box {
      width: 50%;

      .category-label {
      }

      .category {
        width: 100%;
        height: 30px;
        margin: 10px 0;
      }
    }

    .deadline-box {
      width: 50%;

      .deadline-label {
      }
      .deadline {
        width: 100%;
        height: 30px;
        margin: 10px 0;
      }
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
