import styled from "styled-components";
import SelectedCity from "./SeletedCity";
type Props = {
  selectCities: [];
};
const SeletedCities = ({ selectCities = [] }: Props) => {
  return (
    <SeletedCitiesBlock>
      {selectCities.map((city, index) => (
        <SelectedCity key={index} city={city} />
      ))}
    </SeletedCitiesBlock>
  );
};

const SeletedCitiesBlock = styled.div`
  display: flex;
  border-top: 1px solid lightgray;
  gap: 30px;
  padding: 10px 0;
  margin: 10px 0px;
`;

export default SeletedCities;
