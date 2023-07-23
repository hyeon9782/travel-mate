import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import PlacesTab from "../places/PlacesTab";
import { Place } from "../../types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import { scheduleState } from "../../store/scheduleState";
import Schedules from "../schedules/Schedules";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import { handleScheduleSelection } from "../../service/place";
import { planState } from "../../store/planState";

const PlanArea = () => {
  const currentDay = useRecoilValue(currentDayState);
  const setSchedule = useSetRecoilState(scheduleState);
  const selectedPlaces = useSetRecoilState(selectedPlacesState);
  const [planData, setPlanData] = useRecoilState(planState);

  const selectPlaces = (place: Place) => {
    selectedPlaces((prev) => {
      const newSelectedPlaces = [...prev];
      return newSelectedPlaces.filter(
        (selectedPlace) => selectedPlace.place_id !== place.place_id
      );
    });
    setSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[currentDay] = [...prev[currentDay]];
      newSchedule[currentDay].push(place);
      return newSchedule;
    });
  };

  const order = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  ).length;

  console.log(order);

  const handleScheduleAdd = (place: Place) => {
    handleScheduleSelection(false, setPlanData, place, currentDay, order);
  };

  return (
    <PlanBlock>
      <PlacesTab handleClick={() => handleScheduleAdd} />
      <ScheduleBlock>
        <MapBox>
          <RenderMap />
        </MapBox>
        <ScheduleBox>
          <Days />
          <Schedules />
        </ScheduleBox>
      </ScheduleBlock>
    </PlanBlock>
  );
};

const PlanBlock = styled.div`
  height: 100%;
`;

const ScheduleBlock = styled.article`
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const ScheduleBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 10px;
`;

const MapBox = styled.div`
  width: 100%;
  height: 200px;
  /* height: 300px; */
`;

export default PlanArea;
