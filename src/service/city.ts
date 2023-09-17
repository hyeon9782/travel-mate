import { CITIES } from "../constants/cities";
import { City, Plan } from "../types";

// 도시 검색

const searchCity = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCities: any,
  isDomestic: boolean
) => {
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
};

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

// 선택 했는지 확인
function checkSelect(city: City, selectedCities: City[]) {
  return selectedCities.includes(city);
}

export { searchCity, filteringCity, toggle, checkSelect };
