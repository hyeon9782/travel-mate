import styled from "styled-components";
import { City } from "../../types";
import { truncateTextOverflow } from "../../utils/utils";
import { handleCitySelection } from "../../service/city";
type Props = {
  city: City;
  setPlanData: any;
};
const SelectedCity = ({ city, setPlanData }: Props) => {
  return (
    <SelectedCityBlock
      onClick={() => handleCitySelection(true, setPlanData, city)}
    >
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
