import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { selectPlacesState } from "../../store/selectPlacesState";
import Directions from "../directions/Directions";
import { travelTimeState } from "../../store/travelTimeState";
import TravelTimes from "../directions/TravelTimes";
import TravelTime from "../directions/TravelTime";

const Schedules = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [schedules, setSchedules] = useRecoilState(scheduleState);
  const selectedPlaces = useSetRecoilState(selectPlacesState);
  const setTravelTimes = useSetRecoilState(travelTimeState);
  const handleClick = (place: Place) => {
    setSchedules((prev) => {
      const newSchedule = [...prev];
      newSchedule[currentDay] = prev[currentDay].filter(
        (item) => item.place_id !== place.place_id
      );
      return newSchedule;
    });
    selectedPlaces((prev) => [...prev, place]);
    // setTravelTimes(prev => {
    //   const newTravelTimes = {...prev};
    //   newTravelTimes[]
    //   return newTravelTimes;
    // })
  };
  return (
    <SchedulesBlock>
      <Directions />
      <PlaceBlock>
        {schedules[currentDay] &&
          schedules[currentDay].map((place, index, self) => (
            <div key={index}>
              <Schedule place={place} handleClick={handleClick} />
              {self[index + 1] && (
                <TravelTime index={index} />
                // <TravelTimeBlock>{travelTimes[index]}</TravelTimeBlock>
              )}
            </div>
          ))}
        {/* <TravelTimes /> */}
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
  /* gap: 40px; */
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
