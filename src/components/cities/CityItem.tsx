import styled from "styled-components";
import { City } from "../../types";

type Props = {
  city: City;
  handleClick: (city: City) => void;
};
const CityItem = ({ city, handleClick }: Props) => {
  return <CityBlock onClick={() => handleClick(city)}>{city.city}</CityBlock>;
};

const CityBlock = styled.div`
  height: 70px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: lightgray;

  &:hover {
    background-color: gray;
  }
`;

export default CityItem;
