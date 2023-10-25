import styled from "styled-components";
import PrevStep from "./PrevStep";
import RenderMap from "../google/RenderMap";
import Days from "../days/Days";
import Schedules from "../schedules/Schedules";
import { planSelector } from "../../store/planSelector";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import ShareButton from "../../libs/kakao/ShareButton";
import { useMemo } from "react";
type Props = {
  plan_id: number;
};
const PlanDetailContainer = ({ plan_id }: Props) => {
  const navigate = useNavigate();
  const planData = useRecoilValue(planSelector(plan_id));

  const url = import.meta.env.DEV
    ? `http://localhost:5173/plan/${plan_id}`
    : `https://travel-mate-eta.vercel.app/plan/${plan_id}`;

  const cities = useMemo(
    () => planData.cities.map((city) => city.city),
    [planData.cities]
  );

  return (
    <>
      <PlanHeader className="head">
        <PrevStep onPrev={() => navigate(-1)} />
        <ShareButton
          title={planData.title}
          description={cities.join(" ")}
          imageUrl="public/travel-mate-logo.png"
          buttonTitle="코스 구경하기"
          url={url}
        />
      </PlanHeader>
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

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default PlanDetailContainer;
