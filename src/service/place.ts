import axios from "axios";
import { Place } from "../types";

async function searchPlaces(
  e: React.FormEvent<HTMLFormElement>,
  setSearchPlaces: any,
  searchData: any
) {
  const formElement = e.currentTarget;
  const inputElement = formElement.querySelector("input") as HTMLInputElement; //Form의 input 원소에 대한 참조
  const res = await axios.get(
    `http://localhost:4000/api/search?keyword=${
      inputElement.value
    }&radius=${5000}&latitude=${searchData.location.lat}&longitude=${
      searchData.location.lng
    }`
  );
  setSearchPlaces(res.data);
}

// 장소 선택 또는 취소
const handlePlaceSelection = (
  isSelect: boolean,
  setPlanData: any,
  place: Place
) => {
  if (isSelect) {
    // 장소 취소
    setPlanData((prevData) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.filter(
        (selectedPlace) => selectedPlace.place_id !== place.place_id
      ),
    }));
  } else {
    // 장소 선택
    setPlanData((prevData) => ({
      ...prevData,
      selectedPlaces: [
        ...prevData.selectedPlaces,
        { ...place, day: 0, order: 0 },
      ],
    }));
  }
};

// 장바구니에 넣었는지 체크
function checkPlace(place: Place, selectedPlaces: []) {
  return (
    selectedPlaces.filter(
      (selectedPlace) => selectedPlace.place_id === place.place_id
    ).length !== 0
  );
}

// 일정에 추가하기 (일정 추가하기와 제거하기를 하나로 함수로 묶을까?)
function selectPlace(place: Place, setSelectedPlaces: any, currentDay: number) {
  setSelectedPlaces((prev) =>
    prev.map((selectedPlaces) => {
      if (selectedPlaces.place_id === place.place_id) {
        selectedPlaces.isSelect = true;
        selectedPlaces.day = currentDay;
        selectedPlaces.order++;
      }
      return selectedPlaces;
    })
  );
}

// 일정 선택 또는 취소
const handleScheduleSelection = (
  isSelect: boolean,
  setPlanData: any,
  place: Place,
  day: number,
  order: number
) => {
  if (isSelect) {
    // 일정 취소
    setPlanData((prevData) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.map((selectedPlace) => {
        if (selectedPlace.place_id === place.place_id) {
          selectedPlace.day = 0;
          selectedPlace.order = 0;
        }
        return selectedPlace;
      }),
    }));
  } else {
    // 일정 선택
    setPlanData((prevData) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.map((selectedPlace) => {
        if (selectedPlace.place_id === place.place_id) {
          selectedPlace.day = day;
          selectedPlace.order = order++;
        }
        return selectedPlace;
      }),
    }));
  }
};

export {
  searchPlaces,
  checkPlace,
  handlePlaceSelection,
  handleScheduleSelection,
};
