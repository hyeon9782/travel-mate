import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import { Plan, Place } from "../../types";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  type: string;
  planData: Plan;
  markerPositions?: any[];
};

const Map = ({ children, type, planData, markerPositions }: Props) => {
  const currentDay = useRecoilValue(currentDayState);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  // useEffect(() => {
  //   console.log(markerPositions);
  // }, [markerPositions, isLoaded]);

  if (!isLoaded || markerPositions?.length === 0) {
    return <></>;
  }
  console.log("성공");

  let position: Place | undefined = undefined;

  if (type === "검색") {
    position = planData.selectedPlaces?.at(-1);
  } else if (type === "계획") {
    position = planData.selectedPlaces
      .filter((selectedPlace) => selectedPlace.day === currentDay)
      ?.at(-1);
  }

  return (
    <GoogleMap
      zoom={13}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={
        position?.name
          ? position.geometry.location
          : planData.cities[0].location
      }
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
