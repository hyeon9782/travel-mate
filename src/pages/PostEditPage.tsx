import styled from "styled-components";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppEditor from "../libs/AppEditor";
import Button from "../components/common/Button";
import TagInput from "../components/tags/TagInput";
import { registPostAPI } from "../api/post";
import { Plan, Post } from "../types";
import { useRecoilValue } from "recoil";
import { userState } from "../store/userState";
import { fetchPlans } from "../service/plan";
import { Container } from "../components/layout/Container";

const PostEditPage = () => {
  const navigate = useNavigate();

  const userData = useRecoilValue(userState);

  const [plans, setPlans] = useState<Plan[]>([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (userData.email) {
      fetchPlans(userData.email, setPlans);
    }
  }, [userData.email]);

  const [postData, setPostData] = useState<Post>({
    title: "",
    content: "",
    tags: [],
    deadline: "2023-03-03",
    category: "동행 모집",
    user_id: userData.email,
    user_name: userData.name,
    views: 0,
  });

  const handleChange = (event: any) => {
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
    <Container>
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
            <div className="plan-box">
              <label htmlFor="plan" className="plan-label">
                일정 선택
              </label>
              <select
                className="plan"
                id="plan"
                name="plan_id"
                onChange={handleChange}
              >
                {plans.map((plan) => (
                  <option value={plan.plan_id} key={plan.plan_id}>
                    {plan.cities[0].city} 여행
                  </option>
                ))}
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
            <TagInput setPostData={setPostData} />
          </div>
          <div className="content-box">
            <AppEditor content={content} setContent={setContent} />
          </div>
          <div className="btn-box">
            <Button
              text={"등록하기"}
              onClick={() => handleClick({ ...postData, content })}
              size="small"
            />
          </div>
        </PostEditBox>
      </PostEditPageBlock>
    </Container>
  );
};

const PostEditPageBlock = styled.main`
  height: 100%;
`;

const PostEditBox = styled.div`
  padding: 10px;
  height: calc(100% - 44.59px);
  box-sizing: border-box;

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
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .category-label {
      }

      .category {
        width: 100%;
        height: 30px;
        margin: 10px 0;
      }
    }

    .plan-box {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .plan {
        width: 100%;
        height: 30px;
        margin: 10px 0;
      }
    }

    .deadline-box {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

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
    height: 50%;
  }

  .btn-box {
    display: flex;
    justify-content: center;
    margin-top: 42px;
  }
`;

export default PostEditPage;
