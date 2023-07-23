import { useRecoilValue } from "recoil";
import Map from "./Map";
import { scheduleState } from "../../store/scheduleState";
import { currentDayState } from "../../store/currentDayState";
import { Marker, Polyline } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { planState } from "../../store/planState";

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
  const currentDay = useRecoilValue(currentDayState);
  const planData = useRecoilValue(planState);
  const [markerPositions, setMarkerPositions] = useState([]);

  const schedules = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  );

  // 두 배열이 동일한지 비교하는 함수를 추가합니다.
  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    const newPositions = schedules.map(
      (schedule) => schedule.geometry.location
    );

    // 이전 markerPositions 배열과 새로운 newPositions 배열이 동일한지 확인합니다.
    if (!arraysAreEqual(markerPositions, newPositions)) {
      setMarkerPositions(newPositions);
    }
  }, [schedules, markerPositions]);
  return (
    <Map position={schedules?.at(-1)}>
      {schedules &&
        schedules.map((schedule) => (
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
