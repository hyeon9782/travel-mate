const { kakao } = window;

// 차후 컴포넌트로 변환
export const createMarker = (position: any, map: any, markerImage: string) => {
  const marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: position.latlng, // 마커를 표시할 위치
    title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });

  return marker;
};
