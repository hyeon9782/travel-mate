import axios from "axios";
import { Place, Plan } from "../types";

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
  console.log(res);

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
    setPlanData((prevData: Plan) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.filter(
        (selectedPlace) => selectedPlace.place_id !== place.place_id
      ),
    }));
  } else {
    // 장소 선택
    setPlanData((prevData: Plan) => ({
      ...prevData,
      selectedPlaces: [
        ...(prevData?.selectedPlaces[0]?.name !== ""
          ? prevData.selectedPlaces
          : []),
        { ...place, day: 0, order: 0 },
      ],
    }));
  }
};

// 장바구니에 넣었는지 체크
function checkPlace(place: Place, selectedPlaces: Place[]) {
  return (
    selectedPlaces.filter(
      (selectedPlace) => selectedPlace.place_id === place.place_id
    ).length !== 0
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
    setPlanData((prevData: Plan) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.map((selectedPlace) => {
        if (selectedPlace.place_id === place.place_id) {
          return { ...selectedPlace, day: 0, order: 0 }; // 새로운 객체를 생성하여 값을 변경
        }
        return selectedPlace;
      }),
    }));
  } else {
    // 일정 선택
    setPlanData((prevData: Plan) => ({
      ...prevData,
      selectedPlaces: prevData.selectedPlaces.map((selectedPlace) => {
        if (selectedPlace.place_id === place.place_id) {
          return { ...selectedPlace, day, order: order++ }; // 새로운 객체를 생성하여 값을 변경
        }
        return selectedPlace;
      }),
    }));
  }
};

const changeMemo = (memo: string, place_id: string, setPlanData: any) => {
  setPlanData((prevData: Plan) => ({
    ...prevData,
    selectedPlaces: prevData.selectedPlaces.map((selectedPlace) => {
      if (selectedPlace.place_id === place_id) {
        return { ...selectedPlace, memo };
      }
      return selectedPlace;
    }),
  }));
};

export {
  searchPlaces,
  checkPlace,
  handlePlaceSelection,
  handleScheduleSelection,
  changeMemo,
};
