import { ReactNode, useEffect, useRef, useState } from "react";
import { createMarker } from "./marker";
import { useQueryClient } from "@tanstack/react-query";

const { kakao } = window;

// // 마커를 표시할 위치와 title 객체 배열입니다
// const positions = [
//   {
//     title: "카카오",
//     latlng: new kakao.maps.LatLng(33.450705, 126.570677),
//   },
//   {
//     title: "생태연못",
//     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
//   },
//   {
//     title: "텃밭",
//     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
//   },
//   {
//     title: "근린공원",
//     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
//   },
// ];

const SearchKakaoMap = ({ children }: { children: ReactNode }) => {
  const mapRef = useRef(null);
  const queryClient = useQueryClient();
  const searchPlaces = queryClient.getQueryData(["search-places", true]);
  console.log(searchPlaces);
  const [positions, setPositions] = useState([]);

  let map = "";
  useEffect(() => {
    if (searchPlaces?.length !== 0) {
      const positions = searchPlaces?.map((place) => {
        return {
          title: place.place_name,
          latlng: new kakao.maps.LatLng(place.x, place.y),
        };
      });
      setPositions(positions);
    }
    console.log(positions);
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    map = new kakao.maps.Map(mapRef.current, options);

    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    if (positions.length !== 0) {
      for (let i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        const marker = createMarker(positions[i], map, markerImage);
      }
    }
  }, [positions]);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default SearchKakaoMap;
