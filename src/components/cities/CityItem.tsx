import styled from "styled-components";
import { City } from "../../types";
import { useState } from "react";

type Props = {
  city: City;
  handleClick: (city: City) => void;
};
const CityItem = ({ city, handleClick }: Props) => {
  const [isSelect, setIsSelect] = useState(false);

  // const checkCity = () => {
  //   setIsSelect(selectPlaces.includes(place));
  // };
  return (
    <CityBlock>
      <ImageBox></ImageBox>
      <div>{city.city}</div>
      {!isSelect ? (
        <SelectButton onClick={() => handleClick(city)}>선택</SelectButton>
      ) : (
        <CancleButton>취소</CancleButton>
      )}
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

const CancleButton = styled.button`
  border-radius: 15px;
  border: 1px solid blue;
  padding: 5px 10px;
  font-weight: bold;
  color: blue;
  background-color: white;
`;

export default CityItem;
