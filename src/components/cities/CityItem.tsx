import styled from "styled-components";
import { City } from "../../types";

type Props = {
  city: City;
  handleClick: (city: City) => void;
};
const CityItem = ({ city, handleClick }: Props) => {
  return (
    <CityBlock onClick={() => handleClick(city)}>
      <ImageBox></ImageBox>
      <div>{city.city}</div>
      <SelectButton>선택</SelectButton>
    </CityBlock>
  );
};

const CityBlock = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
`;

const ImageBox = styled.div`
  border-radius: 50%;
  background-color: lightgray;
  height: 40px;
  width: 40px;
`;

const SelectButton = styled.button`
  border-radius: 15px;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
`;

export default CityItem;
