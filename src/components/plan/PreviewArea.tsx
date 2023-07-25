import styled from "styled-components";
import DoneButton from "./DoneButton";
import Days from "../days/Days";
import Schedules from "../schedules/Schedules";
import RenderMap from "../google/RenderMap";
import { useState } from "react";
import AppModal from "../common/AppModal";
import Button from "../common/Button";
type Props = {
  onSubmit: () => void;
};
const PreviewArea = ({ onSubmit }: Props) => {
  const [isModal, setIsModal] = useState(false);
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
        <DoneButton onNext={() => setIsModal(true)}>일정 저장</DoneButton>
      </BtnBox>
      <AppModal isModal={isModal} close={() => setIsModal(false)}>
        <div>모달</div>
        <RegisterInput />
        <Button text="일정 등록" />
      </AppModal>
    </PreviewAreaBlock>
  );
};

const PreviewAreaBlock = styled.section``;

const RegisterInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 30px;
`;

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
