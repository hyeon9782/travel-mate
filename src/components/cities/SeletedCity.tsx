import styled from "styled-components";
import { City } from "../../types";
import { truncateTextOverflow } from "../../utils/utils";
type Props = {
  city: City;
  handleClick: (city: City) => void;
};
const SelectedCity = ({ city, handleClick }: Props) => {
  return (
    <SelectedCityBlock onClick={() => handleClick(city)}>
      <CityImage></CityImage>
      <CityName>{truncateTextOverflow(city.city)}</CityName>
    </SelectedCityBlock>
  );
};

const SelectedCityBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CityImage = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: lightgray;
`;

const CityName = styled.div`
  font-size: 0.8rem;
  padding: 5px;
`;

export default SelectedCity;
