import { useRecoilState, useRecoilValue } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import {
  GoogleMap,
  MarkerF,
  PolylineF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Plan } from "../../types";
import { currentScheduleState } from "../../store/currentScheduleState";

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
  const [currentDay, setCurrentDay] = useRecoilState(currentDayState);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onUnmount = useCallback((map) => {
    setMap(null);
    setCurrentSchedule(0);
    setCurrentDay(1);
  }, []);

  const [markerPositions, setMarkerPositions] = useState<any[]>(() =>
    planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      .map((schedule) => schedule.geometry.location)
  );

  const [currentSchedule, setCurrentSchedule] =
    useRecoilState(currentScheduleState);

  const center = useMemo(
    () => markerPositions[currentSchedule],
    [currentSchedule, markerPositions]
  );

  useEffect(() => {
    const newPositions = planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      .map((schedule) => schedule.geometry.location);

    setMarkerPositions(newPositions);
  }, [currentDay, planData]);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds();

      markerPositions.forEach((marker) => {
        bounds.extend(marker);
      });
      map.fitBounds(bounds);

      setMap(map);
    },
    [markerPositions]
  );

  console.log(markerPositions);

  return isLoaded ? (
    <GoogleMap
      zoom={13}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      onLoad={onLoad}
      onUnmount={onUnmount}
      center={center}
    >
      {markerPositions?.map((marker, index) => (
        <MarkerF
          key={index}
          position={marker}
          icon={{
            url: `/images/marker/marker ${index + 1}.png`,
            scale: 1,
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      ))}
      {markerPositions.length > 1 && (
        <PolylineF path={markerPositions} options={OPTIONS} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default RenderMap;
