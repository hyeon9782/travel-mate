import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import Directions from "../directions/Directions";
import { handleScheduleSelection } from "../../service/place";
import { Place, Plan } from "../../types";
type Props = {
  planData: Plan;
  setPlanData: any;
};
const Schedules = ({ planData, setPlanData }: Props) => {
  const currentDay = useRecoilValue(currentDayState);
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

  max-height: 200px;
  overflow: auto;
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

export default Schedules;
