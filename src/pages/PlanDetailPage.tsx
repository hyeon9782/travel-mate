import styled from "styled-components";
import RenderMap from "../components/google/RenderMap";
import Days from "../components/days/Days";
import Schedules from "../components/schedules/Schedules";
import { useLocation, useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import { useEffect } from "react";
import { fetchPlanDetail } from "../service/plan";
import { useRecoilState } from "recoil";
import { planState } from "../store/planState";

const PlanDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan_id = location?.state?.plan_id;

  const [planData, setPlanData] = useRecoilState(planState);

  useEffect(() => {
    fetchPlanDetail(plan_id, setPlanData);

    return () => {
      setPlanData({});
    };
  }, [plan_id, setPlanData]);

  if (Object.keys(planData).length === 0) return <></>;

  return (
    <PlanDetailPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <ScheduleBlock>
        <MapBox>
          <RenderMap planData={planData} />
        </MapBox>
        <ScheduleBox>
          <Days planData={planData} />
          <Schedules planData={planData} setPlanData={setPlanData} />
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
