import styled from "styled-components";
import Cities from "./Cities";
import { CITIES } from "../../constants/cities";
import { useState } from "react";
import CityCarousel from "./CityCarousel";
import { City } from "../../types";

const CityTab = () => {
  const [isDomestic, setIsDomestic] = useState(true);
  const [selectCities, setSelectCities] = useState([]);
  const cities = CITIES.filter((city) => city.isDomestic === isDomestic);
  const handleClick = (city: City) => {
    setSelectCities((prev) => [...prev, city]);
  };
  return (
    <CityTabBlock>
      <CityTabButton onClick={() => setIsDomestic(true)}>국내</CityTabButton>
      <CityTabButton onClick={() => setIsDomestic(false)}>해외</CityTabButton>
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
