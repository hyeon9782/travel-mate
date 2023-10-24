import { useRecoilState, useRecoilValue } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import {
  GoogleMap,
  Marker,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  console.log(currentDay);

  const [markerPositions, setMarkerPositions] = useState<any[]>(() =>
    planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      .map((schedule) => schedule.geometry.location)
  );

  const currentSchedule = useRecoilValue(currentScheduleState);

  console.log(markerPositions);

  useEffect(() => {
    const newPositions = planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      .map((schedule) => schedule.geometry.location);

    console.log(newPositions);
    setMarkerPositions(newPositions);

    const timeId = setTimeout(() => {
      if (markerPositions.length === 0) {
        setCurrentDay(1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [currentDay, planData.selectedPlaces]);

  console.log(markerPositions);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <GoogleMap
      zoom={13}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={markerPositions?.at(-1)}
    >
      {markerPositions?.map((marker, index) => (
        <Marker
          key={index}
          position={marker}
          // onClick={() => handleMarkerClick(index)}
          icon={{
            url: `/images/marker/marker ${index + 1}.png`,
            scaledSize: new google.maps.Size(
              index === currentSchedule ? 55 : 50,
              index === currentSchedule ? 55 : 50
            ), // This determines the size of the icon.
            origin: new google.maps.Point(0, 0), // Origin is the left top corner of the image (default is 0,0).
            anchor: new google.maps.Point(25, 25), // This is where the icon will be attached to the marker. (middle point)
          }}
        />
      ))}
      {markerPositions.length > 1 && (
        <Polyline path={markerPositions} options={OPTIONS} />
      )}
    </GoogleMap>
  );
};

export default RenderMap;
