import styled from "styled-components";
import PrevStep from "./PrevStep";
import RenderMap from "../google/RenderMap";
import Days from "../days/Days";
import Schedules from "../schedules/Schedules";
import { planSelector } from "../../store/planSelector";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
type Props = {
  plan_id: number;
};
const PlanDetailContainer = ({ plan_id }: Props) => {
  const navigate = useNavigate();
  const planData = useRecoilValue(planSelector(plan_id));
  console.log(planData);

  return (
    <>
      <PrevStep onPrev={() => navigate(-1)} />
      <ScheduleBlock>
        <MapBox>
          <RenderMap planData={planData} />
        </MapBox>
        <ScheduleBox>
          <Days planData={planData} />
          <Schedules planData={planData} />
        </ScheduleBox>
      </ScheduleBlock>
    </>
  );
};

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

export default PlanDetailContainer;
