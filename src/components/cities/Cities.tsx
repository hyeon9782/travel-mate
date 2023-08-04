import styled from "styled-components";
import CityItem from "./CityItem";
import { City } from "../../types";
type Props = {
  cities: City[];
};
const Cities = ({ cities = [] }: Props) => {
  return (
    <CitiesBlock>
      {cities.map((city, index) => (
        <CityItem key={index} city={city} />
      ))}
    </CitiesBlock>
  );
};

const CitiesBlock = styled.div`
  padding: 10px;
  overflow: auto;
`;

export default Cities;
