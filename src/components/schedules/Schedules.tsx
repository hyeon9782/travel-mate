import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import Directions from "../directions/Directions";
import { planState } from "../../store/planState";
import { handleScheduleSelection } from "../../service/place";
import { Place } from "../../types";

const Schedules = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [planData, setPlanData] = useRecoilState(planState);

  const newData = planData.selectedPlaces
    .filter((selectedPlace) => selectedPlace.day === currentDay)
    .sort((a, b) => a.order - b.order);

  const handleScheduleRemove = (place: Place) => {
    handleScheduleSelection(true, setPlanData, place, currentDay, 0);
  };

  return (
    <SchedulesBlock>
      <Directions />
      <PlaceBlock>
        {newData &&
          newData.map((place) => (
            <Schedule
              key={place.place_id}
              place={place}
              handleClick={handleScheduleRemove}
            />
          ))}
      </PlaceBlock>
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
`;

const PlaceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

const TravelTimeBlock = styled.div`
  min-height: 15px;
  padding: 15px;
  text-align: center;
`;

export default Schedules;
