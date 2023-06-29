import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { selectPlacesState } from "../../store/selectPlacesState";
import Directions from "./Directions";

const Schedules = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [schedules, setSchedules] = useRecoilState(scheduleState);
  const selectedPlaces = useSetRecoilState(selectPlacesState);
  const handleClick = (place: Place) => {
    setSchedules((prev) => {
      const newSchedule = [...prev];
      newSchedule[currentDay] = prev[currentDay].filter(
        (item) => item.place_id !== place.place_id
      );
      return newSchedule;
    });
    selectedPlaces((prev) => [...prev, place]);
  };
  return (
    <SchedulesBlock>
      <Directions />
      <PlaceBlock>
        {schedules[currentDay] &&
          schedules[currentDay].map((place, index) => (
            <Schedule key={index} place={place} handleClick={handleClick} />
          ))}
      </PlaceBlock>
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
`;

const PlaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default Schedules;
