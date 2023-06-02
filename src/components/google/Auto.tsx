import React, { useRef, useState } from "react";
import {
  LoadScript,
  Autocomplete, // 임포트
} from "@react-google-maps/api";

const libs = ["places"];

const PlacesAutocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const autocompleteRef = useRef(null); // useRef를 사용

  const handleLoad = (instance) => {
    console.log(instance);

    // 주변 검색을 원하는 위치의 위도와 경도 값을 설정하세요
    const defaultCenter = {
      lat: 37.7749,
      lng: -122.4194,
    };

    // 검색 반경도 설정하세요 (미터 단위)
    const searchRadius = 1000;

    // 위치와 반경을 지정하여 지역 제한하기
    const circle = new window.google.maps.Circle({
      center: defaultCenter,
      radius: searchRadius,
    });
    instance.setBounds(circle.getBounds());

    autocompleteRef.current = instance;
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    console.log("Selected place:", place);
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_API_KEY}
      libraries={libs}
    >
      <Autocomplete
        onLoad={handleLoad}
        onPlaceChanged={handlePlaceChanged}
        reference={autocompleteRef}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a place"
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default PlacesAutocomplete;
