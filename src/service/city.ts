import { CITIES } from "../constants/cities";
import { City } from "../types";

// 도시 검색
function searchCity(keyword: string, setCities: any) {
  const newCities = CITIES.filter(
    (city) => city.city === keyword || city.related.includes(keyword)
  );
  setCities(newCities);
}

// 도시 태그 클릭
function filteringCity(region: string, setCities: any) {
  let newCities = [];
  if (region === "전체") {
    newCities = [...CITIES];
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
function appendCity(city: City, setSelectCities: any, setSearchData: any) {
  setSelectCities((prev) => [...prev, city]);
  setSearchData((prev) => ({
    ...prev,
    location: city.location,
  }));
}

// 도시 선택 취소
function removeCity(id: string) {
  return "";
}

export { searchCity, filteringCity, toggle, appendCity };
