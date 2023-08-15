import styled from "styled-components";
import DoneButton from "./DoneButton";
import Days from "../days/Days";
import Schedules from "../schedules/Schedules";
import RenderMap from "../google/RenderMap";
import { Plan } from "../../types";
import { useLocation } from "react-router-dom";

type Props = {
  onSubmit: () => void;
  setPlanData: any;
  planData: Plan;
};
const PreviewArea = ({ onSubmit, planData, setPlanData }: Props) => {
  const location = useLocation();
  return (
    <PreviewAreaBlock>
      <ScheduleBlock>
        <MapBox>
          <RenderMap planData={planData} />
        </MapBox>
        <ScheduleBox>
          <Days planData={planData} />
          <Schedules planData={planData} setPlanData={setPlanData} />
        </ScheduleBox>
      </ScheduleBlock>
      <BtnBox>
        <DoneButton onNext={onSubmit}>
          {location.pathname === "/plan" ? "일정 등록" : "일정 수정"}
        </DoneButton>
      </BtnBox>
    </PreviewAreaBlock>
  );
};

const PreviewAreaBlock = styled.section``;

const ScheduleBlock = styled.article`
  height: 80%;
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

const BtnBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
`;

export default PreviewArea;
