import { useRecoilValue } from "recoil";
import Map from "./Map";
import { scheduleState } from "../../store/scheduleState";
import { currentDayState } from "../../store/currentDayState";
import { Marker } from "@react-google-maps/api";
import { searchState } from "../../store/searchState";

const RenderMap = () => {
  const searchData = useRecoilValue(searchState);
  const schedules = useRecoilValue(scheduleState);
  const currentDay = useRecoilValue(currentDayState);

  console.log(schedules[currentDay]);
  return (
    <Map position={searchData}>
      {schedules[currentDay] &&
        schedules[currentDay].map((schedule) => (
          <Marker
            key={schedule.place_id}
            position={schedule.geometry.location}
          />
        ))}
    </Map>
  );
};

export default RenderMap;
