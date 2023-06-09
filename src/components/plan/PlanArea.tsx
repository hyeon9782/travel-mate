import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import PlacesTab from "../places/PlacesTab";
import { Place } from "../../types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import { scheduleState } from "../../store/scheduleState";
import Schedules from "../schedules/Schedules";
import { selectPlacesState } from "../../store/selectPlacesState";

const PlanArea = () => {
  const currentDay = useRecoilValue(currentDayState);
  const setSchedule = useSetRecoilState(scheduleState);
  const selectedPlaces = useSetRecoilState(selectPlacesState);

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

  return (
    <PlanBlock>
      <PlacesTab selectPlace={selectPlaces} />
      <ScheduleBlock>
        <ScheduleBox>
          <Days />
          <Schedules />
        </ScheduleBox>
        <MapBox>
          <RenderMap />
        </MapBox>
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
`;

const ScheduleBox = styled.div`
  width: 50%;
`;

const MapBox = styled.div`
  width: 50%;
  /* height: 300px; */
`;

export default PlanArea;
