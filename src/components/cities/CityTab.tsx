import styled from "styled-components";
import Cities from "./Cities";
import { CITIES } from "../../constants/cities";
import { useState } from "react";
import SeletedCities from "./SeletedCities";
import { City } from "../../types";
import CitySearchInput from "./CitySearchInput";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import CitiesTag from "./CityTags";
import DoneButton from "../plan/DoneButton";

const CityTab = ({ moveStep }: (direction: number) => void) => {
  const [inputValue, setInputValue] = useState("");
  const setSearchData = useSetRecoilState(searchState);
  const [isDomestic, setIsDomestic] = useState(false);
  const [cities, setCities] = useState(
    CITIES.filter((city) => city.isDomestic === isDomestic)
  );

  const [selectCities, setSelectCities] = useState([]);

  const handleClick = (city: City) => {
    setSelectCities((prev) => [...prev, city]);
    setSearchData((prev) => ({
      ...prev,
      location: city.location,
    }));
  };

  const toggle = (boolean: boolean) => {
    setIsDomestic(boolean);
    setCities(CITIES.filter((city) => city.isDomestic === boolean));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    let newArr = [];

    if (value) {
      newArr = CITIES.filter(
        (city) => city.city.includes(value) && city.isDomestic === isDomestic
      );
    } else {
      newArr = CITIES.filter((city) => city.isDomestic === isDomestic);
    }

    setInputValue(value);
    setCities(newArr);
  };

  return (
    <CityTabBlock>
      <ButtonBox>
        <CityTabButton
          onClick={() => toggle(false)}
          className={!isDomestic ? "active" : ""}
        >
          해외도시
        </CityTabButton>
        <CityTabButton
          onClick={() => toggle(true)}
          className={isDomestic ? "active" : ""}
        >
          국내도시
        </CityTabButton>
      </ButtonBox>
      {!isDomestic && (
        <CitiesTag
          tags={["전체", "일본", "동남아시아", "유럽", "미주", "중남미"]}
        />
      )}
      <Cities cities={cities} handleClick={handleClick} />
      <SeletedBox>
        {selectCities.length !== 0 && (
          <SeletedCities selectCities={selectCities} />
        )}
        <div className="done-btn-box">
          <DoneButton
            moveStep={moveStep}
            disabled={selectCities.length === 0 ? true : false}
          >
            {selectCities.length > 0
              ? selectCities.length !== 1
                ? `${selectCities[0].city} 외 ${selectCities.length}개 선택 완료`
                : `${selectCities[0].city} 선택 완료`
              : selectCities.length !== 1 && "최소 1개 이상의 도시 선택"}
          </DoneButton>
        </div>
      </SeletedBox>
    </CityTabBlock>
  );
};

const CityTabBlock = styled.div`
  position: relative;
`;

const ButtonBox = styled.div`
  border-bottom: 1px solid lightgray;
`;

const CityTabButton = styled.button`
  width: 50%;
  font-size: 1rem;
  padding: 10px;
  font-weight: bold;
  color: gray;
  background-color: white;
  border: none;
  border-top: 1px solid lightgray;
  &.active {
    color: black;
    border-bottom: 2px solid blue;
  }
`;

const SeletedBox = styled.div`
  /* padding: 10px; */
  width: 100%;
  background-color: white;
  border-top: 1px solid lightgray;
  position: fixed; /* DoneButton이 고정될 수 있도록 설정 */
  bottom: 0; /* 화면 하단에 위치하도록 설정 */
  left: 0; /* 왼쪽 정렬을 위해 설정 (센터 정렬을 원한다면, left와 right를 조정) */

  .done-btn-box {
    padding: 10px;
  }
`;

export default CityTab;
