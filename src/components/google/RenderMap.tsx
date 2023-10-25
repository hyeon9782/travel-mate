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

  const [markers, setMarkers] = useState([]);

  const onUnmount = useCallback((map) => {
    setMap(null);
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
    if (markerPositions.length === 0) {
      setCurrentDay(1);
    }
    const newPositions = planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      .map((schedule) => schedule.geometry.location);

    setMarkerPositions(newPositions);

    return () => {
      setCurrentSchedule(0);
    };
  }, [currentDay, planData.selectedPlaces]);

  useEffect(() => {
    if (map) {
      // 기존에 생성된 마커들을 지도에서 제거합니다.
      markers.forEach((marker) => marker.setMap(null));
      // 새로운 마커 객체들을 생성합니다.
      const newMarkers = markerPositions.map((position, index) => {
        return new window.google.maps.Marker({
          position: position,
          icon: {
            url: `/images/marker/marker ${index + 1}.png`,
            scaledSize: new window.google.maps.Size(
              index === currentSchedule ? 60 : 50,
              index === currentSchedule ? 60 : 50
            ),
          },
          map: map,
        });
      });
      // 새로운 마커 객체들을 상태 변수에 저장합니다.
      setMarkers(newMarkers);
    }
  }, [currentSchedule, map]);

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
      {/* {markerPositions?.map((marker, index) => (
        <MarkerF
          key={index}
          position={marker}
          icon={{
            url: `/images/marker/marker ${index + 1}.png`,
            scale: 1,
            scaledSize: new window.google.maps.Size(
              index === currentSchedule ? 60 : 50,
              index === currentSchedule ? 60 : 50
            ),
          }}
        />
      ))} */}
      {markerPositions.length > 1 && (
        <PolylineF path={markerPositions} options={OPTIONS} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default RenderMap;
