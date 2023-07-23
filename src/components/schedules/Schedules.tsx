import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import Directions from "../directions/Directions";
import { planState } from "../../store/planState";

const Schedules = () => {
  const currentDay = useRecoilValue(currentDayState);
  const [schedules, setSchedules] = useRecoilState(scheduleState);
  const selectedPlaces = useSetRecoilState(selectedPlacesState);

  const [planData, setPlanData] = useRecoilState(planState);

  const newData = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === 0
  );

  console.log(newData);

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
          schedules[currentDay].map((place, index, self) => (
            <div key={index}>
              <Schedule place={place} handleClick={handleClick} />
              {/* {self[index + 1] && (
                // <TravelTime index={index} />
                // <TravelTimeBlock>{travelTimes[index]}</TravelTimeBlock>
              )} */}
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
