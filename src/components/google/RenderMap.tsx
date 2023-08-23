import { useRecoilValue } from "recoil";
import Map from "./Map";
import { currentDayState } from "../../store/currentDayState";
import { Marker, Polyline } from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
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

  console.log(planData.selectedPlaces);

  const schedules = useMemo(
    () =>
      planData.selectedPlaces.filter(
        (selectedPlace) => selectedPlace.day === currentDay
      ),
    [planData, currentDay]
  );

  console.log(schedules);

  useEffect(() => {
    const newPositions = schedules.map(
      (schedule) => schedule.geometry.location
    );

    console.log(newPositions);
    setMarkerPositions(newPositions);
  }, [schedules]);

  return (
    <Map type="계획" planData={planData}>
      {markerPositions.map((marker) => (
        <Marker key={marker.lng} position={marker} />
      ))}
      {markerPositions.length > 1 && (
        <Polyline path={markerPositions} options={OPTIONS} />
      )}
    </Map>
  );
};

export default RenderMap;
