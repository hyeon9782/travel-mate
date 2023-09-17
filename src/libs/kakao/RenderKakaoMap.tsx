import { useEffect, useRef } from "react";
const { kakao } = window;
const RenderKakaoMap = () => {
  const mapRef = useRef(null);
  let map = "";
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    map = new kakao.maps.Map(mapRef.current, options);
  }, []);

  console.log(map);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default RenderKakaoMap;
