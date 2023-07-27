import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { PlusIcon } from "../common/icons";
import PlanList from "../plan/PlanList";
import { fetchPlan } from "../../service/plan";
import GoogleLogout from "../../libs/google/GoogleLogout";

const UserContent = () => {
  const [userData, setUserData] = useRecoilState(userState);
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if (userData.email) {
      fetchPlan("0", setPlans);
    }
  }, []);

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
            <PlanBox>
              <div className="text-box">지난 여행</div>
              <PlanList plans={plans} />
            </PlanBox>
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
  height: 350px;
  .text-box {
    padding: 20px 0;
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
