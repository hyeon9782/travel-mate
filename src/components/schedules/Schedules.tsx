import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";

const Schedules = () => {
  const schedules = useRecoilValue(scheduleState);
  const currentDay = useRecoilValue(currentDayState);
  return (
    <SchedulesBlock>
      {schedules[currentDay] &&
        schedules[currentDay].map((place, index) => (
          <Schedule key={index} place={place} />
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
