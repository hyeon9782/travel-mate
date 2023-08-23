import { useRecoilValue } from "recoil";
import Map from "./Map";
import { currentDayState } from "../../store/currentDayState";
import { Marker, Polyline } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { Plan } from "../../types";

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

type Props = {
  planData: Plan;
};

const RenderMap = ({ planData }: Props) => {
  const currentDay = useRecoilValue(currentDayState);
  const [markerPositions, setMarkerPositions] = useState<any[]>([]);

  const schedules = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  );

  useEffect(() => {
    const newPositions = schedules.map(
      (schedule) => schedule.geometry.location
    );
    // 이전 markerPositions 배열과 새로운 newPositions 배열의 내용을 비교합니다.
    if (JSON.stringify(markerPositions) !== JSON.stringify(newPositions)) {
      setMarkerPositions(newPositions);
    }
  }, [schedules, markerPositions]);

  // // 비어있는 경우 Marker를 렌더링하지 않음
  // if (markerPositions.length === 0) {
  //   return null;
  // }

  return (
    <Map type="계획" planData={planData}>
      {markerPositions &&
        markerPositions.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      {markerPositions.length > 0 && (
        <Polyline path={markerPositions} options={OPTIONS} />
      )}
    </Map>
  );
};

export default RenderMap;
