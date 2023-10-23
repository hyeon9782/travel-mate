import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import PlacesTab from "../places/PlacesTab";
import { Place, Plan } from "../../types";
import { useRecoilValue } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import Schedules from "../schedules/Schedules";
import { handleScheduleSelection } from "../../service/place";
import DoneButton from "./DoneButton";
import useDialogs from "../../hooks/useDialogs";
import { dialogs } from "../dialog/Dialogs";
import { useNavigate } from "react-router-dom";
import RenderKakaoMap from "../../libs/kakao/RenderKakaoMap";

type Props = {
  planData: Plan;
  onSubmit: (title: string) => void;
  setPlanData: any;
};
const PlanArea = ({ planData, onSubmit, setPlanData }: Props) => {
  const isDomestic = planData?.cities[0]?.isDomestic;
  const { openDialog } = useDialogs();
  const navigate = useNavigate();

  const currentDay = useRecoilValue(currentDayState);

  const order = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  ).length;

  const handleScheduleAdd = (place: Place) => {
    handleScheduleSelection(false, setPlanData, place, currentDay, order);
  };

  const handleConfirmDialog = () => {
    openDialog(dialogs.ConfirmDialog, {
      onSubmit: () => {
        navigate("/post");
      },
      onRedirect: () => {
        navigate("/");
      },
      title: "여행 일정 저장에 성공했습니다!",
      content: "동행을 구하겠습니까?",
    });
  };

  const handleSavePlanDialog = () => {
    openDialog(dialogs.SavePlanDialog, {
      onSubmit: (title: string) => {
        onSubmit(title);
        handleConfirmDialog();
      },
    });
  };

  return (
    <PlanBlock>
      <MapBox>
        {isDomestic ? <RenderKakaoMap /> : <RenderMap planData={planData} />}
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
  position: relative;
  height: calc(100vh - 44.59px);
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
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 2;
`;

export default PlanArea;
