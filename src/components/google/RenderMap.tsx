import { useRecoilValue } from "recoil";
import Map from "./Map";
import { scheduleState } from "../../store/scheduleState";
import { currentDayState } from "../../store/currentDayState";
import { Marker, Polyline } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const center = {
  lat: 37.7749, // 시작 위치의 위도
  lng: -122.4194, // 시작 위치의 경도
};

const destination = {
  lat: 34.0522, // 목적지의 위도
  lng: -118.2437, // 목적지의 경도
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
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
    console.log(position);
    setMarkerPositions(position);
  }, [schedules[currentDay]]);

  const handleClick = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: center,
        destination: destination,
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log("성공");
          console.log(result);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  console.log(schedules[currentDay]);
  return (
    <>
      <button onClick={handleClick}>길찾기</button>
      <Map position={schedules[currentDay]?.at(-1)}>
        {schedules[currentDay] &&
          schedules[currentDay].map((schedule) => (
            <Marker
              key={schedule.place_id}
              position={schedule.geometry.location}
            />
          ))}
        {markerPositions.length > 0 && (
          <Polyline path={markerPositions} options={options} />
        )}
      </Map>
    </>
  );
};

export default RenderMap;
