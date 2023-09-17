import { forwardRef, useEffect, useRef } from "react";
const { kakao } = window;
const KakaoMap = forwardRef((_, ref) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapRef.current, options);

    // SearchKakaoMap 컴포넌트에서 전달받은 ref에 할당합니다.
    if (ref) {
      ref.current = map;
    }
  }, []);
  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
  );
});

export default KakaoMap;
