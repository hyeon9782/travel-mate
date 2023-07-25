import styled from "styled-components";
import DoneButton from "./DoneButton";
import Days from "../days/Days";
import Schedules from "../schedules/Schedules";
import RenderMap from "../google/RenderMap";

type Props = {
  onSubmit: () => void;
};
const PreviewArea = ({ onSubmit }: Props) => {
  return (
    <PreviewAreaBlock>
      <ScheduleBlock>
        <MapBox>
          <RenderMap />
        </MapBox>
        <ScheduleBox>
          <Days />
          <Schedules />
        </ScheduleBox>
      </ScheduleBlock>
      <BtnBox>
        <DoneButton onNext={onSubmit}>일정 저장</DoneButton>
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
