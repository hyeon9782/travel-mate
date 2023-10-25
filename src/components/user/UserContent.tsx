import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { EditIcon, PlusIcon, TrashIcon } from "../common/icons";
import PlanList from "../plan/PlanList";
import { fetchPlans, removePlan } from "../../service/plan";
import GoogleLogout from "../../libs/google/GoogleLogout";
import UserTab from "./UserTab";
import useDialogs from "../../hooks/useDialogs";
import { dialogs } from "../dialog/Dialogs";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPostsWithUserIdAPI, removePostAPI } from "../../api/post";

const UserContent = () => {
  const userData = useRecoilValue(userState);
  const { openDialog } = useDialogs();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  // const queryClient = useQueryClient();

  // 유저의 posts 조회 (나중에 plan 조회랑 같이 queries로 변경 or usePosts 커스텀 훅으로 응집도 높이기?)
  const { data: posts, refetch } = useQuery({
    queryKey: ["posts", userData.email],
    queryFn: () => fetchPostsWithUserIdAPI(userData.email),
    select: (res) => res.data,
  });

  // posts 삭제 (커스텀 훅으로 묶고 직관적 업데이트로 빠른 UI 수정 적용)
  const { mutate: deletePost } = useMutation({
    mutationFn: (post_id: string) => removePostAPI(post_id),
    onSuccess: () => {
      refetch();
    },
  });

  console.log(posts);

  useEffect(() => {
    if (userData.email) {
      fetchPlans(userData.email, setPlans);
    }
  }, [userData.email]);

  const handleClickDelete = (event: MouseEvent, plan_id: number) => {
    event.stopPropagation();
    openDialog(dialogs.ConfirmDialog, {
      onSubmit: async () => {
        await removePlan(event, plan_id);
        await fetchPlans(userData.email, setPlans);
      },
      title: "여행 일정을 삭제하시겠습니까?",
      content: "삭제한 일정은 복구할 수 없습니다.",
    });
  };

  return (
    <>
      {!userData.email ? (
        <LoginBox>
          <Link to={"/login"}>
            <span>로그인</span>
          </Link>
        </LoginBox>
      ) : (
        <>
          <ProfileBox>
            <Profile />
          </ProfileBox>
          <UserBox>
            <CreatePlan onClick={() => navigate("/plan")}>
              <div className="icon-box">
                <PlusIcon />
              </div>
              <div className="text-box">
                <div className="main">여행 일정 만들기</div>
                <div className="sub">새로운 여행을 떠나보세요.</div>
              </div>
            </CreatePlan>
            {/* <UserTab /> */}
            <PlanBox>
              <div className="text-box">여행 코스</div>
              <PlanList plans={plans} onDelete={handleClickDelete} />
            </PlanBox>
            <PostBox>
              <div className="post-title">포스팅</div>
              <div>
                {posts?.map((post) => (
                  <div key={post.post_id} className="post-item">
                    {post.title}
                    <div className="icon-box">
                      <EditIcon
                        onClick={() => navigate(`/post/edit/${post.post_id}`)}
                      />
                      <TrashIcon onClick={() => deletePost(post.post_id)} />
                    </div>
                  </div>
                ))}
              </div>
            </PostBox>
          </UserBox>
          <GoogleLogout />
        </>
      )}
    </>
  );
};

const LoginBox = styled.div`
  font-size: 1.5rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
`;

const UserBox = styled.div``;

const PlanBox = styled.div`
  .text-box {
    padding: 20px 0;
  }
`;

const PostBox = styled.div`
  .post-title {
    padding: 20px 0;
  }
  .post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;

    .icon-box {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      gap: 20px;
    }
  }
`;

const CreatePlan = styled.div`
  display: flex;
  align-items: center;
  background-color: #faf9fc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 30px;

  .icon-box {
    border-radius: 50%;
    background-color: blue;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;
  }

  .text-box {
    padding-left: 10px;
    .main {
      font-size: 1rem;
      padding-bottom: 5px;
    }

    .sub {
      font-size: 0.8rem;
      color: gray;
    }
  }
`;

export default UserContent;
