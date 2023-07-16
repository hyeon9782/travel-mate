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

// 장바구니에 추가하기
function appendPlace(place: Place, setSelectedPlaces: any) {
  console.log("추가");

  setSelectedPlaces((prev) => [
    ...prev,
    {
      ...place,
      isSelect: false,
      day: 0,
      order: 0,
    },
  ]);
}

// 장바구니에 제거하기
function removePlace(place: Place, setSelectedPlaces: any) {
  console.log(place);

  setSelectedPlaces((prev) => {
    console.log(prev);
    return prev.filter(
      (selectedPlace) => selectedPlace.place_id !== place.place_id
    );
  });
}

// 장바구니에 넣었는지 체크
function checkPlace(place: Place, selectedPlaces: [], setIsSelect: any) {
  setIsSelect(
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

// 일정에 제거하기
function deletePlace(place: Place, setSelectedPlaces: any) {}

function changeTab(category: any, index: number) {}

export {
  searchPlaces,
  appendPlace,
  selectPlace,
  deletePlace,
  removePlace,
  checkPlace,
  changeTab,
};
