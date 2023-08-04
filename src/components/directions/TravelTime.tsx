// import styled from "styled-components";
// import { useEffect } from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { currentDayState } from "../../store/currentDayState";
// import { scheduleState } from "../../store/scheduleState";
// import { travelTimeState } from "../../store/travelTimeState";
// type Props = {
//   index: number;
// };
// const TravelTime = ({ index }): Props => {
//   const currentDay = useRecoilValue(currentDayState);
//   const [schedules, setSchedules] = useRecoilState(scheduleState);
//   const [travelTime, setTravelTime] = useRecoilState(travelTimeState);

//   console.log(travelTime);
//   console.log("이동시간 : " + travelTime[index]);
//   useEffect(() => {
//     if (!schedules[currentDay][index] || !schedules[currentDay][index + 1])
//       return;

//     console.log(schedules[currentDay][index].geometry.location);
//     console.log(schedules[currentDay][index + 1].geometry.location);

//     const directionsService = new window.google.maps.DirectionsService();
//     directionsService.route(
//       {
//         origin: schedules[currentDay][index].geometry.location,
//         destination: schedules[currentDay][index + 1].geometry.location,
//         travelMode: "DRIVING",
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           console.log("성공");
//           console.log(result);
//           console.log(result.routes[0].legs[0].duration.text);
//           setTravelTime((prev) => [
//             ...prev,
//             result.routes[0].legs[0].duration.text,
//           ]);
//         } else {
//           console.error("Directions request failed:", status);
//         }
//       }
//     );
//   }, []);

//   return <TravelTimeBlock>{travelTime[index]}</TravelTimeBlock>;
// };

// const TravelTimeBlock = styled.div`
//   text-align: center;
//   padding: 15px;
// `;

// export default TravelTime;
