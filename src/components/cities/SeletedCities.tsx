import styled from "styled-components";
import SelectedCity from "./SeletedCity";
type Props = {
  selectedCities: [];
};
const SeletedCities = ({ selectedCities = [] }: Props) => {
  return (
    <SeletedCitiesBlock>
      {selectedCities.map((city, index) => (
        <SelectedCity key={index} city={city} />
      ))}
    </SeletedCitiesBlock>
  );
};

const SeletedCitiesBlock = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
`;

export default SeletedCities;
