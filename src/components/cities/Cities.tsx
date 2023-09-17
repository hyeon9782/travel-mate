import styled from "styled-components";
import CityItem from "./CityItem";
import { City, Plan } from "../../types";
type Props = {
  planData: Plan;
  cities: City[];
  onCitySelection: (isSelect: boolean, city: City) => void;
};
const Cities = ({ planData, cities = [], onCitySelection }: Props) => {
  return (
    <CitiesBlock>
      {cities.map((city, index) => (
        <CityItem
          key={index}
          city={city}
          onCitySelection={onCitySelection}
          planData={planData}
        />
      ))}
    </CitiesBlock>
  );
};

const CitiesBlock = styled.div`
  padding: 10px;
  overflow: auto;
`;

export default Cities;
