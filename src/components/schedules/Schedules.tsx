import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { handleScheduleSelection } from "../../service/place";
import { Place, Plan } from "../../types";
import { useMemo } from "react";

type Props = {
  planData: Plan;
  setPlanData?: any;
};
const Schedules = ({ planData, setPlanData }: Props) => {
  const currentDay = useRecoilValue(currentDayState);
  const newData = useMemo(
    () =>
      planData.selectedPlaces
        .filter((selectedPlace) => selectedPlace.day === currentDay)
        .sort((a, b) => a.order - b.order),
    [currentDay, planData.selectedPlaces]
  );

  const handleScheduleRemove = (place: Place) => {
    handleScheduleSelection(true, setPlanData, place, currentDay, 0);
  };

  return (
    <SchedulesBlock>
      <PlaceBlock>
        {newData &&
          newData.map((place) => (
            <Schedule
              key={place.place_id}
              place={place}
              planId={planData.plan_id}
              setPlanData={setPlanData}
              onRemove={handleScheduleRemove}
            />
          ))}
      </PlaceBlock>
      {/* <DragAndDrop list={newData} setList={setPlanData}></DragAndDrop> */}
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
  overflow: auto;
`;

const PlaceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export default Schedules;
