import styled from "styled-components";
import Cities from "./Cities";
import { CITIES } from "../../constants/cities";
import { useState } from "react";
import CityCarousel from "./CityCarousel";
import { City } from "../../types";
import CitySearchInput from "./CitySearchInput";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";

const CityTab = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchData = useSetRecoilState(searchState);
  const [isDomestic, setIsDomestic] = useState(true);
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
      <CityTabButton onClick={() => toggle(true)}>국내</CityTabButton>
      <CityTabButton onClick={() => toggle(false)}>해외</CityTabButton>
      <Cities cities={cities} handleClick={handleClick} />
      <CityCarousel selectCities={selectCities} />
    </CityTabBlock>
  );
};

const CityTabBlock = styled.div``;

const CityTabButton = styled.button`
  width: 50%;
  height: 70px;
  font-size: 1.5rem;
`;

export default CityTab;
