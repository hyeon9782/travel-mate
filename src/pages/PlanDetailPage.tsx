import styled from "styled-components";
import RenderMap from "../components/google/RenderMap";
import Days from "../components/days/Days";
import Schedules from "../components/schedules/Schedules";
import { useLocation, useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import { useSetRecoilState } from "recoil";
import { planState } from "../store/planState";
import { useEffect } from "react";

const PlanDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planData = location?.state?.planData || null;
  const setPlanData = useSetRecoilState(planState);

  useEffect(() => {
    setPlanData({ ...planData });
  }, []);

  return (
    <PlanDetailPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <ScheduleBlock>
        <MapBox>
          <RenderMap planData={planData} />
        </MapBox>
        <ScheduleBox>
          <Days planData={planData} />
          <Schedules />
        </ScheduleBox>
      </ScheduleBlock>
    </PlanDetailPageBlock>
  );
};

const PlanDetailPageBlock = styled.section`
  height: 100%;
`;

const ScheduleBlock = styled.article`
  display: flex;
  flex-direction: column;
`;

const ScheduleBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 220px;
  padding: 0px 10px;
`;

const MapBox = styled.div`
  width: 100%;
  height: 200px;
`;

export default PlanDetailPage;
