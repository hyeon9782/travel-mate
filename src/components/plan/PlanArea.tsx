import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import PlacesTab from "../places/PlacesTab";
import { Place, Plan } from "../../types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import Schedules from "../schedules/Schedules";
import { handleScheduleSelection } from "../../service/place";
import { planState } from "../../store/planState";
import DoneButton from "./DoneButton";
import useDialogs from "../../hooks/useDialogs";
import { dialogs } from "../dialog/Dialogs";

type Props = {
  planData: Plan;
};
const PlanArea = ({ planData }: Props) => {
  const { openDialog } = useDialogs();

  const currentDay = useRecoilValue(currentDayState);

  const setPlanData = useSetRecoilState(planState);

  const order = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  ).length;

  const handleScheduleAdd = (place: Place) => {
    handleScheduleSelection(false, setPlanData, place, currentDay, order);
  };

  const handleConfirmDialog = () => {
    openDialog(dialogs.ConfirmDialog, {
      onSubmit: (value: any) => {
        console.log(value);
      },
      title: "확인해주세요.",
      content: "여행 계획을 저장하시겠습니까?",
    });
  };

  const handleSavePlanDialog = () => {
    openDialog(dialogs.SavePlanDialog, {
      onSubmit: () => {},
    });
  };

  return (
    <PlanBlock>
      <MapBox>
        <RenderMap planData={planData} />
      </MapBox>
      <ScheduleBlock>
        <PlacesTab handleClick={handleScheduleAdd} planData={planData} />
        <ScheduleBox>
          <Days planData={planData} />
          <Schedules planData={planData} setPlanData={setPlanData} />
        </ScheduleBox>
      </ScheduleBlock>
      <BtnBox>
        <DoneButton onClick={handleSavePlanDialog}>저장하기</DoneButton>
      </BtnBox>
    </PlanBlock>
  );
};

const PlanBlock = styled.div`
  height: calc(100vh - 44.59);
  overflow: auto;
`;

const ScheduleBlock = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const ScheduleBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 220px;
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
  z-index: 2;
`;

export default PlanArea;
