import styled from "styled-components";
import DirectionItem from "./DirectionItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { scheduleState } from "../../store/scheduleState";
import { useState } from "react";
import { currentDayState } from "../../store/currentDayState";

const Directions = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [schedules, setSchedules] = useRecoilState(scheduleState);
  const [time, setTime] = useState("");

  const getDirections = () => {};
  return (
    <DirectionsBlock>
      <Line />
      {schedules[currentDay] &&
        schedules[currentDay].map((place, index) => (
          <DirectionItem key={index} place={place} index={index} />
        ))}
    </DirectionsBlock>
  );
};

const DirectionsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px;
`;

const Line = styled.div`
  position: absolute;
  z-index: 1;
  left: 24px;
  border-right: 3px solid gray;
  height: 100%;
`;

export default Directions;
