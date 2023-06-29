import styled from "styled-components";
import DirectionItem from "./DirectionItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { scheduleState } from "../../store/scheduleState";
import { useEffect, useState } from "react";
import { currentDayState } from "../../store/currentDayState";
import { travelTimeState } from "../../store/travelTimeState";
import TravelTimes from "./TravelTimes";

const Directions = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [schedules, setSchedules] = useRecoilState(scheduleState);
  const [travelTime, setTravelTime] = useRecoilState(travelTimeState);

  // 첫 번쨰와 두 번째

  // useEffect(() => {
  //   if (!schedules[currentDay][0] || !schedules[currentDay][1]) return;

  //   console.log(schedules[currentDay][0].geometry.location);
  //   console.log(schedules[currentDay][1].geometry.location);

  //   const directionsService = new window.google.maps.DirectionsService();
  //   directionsService.route(
  //     {
  //       origin: schedules[currentDay][0].geometry.location,
  //       destination: schedules[currentDay][1].geometry.location,
  //       travelMode: "DRIVING",
  //     },
  //     (result, status) => {
  //       if (status === window.google.maps.DirectionsStatus.OK) {
  //         console.log("성공");
  //         console.log(result);
  //         console.log(result.routes[0].legs[0].duration.text);
  //         setTravelTime((prev) => [
  //           ...prev,
  //           result.routes[0].legs[0].duration.text,
  //         ]);
  //       } else {
  //         console.error("Directions request failed:", status);
  //       }
  //     }
  //   );
  // }, [schedules]);
  return (
    <DirectionsBlock>
      {schedules[currentDay].length > 1 && <Line />}
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
  justify-content: space-between;
`;

const Line = styled.div`
  position: absolute;
  z-index: 1;
  left: 14px;
  border-right: 3px solid gray;
  height: 100%;
`;

export default Directions;
