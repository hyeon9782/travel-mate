import { useEffect, useRef } from "react";

const { kakao } = window;

const SearchKakaoMap = () => {
  const mapRef = useRef(null);
  let map = "";
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    map = new kakao.maps.Map(mapRef.current, options);
  }, []);

  const currentPosition = () => {
    console.log(map);

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      const locPosition = new kakao.maps.LatLng(lat, lon);
      console.log(locPosition);

      const message = "<div>여기!</div>";
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default SearchKakaoMap;
