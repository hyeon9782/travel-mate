const { kakao } = window;
// 차후 컴포넌트로 변환
export const createInfoWindow = (map: any, content: string, position: any) => {
  const iwContent = `<div style="padding:5px;">${content}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  const iwPosition = new kakao.maps.LatLng(position.lat, position.lng); //인포윈도우 표시 위치입니다
  const iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // 인포윈도우를 생성하고 지도에 표시합니다
  const infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position: iwPosition,
    content: iwContent,
    removable: iwRemoveable,
  });

  return infowindow;

  // 아래 코드는 인포윈도우를 지도에서 제거합니다
  // infowindow.close();
};
