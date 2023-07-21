import AppPanel from "../common/AppPanel";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userState";
import { PlusIcon } from "../common/icons";
import PlanList from "../plan/PlanList";
import { useEffect } from "react";
import { fetchPlan, fetchPlanDetail } from "../../service/plan";
import { useState } from "react";

const UserPanel = (props) => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlan("0", setPlans);
  }, []);

  return (
    <UserPanelBlock>
      <AppPanel {...props}>
        {!user.email ? (
          <LoginBox>
            <Link to={"/login"}>로그인</Link>
          </LoginBox>
        ) : (
          <ProfileBox>
            <Profile />
          </ProfileBox>
        )}
        <UserBox>
          <UserMenu>내 여행</UserMenu>
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
            <PlanList list={plans} />
          </PlanBox>
        </UserBox>
      </AppPanel>
    </UserPanelBlock>
  );
};

const UserPanelBlock = styled.div``;

const LoginBox = styled.div`
  font-size: 1.5rem;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
`;

const UserBox = styled.div``;

const UserMenu = styled.div`
  padding: 20px 0;
`;

const PlanBox = styled.div`
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

export default UserPanel;
