import { useRecoilValue } from "recoil";
import Map from "./Map";
import { scheduleState } from "../../store/scheduleState";
import { currentDayState } from "../../store/currentDayState";
import { Marker, Polyline } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const OPTIONS = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.4,
  strokeWeight: 3,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const RenderMap = () => {
  const schedules = useRecoilValue(scheduleState);
  const currentDay = useRecoilValue(currentDayState);
  const [markerPositions, setMarkerPositions] = useState([]);

  useEffect(() => {
    const position = schedules[currentDay].map(
      (schedule) => schedule.geometry.location
    );

    setMarkerPositions(position);
  }, [schedules[currentDay]]);

  return (
    <Map position={schedules[currentDay]?.at(-1)}>
      {schedules[currentDay] &&
        schedules[currentDay].map((schedule) => (
          <Marker
            key={schedule.place_id}
            position={schedule.geometry.location}
          />
        ))}
      {markerPositions.length > 0 && (
        <Polyline path={markerPositions} options={OPTIONS} />
      )}
    </Map>
  );
};

export default RenderMap;
