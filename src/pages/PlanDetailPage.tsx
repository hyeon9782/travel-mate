import styled from "styled-components";
import RenderMap from "../components/google/RenderMap";
import Days from "../components/days/Days";
import Schedules from "../components/schedules/Schedules";
import { useLocation, useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";

import { useEffect, useState } from "react";
import { fetchPlanDetail } from "../service/plan";
import { Plan } from "../types";
import { INITIAL_DATA } from "./PlanPage";

const PlanDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan_id = location?.state?.plan_id;
  const [plan, setPlan] = useState<Plan>(INITIAL_DATA);

  useEffect(() => {
    fetchPlanDetail(plan_id, setPlan);
  }, []);

  if (Object.keys(plan).length === 0) return <></>;

  return (
    <PlanDetailPageBlock>
      <PrevStep onPrev={() => navigate(-1)} />
      <ScheduleBlock>
        <MapBox>
          <RenderMap planData={plan} />
        </MapBox>
        <ScheduleBox>
          <Days planData={plan} />
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
