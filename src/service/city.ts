import { CITIES } from "../constants/cities";
import { City } from "../types";

// 도시 검색
function searchCity(e: any, setCities: any, isDomestic: boolean) {
  let newCities = [];

  if (e.target.value === "") {
    newCities = CITIES.filter((city) => city.isDomestic === isDomestic);
  } else {
    newCities = CITIES.filter(
      (city) =>
        city.city.includes(e.target.value) ||
        city.related.includes(e.target.value)
    );
  }
  setCities(newCities);
}

// 도시 태그 클릭
function filteringCity(region: string, setCities: any) {
  let newCities = [];
  if (region === "전체") {
    newCities = CITIES.filter((city) => city.isDomestic === false);
  } else {
    newCities = CITIES.filter((city) => city.region === region);
  }
  setCities(newCities);
}

// 해외 국내 구분
function toggle(isDomestic: boolean, setIsDomestic: any, setCities: any) {
  setIsDomestic(isDomestic);
  setCities(CITIES.filter((city) => city.isDomestic === isDomestic));
}

// 도시 선택
function appendCity(city: City, setSelectedCities: any) {
  setSelectedCities((prev) => [...prev, city]);
}

// 도시 선택 취소
function removeCity(city: City, setSelectedCities: any) {
  setSelectedCities((prev) => prev.filter((v) => v.city !== city.city));
}

// 선택 했는지 확인
function checkSelect(city: City, selectedCities: [], setIsSelect: any) {
  setIsSelect(selectedCities.includes(city));
}

export {
  searchCity,
  filteringCity,
  toggle,
  appendCity,
  checkSelect,
  removeCity,
};
