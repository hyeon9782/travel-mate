import styled from "styled-components";
import { City, Plan } from "../../types";
import { checkSelect } from "../../service/city";

type Props = {
  city: City;
  planData: Plan;
  onCitySelection: (isSelect: boolean, city: City) => void;
};

const CityItem = ({ planData, city, onCitySelection }: Props) => {
  const selectedCities = planData?.cities ?? [];

  const isSelect = checkSelect(city, selectedCities);

  return (
    <CityBlock>
      <div className="city-box">
        <ImageBox></ImageBox>
        <CityContent>
          <div className="city">{city.city}</div>
          <div className="related">{city.related.join(", ")}</div>
        </CityContent>
      </div>
      {isSelect ? (
        <CancleButton onClick={() => onCitySelection(isSelect, city)}>
          취소
        </CancleButton>
      ) : (
        <SelectButton onClick={() => onCitySelection(isSelect, city)}>
          선택
        </SelectButton>
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

  .city-box {
    display: flex;
  }
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
  padding: 7px 15px;
  font-weight: bold;
`;

const CancleButton = styled.button`
  border-radius: 15px;
  border: 1px solid blue;
  padding: 7px 15px;
  font-weight: bold;
  color: blue;
  background-color: white;
`;

const CityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;

  .city {
    font-size: 1.1rem;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .related {
    font-size: 0.9rem;
    color: gray;
  }
`;

export default CityItem;
