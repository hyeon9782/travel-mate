import styled from "styled-components";
import Cities from "./Cities";
import { CITIES } from "../../constants/cities";
import { useState } from "react";
import SeletedCities from "./SeletedCities";
import { City } from "../../types";
import CitySearchInput from "./CitySearchInput";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import CitiesTag from "./CitiesTag";

const CityTab = ({ moveStep }: (direction: number) => void) => {
  const [inputValue, setInputValue] = useState("");
  const setSearchData = useSetRecoilState(searchState);
  const [isDomestic, setIsDomestic] = useState(false);
  const [cities, setCities] = useState(
    CITIES.filter((city) => city.isDomestic === isDomestic)
  );

  const [selectCities, setSelectCities] = useState([]);
  // const cities = CITIES.filter((city) => city.isDomestic === isDomestic);
  const handleClick = (city: City) => {
    setSelectCities((prev) => [...prev, city]);
    setSearchData((prev) => ({
      ...prev,
      location: city.location,
    }));
  };

  const toggle = (boolean: boolean) => {
    setIsDomestic(boolean);
    setCities(CITIES.filter((city) => city.isDomestic === boolean));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    let newArr = [];

    if (value) {
      newArr = CITIES.filter(
        (city) => city.city.includes(value) && city.isDomestic === isDomestic
      );
    } else {
      newArr = CITIES.filter((city) => city.isDomestic === isDomestic);
    }

    setInputValue(value);
    setCities(newArr);
  };

  return (
    <CityTabBlock>
      <CitySearchInput handleChange={handleChange} />
      <CityTabButton
        onClick={() => toggle(false)}
        className={!isDomestic ? "active" : ""}
      >
        해외도시
      </CityTabButton>
      <CityTabButton
        onClick={() => toggle(true)}
        className={isDomestic ? "active" : ""}
      >
        국내도시
      </CityTabButton>
      <CitiesTag tags={["전체", "일본", "유럽"]} />
      <Cities cities={cities} handleClick={handleClick} />
      <SeletedCities selectCities={selectCities} />
      <DoneButton
        onClick={() => moveStep(1)}
        disabled={selectCities.length === 0 ? true : false}
      >
        {selectCities.length > 0
          ? `${selectCities[0].city} 외 ${selectCities.length}개 선택 완료`
          : "최소 1개 도시 선택"}
      </DoneButton>
    </CityTabBlock>
  );
};

const CityTabBlock = styled.div``;

const CityTabButton = styled.button`
  width: 50%;
  font-size: 1rem;
  padding: 10px;
  font-weight: bold;
  color: gray;
  background-color: white;
  border: none;
  border-top: 1px solid lightgray;
  &.active {
    color: black;
    border-bottom: 2px solid blue;
  }
`;

const DoneButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: lightgray;
  border: none;
`;

export default CityTab;
