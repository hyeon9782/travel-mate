import React, { useCallback, useState } from "react";
import Map from "./Map";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

const destinations = [
  { address: "서울특별시 종로구 종로 1", lat: 37.572036, lng: 126.976939 },
  {
    address: "서울특별시 용산구 이태원로 192",
    lat: 37.534537,
    lng: 126.993041,
  },
  { address: "서울특별시 강남구 삼성로 212", lat: 37.508929, lng: 127.063008 },
];

const directionsServiceOptions = {
  origin: destinations[0],
  destination: destinations[destinations.length - 1],
  travelMode: "TRANSIT",
};

const RenderMap = () => {
  const [response, setResponse] = useState(null);

  const directionsCallback = useCallback((res) => {
    if (res !== null) {
      console.log(res);
      setResponse(res);
    }
  }, []);

  const mapOptions = {
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: true,
    mapTypeControl: true,
  };
  return (
    <div>
      <Map>
        {response && <DirectionsRenderer options={{ directions: response }} />}
        <DirectionsService
          options={directionsServiceOptions}
          callback={directionsCallback}
        />
      </Map>
    </div>
  );
};

export default RenderMap;
