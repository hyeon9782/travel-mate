import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { selectPlacesState } from "../../store/selectPlacesState";

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
      {schedules[currentDay] &&
        schedules[currentDay].map((place, index) => (
          <Schedule key={index} place={place} handleClick={handleClick} />
        ))}
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default Schedules;
