import styled from "styled-components";
import CityItem from "./CityItem";
import { City } from "../../types";
type Props = {
  cities: [];
  handleClick: (city: City) => void;
};
const Cities = ({ cities = [], handleClick }: Props) => {
  return (
    <CitiesBlock>
      {cities.map((city, index) => (
        <CityItem
          key={index}
          city={city}
          handleClick={() => handleClick(city)}
        />
      ))}
    </CitiesBlock>
  );
};

const CitiesBlock = styled.div`
  height: 300px;
  overflow: auto;
`;

export default Cities;
